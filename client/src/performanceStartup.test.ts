import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import React from "react";
import { renderToString } from "react-dom/server";
import ts from "typescript";
import { describe, expect, it, vi } from "vitest";
import {
  extractPublicShell,
  renderPublicShell,
} from "../../scripts/generate-public-shell.mjs";
import {
  PUBLIC_HEADER_HTML,
  PUBLIC_BANNER_HTML,
  PUBLIC_FOOTER_HTML,
} from "./components/public-shell/publicShellMarkup";

const root = path.resolve(import.meta.dirname, "../..");
const read = (file: string) => fs.readFileSync(path.join(root, file), "utf8");
const app = read("client/src/App.tsx");
const html = read("client/index.html");
const tree = ts.createSourceFile(
  "App.tsx",
  app,
  ts.ScriptTarget.Latest,
  true,
  ts.ScriptKind.TSX
);
const hash = (value: unknown) =>
  createHash("sha256").update(JSON.stringify(value)).digest("hex");

function allNodes(tree: ts.Node): ts.Node[] {
  const nodes: ts.Node[] = [];
  function visit(node: ts.Node) {
    nodes.push(node);
    ts.forEachChild(node, visit);
  }
  visit(tree);
  return nodes;
}

function functionSource(name: string) {
  const node = allNodes(tree).find(
    node => ts.isFunctionDeclaration(node) && node.name?.text === name
  );
  if (!node) throw new Error(`Missing startup function: ${name}`);
  return node.getText(tree);
}

// Evaluate only the small route-boundary helpers: no page modules or API providers.
function appHelpers(
  effect?: (callback: () => (() => void) | void) => void,
  window?: object
) {
  const source = [
    "PublicRouteFallback",
    "lazyPublicPage",
    "AdminRouteFallback",
    "FirstAppPaint",
  ]
    .map(functionSource)
    .join("\n");
  const code = ts.transpileModule(source, {
    compilerOptions: { target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.React },
  }).outputText;
  const context = vm.createContext({
    React,
    lazy: React.lazy,
    Suspense: React.Suspense,
    useEffect: effect ?? (() => {}),
    Layout: ({ children }: { children: React.ReactNode }) =>
      React.createElement(
        "div",
        {},
        React.createElement("header", { "data-test-shell": "header" }),
        children,
        React.createElement("footer", { "data-test-shell": "footer" })
      ),
    window,
    document: { documentElement: { dataset: {} } },
    Event,
  });
  vm.runInContext(code, context);
  return context;
}

const widget = [...html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)].find(
  match => match[2].includes("Chatbot.init")
)!;

function chatbotHarness({
  pathname = "/pricing",
  width = 1440,
  height = 900,
  painted = false,
  load = vi.fn().mockResolvedValue({ default: { init: vi.fn() } }),
}: {
  pathname?: string;
  width?: number;
  height?: number;
  painted?: boolean;
  load?: ReturnType<typeof vi.fn>;
} = {}) {
  const listeners = new EventTarget();
  const timers: { callback: () => Promise<void>; delay: number }[] = [];
  const warn = vi.fn();
  const window = {
    innerWidth: width,
    innerHeight: height,
    location: { pathname },
    addEventListener: listeners.addEventListener.bind(listeners),
    setTimeout: (callback: () => Promise<void>, delay: number) =>
      timers.push({ callback, delay }),
  };
  const scriptTree = ts.createSourceFile(
    "chatbot.js",
    widget[2],
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.JS
  );
  const imports = allNodes(scriptTree).filter(
    node =>
      ts.isCallExpression(node) &&
      node.expression.kind === ts.SyntaxKind.ImportKeyword
  );
  expect(imports).toHaveLength(1);
  const importNode = imports[0];
  // Stub only the dynamic import expression. Preserve every scheduling/init byte.
  const code =
    widget[2].slice(0, importNode.getStart(scriptTree)) +
    "__loadChatbot()" +
    widget[2].slice(importNode.end);
  vm.runInNewContext(code, {
    window,
    document: {
      documentElement: {
        dataset: { mysentryAppPainted: painted ? "true" : undefined },
      },
    },
    console: { warn },
    __loadChatbot: load,
  });
  return {
    window,
    timers,
    warn,
    load,
    paint: () => listeners.dispatchEvent(new Event("mysentry:app-painted")),
  };
}

describe("startup route graph", () => {
  it("preserves the ordered 109-route table, components, nesting and redirect destinations", () => {
    const routes = allNodes(tree)
      .filter(
        node =>
          (ts.isJsxElement(node) &&
            node.openingElement.tagName.getText(tree) === "Route") ||
          (ts.isJsxSelfClosingElement(node) &&
            node.tagName.getText(tree) === "Route")
      )
      .map(node => {
        const element = ts.isJsxElement(node)
          ? node.openingElement
          : (node as ts.JsxSelfClosingElement);
        const attrs = Object.fromEntries(
          element.attributes.properties
            .filter(ts.isJsxAttribute)
            .map(attr => [
              attr.name.getText(tree),
              attr.initializer
                ? ts.isStringLiteral(attr.initializer)
                  ? attr.initializer.text
                  : attr.initializer.getText(tree).replace(/[{}]/g, "")
                : true,
            ])
        );
        const text = node.getText(tree);
        return [
          attrs.path ?? null,
          attrs.component ?? null,
          !!attrs.nest,
          text.match(/<RedirectRoute to="([^"]+)"/)?.[1] ?? null,
        ];
      });
    expect(routes).toHaveLength(112);
    const originalRoutes = routes.filter(route => !["/features/panic-alarm", "/features/fall-detection", "/features/safety-check"].includes(String(route[0])));
    expect(originalRoutes).toHaveLength(109);
    // Fingerprint captured from the complete baseline before implementation.
    expect(hash(originalRoutes)).toBe(
      "76d63c9ec380ccb2149ec0d00cff3cba4240e2a4c8640d20676841198e8d3d00"
    );
  });

  it("keeps Home eager and makes every other live public route lazy", () => {
    const pageImports = tree.statements
      .filter(ts.isImportDeclaration)
      .filter(node =>
        /(?:^|\/)pages\//.test((node.moduleSpecifier as ts.StringLiteral).text)
      );
    expect(
      pageImports.map(node => (node.moduleSpecifier as ts.StringLiteral).text)
    ).toEqual(["./pages/Home"]);
    const liveComponents = new Set(
      [...app.matchAll(/component=\{(\w+)\}/g)].map(match => match[1])
    );
    liveComponents.delete("Home");
    const lazyComponents = new Set(
      [...app.matchAll(/const (\w+) = lazyPublicPage\(/g)].map(
        match => match[1]
      )
    );
    expect(lazyComponents).toEqual(liveComponents);
    expect(app).toMatch(
      /const AdminLayout = lazy\(\(\) => import\("\.\/pages\/admin\/AdminLayout"\)\);/
    );
    expect(app).toContain("<Suspense fallback={<AdminRouteFallback />}>");
    const home = read("client/src/pages/Home.tsx");
    expect(home).toContain("useLayoutEffect");
    expect(home).toContain(
      "`/${window.location.search}${window.location.hash}`"
    );
    expect(app).not.toMatch(/window\.location\.replace\("\/admin\/blog"\)/);
  });

  it("maps all seven named growth exports explicitly without importing the group eagerly", () => {
    for (const name of [
      "AgingInPlaceChecklistPage",
      "FamilySafetyWithoutTrackingPage",
      "NightShiftNurseChecklistPage",
      "PeopleLivingAlonePage",
      "RenterSafetyPage",
      "UtilityWorkersPage",
      "WearableFallLimitationsPage",
    ]) {
      expect(app).toContain(`default: module.${name}`);
    }
  });

  it("renders one nonblank public shell while a page chunk is unresolved", () => {
    const helpers = appHelpers();
    const Page = helpers.lazyPublicPage(() => new Promise(() => {}));
    const output = renderToString(React.createElement(Page));
    expect(output.match(/data-test-shell="header"/g)).toHaveLength(1);
    expect(output.match(/data-test-shell="footer"/g)).toHaveLength(1);
    expect(output).toContain("Loading MySentry...");
    expect(output).toContain('role="status"');
    expect(functionSource("lazyPublicPage")).not.toContain("<Layout>");
  });

  it("keeps admin loading copy without a public shell", () => {
    const output = renderToString(
      React.createElement(appHelpers().AdminRouteFallback)
    );
    expect(output).toContain("Loading...");
    expect(output).not.toContain("data-test-shell");
  });

  it("signals only after a commit and two animation frames, with cleanup", () => {
    let effect!: () => () => void;
    const frames = new Map<number, () => void>();
    const dispatch = vi.fn();
    let nextId = 0;
    const cancel = vi.fn((id: number) => frames.delete(id));
    const helpers = appHelpers(
      callback => {
        effect = callback as () => () => void;
      },
      {
        requestAnimationFrame: (callback: () => void) => {
          frames.set(++nextId, callback);
          return nextId;
        },
        cancelAnimationFrame: cancel,
        dispatchEvent: dispatch,
      }
    );
    helpers.FirstAppPaint();
    expect(frames.size).toBe(0);
    const cleanup = effect();
    expect(dispatch).not.toHaveBeenCalled();
    frames.get(1)!();
    expect(dispatch).not.toHaveBeenCalled();
    frames.get(2)!();
    expect(dispatch.mock.calls[0][0].type).toBe("mysentry:app-painted");
    expect(helpers.document.documentElement.dataset.mysentryAppPainted).toBe(
      "true"
    );
    cleanup();
    expect(cancel).toHaveBeenCalledWith(1);
    expect(cancel).toHaveBeenCalledWith(2);
  });
});

describe("independent optional chatbot startup", () => {
  it("uses a classic script with no static CDN import or main bootstrap dependency", () => {
    expect(widget[1]).not.toContain('type="module"');
    const parsed = ts.createSourceFile(
      "widget.js",
      widget[2],
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.JS
    );
    expect(allNodes(parsed).filter(ts.isImportDeclaration)).toHaveLength(0);
    expect(widget[2]).toContain(
      "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
    );
    expect(read("client/src/main.tsx")).not.toContain("flowise-embed");
  });

  it("does not import before paint and schedules independently exactly once", async () => {
    const init = vi.fn();
    const harness = chatbotHarness({
      load: vi.fn().mockResolvedValue({ default: { init } }),
    });
    expect(harness.timers).toHaveLength(0);
    expect(harness.load).not.toHaveBeenCalled();
    harness.paint();
    harness.paint();
    expect(harness.timers).toHaveLength(1);
    expect(harness.timers[0].delay).toBe(1200);
    expect(harness.load).not.toHaveBeenCalled();
    await harness.timers[0].callback();
    expect(init).toHaveBeenCalledTimes(1);
  });

  it("honors the already-painted marker without waiting for another event", () => {
    expect(chatbotHarness({ painted: true }).timers).toHaveLength(1);
  });

  it.each([
    [
      1440,
      900,
      "5ac185a8945df73a7d30f4ac975ec419a977a05b17dc96920a870e63e0cf76ab",
    ],
    [
      390,
      844,
      "b59c0c3fda4ff4e9edd6df92ded074e16ebbaa270da5e3b6c5198309b2b7a707",
    ],
    [
      768,
      500,
      "3fac76fc6ec20b26e68e88fc82a29ddd6661a3539aee5921bedf10bf1275dfbc",
    ],
  ])(
    "preserves every baseline chatbot option at %i x %i",
    async (width, height, expected) => {
      const init = vi.fn();
      const harness = chatbotHarness({
        width,
        height,
        painted: true,
        load: vi.fn().mockResolvedValue({ default: { init } }),
      });
      await harness.timers[0].callback();
      expect(hash(init.mock.calls[0][0])).toBe(expected);
    }
  );

  it("captures responsive dimensions when delayed startup actually runs", async () => {
    const init = vi.fn();
    const harness = chatbotHarness({
      painted: true,
      load: vi.fn().mockResolvedValue({ default: { init } }),
    });
    harness.window.innerWidth = 390;
    harness.window.innerHeight = 844;
    await harness.timers[0].callback();
    expect(hash(init.mock.calls[0][0])).toBe(
      "b59c0c3fda4ff4e9edd6df92ded074e16ebbaa270da5e3b6c5198309b2b7a707"
    );
  });

  it("never fetches on admin and rechecks navigation before import and init", async () => {
    const admin = chatbotHarness({ pathname: "/admin/blog", painted: true });
    admin.paint();
    expect(admin.timers).toHaveLength(0);
    expect(admin.load).not.toHaveBeenCalled();
    const beforeImport = chatbotHarness({ painted: true });
    beforeImport.window.location.pathname = "/admin/blog";
    await beforeImport.timers[0].callback();
    expect(beforeImport.load).not.toHaveBeenCalled();
    let resolve!: (module: object) => void;
    const init = vi.fn();
    const duringImport = chatbotHarness({
      painted: true,
      load: vi.fn(
        () =>
          new Promise(done => {
            resolve = done;
          })
      ),
    });
    const pending = duringImport.timers[0].callback();
    duringImport.window.location.pathname = "/admin/blog";
    resolve({ default: { init } });
    await pending;
    expect(init).not.toHaveBeenCalled();
  });

  it("catches both CDN rejection and chatbot initialization rejection", async () => {
    for (const load of [
      vi.fn().mockRejectedValue(new Error("CDN unavailable")),
      vi
        .fn()
        .mockResolvedValue({
          default: {
            init: vi.fn().mockRejectedValue(new Error("Initialization failed")),
          },
        }),
    ]) {
      const harness = chatbotHarness({ painted: true, load });
      await expect(harness.timers[0].callback()).resolves.toBeUndefined();
      expect(harness.warn).toHaveBeenCalledTimes(1);
    }
  });

  it("retains the early Meta queue, single tracker identity, deferred Umami and fonts", () => {
    expect(html.match(/fbq\('init', '1716033506492126'\)/g)).toHaveLength(1);
    expect(html).toContain("t.async=!0");
    expect(html).toMatch(
      /<script\s+defer\s+src="%VITE_ANALYTICS_ENDPOINT%\/umami"/
    );
    expect(html).toContain(
      "family=Barlow:wght@400;500;600;700&family=Barlow+Condensed:wght@600;700;800&family=Inter:wght@400;500;600&display=swap"
    );
  });
});

describe("pre-generated approved public shell", () => {
  it("matches all three authoritative normalized fragments and contains no homepage body/runtime", () => {
    const source = read("client/public/mysentry-homepage-v17.html");
    expect({
      PUBLIC_HEADER_HTML,
      PUBLIC_BANNER_HTML,
      PUBLIC_FOOTER_HTML,
    }).toEqual(extractPublicShell(source));
    const generated = read(
      "client/src/components/public-shell/publicShellFragments.generated.ts"
    );
    expect(generated).toBe(renderPublicShell(source));
    expect(Buffer.byteLength(generated)).toBeLessThan(30000);
    expect(generated).not.toMatch(
      /positionHero|homepage-deferred-images|RECOVERY V9|<script|<style|<!doctype/i
    );
    expect(
      read("client/src/components/public-shell/publicShellMarkup.ts")
    ).not.toContain("?raw");
  });

  it("is deterministic and fails closed for missing, duplicate or script-bearing fragments", () => {
    const source = read("client/public/mysentry-homepage-v17.html");
    expect(renderPublicShell(source)).toBe(renderPublicShell(source));
    expect(() =>
      renderPublicShell(
        source.replace('<header class="site-header"', '<header class="missing"')
      )
    ).toThrow("exactly one");
    expect(() => renderPublicShell(source + PUBLIC_HEADER_HTML)).toThrow(
      "exactly one"
    );
    expect(() =>
      renderPublicShell(
        source.replace("</header>", "<script>alert(1)</script></header>")
      )
    ).toThrow("must not include scripts");
  });
});
