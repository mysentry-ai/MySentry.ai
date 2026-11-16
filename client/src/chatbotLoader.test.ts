import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import ts from "typescript";
import { describe, expect, it, vi } from "vitest";

const root = path.resolve(import.meta.dirname, "../..");
const source = fs.readFileSync(path.join(root, "client/public/mysentry-chatbot.js"), "utf8");
const tree = ts.createSourceFile("widget.js", source, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
const imports: ts.CallExpression[] = [];
function visit(node: ts.Node) {
  if (ts.isCallExpression(node) && node.expression.kind === ts.SyntaxKind.ImportKeyword) imports.push(node);
  ts.forEachChild(node, visit);
}
visit(tree);
const code = source.slice(0, imports[0].getStart(tree)) + "__loadChatbot()" + source.slice(imports[0].end);

function harness({
  spa = false,
  readyState = "complete",
  painted = false,
  pathname = "/",
  width = 390,
  height = 844,
  visualViewport = false,
  load = vi.fn().mockResolvedValue({ default: { init: vi.fn() } }),
} = {}) {
  const events = new EventTarget();
  const domEvents = new EventTarget();
  const viewportEvents = new EventTarget();
  const timers: { callback: () => Promise<void>; delay: number }[] = [];
  const frames: (() => void)[] = [];
  let host: { hidden: boolean; style: { setProperty: ReturnType<typeof vi.fn> } } | null = null;
  const warn = vi.fn();
  const window = {
    innerWidth: width,
    innerHeight: height,
    location: { pathname },
    addEventListener: events.addEventListener.bind(events),
    requestAnimationFrame: (callback: () => void) => frames.push(callback),
    setTimeout: (callback: () => Promise<void>, delay: number) => timers.push({ callback, delay }),
    ...(visualViewport ? { visualViewport: { width, height, addEventListener: viewportEvents.addEventListener.bind(viewportEvents) } } : {}),
  };
  const document = {
    readyState,
    addEventListener: domEvents.addEventListener.bind(domEvents),
    getElementById: (id: string) => spa && id === "root" ? {} : null,
    querySelector: (selector: string) => selector === "flowise-chatbot" ? host : null,
    documentElement: { dataset: { mysentryAppPainted: painted ? "true" : undefined } },
  };
  const context = vm.createContext({ window, document, console: { warn }, __loadChatbot: load });
  const execute = () => vm.runInContext(code, context);
  execute();
  return {
    window, document, timers, frames, load, warn, execute,
    state: () => (window as typeof window & { __mysentryChatbotLoader?: { status: string } }).__mysentryChatbotLoader?.status,
    dom: () => domEvents.dispatchEvent(new Event("DOMContentLoaded")),
    paint: () => events.dispatchEvent(new Event("mysentry:app-painted")),
    frame: () => frames.shift()!(),
    event: (name: string) => events.dispatchEvent(new Event(name)),
    viewportResize: () => viewportEvents.dispatchEvent(new Event("resize")),
    addHost: () => host = { hidden: false, style: { setProperty: vi.fn() } },
  };
}

function firstPaint(h: ReturnType<typeof harness>) {
  h.frame();
  expect(h.timers).toHaveLength(0);
  h.frame();
}

describe("shared optional Flowise loader", () => {
  it("is deferred in the SPA and keeps CDN code out of main bootstrap", () => {
    const html = fs.readFileSync(path.join(root, "client/index.html"), "utf8");
    expect(html.match(/<script defer src="\/mysentry-chatbot\.js"><\/script>/g)).toHaveLength(1);
    expect(html).not.toContain("Chatbot.init");
    expect(imports).toHaveLength(1);
    expect(tree.statements.filter(ts.isImportDeclaration)).toHaveLength(0);
    expect(source).toContain("https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js");
    expect(fs.readFileSync(path.join(root, "client/src/main.tsx"), "utf8")).not.toContain("flowise-embed");
  });

  it("waits for standalone DOM readiness, two frames and the optional delay", async () => {
    const init = vi.fn();
    const h = harness({ readyState: "loading", load: vi.fn().mockResolvedValue({ default: { init } }) });
    expect(h.frames).toHaveLength(0);
    h.paint();
    expect(h.timers).toHaveLength(0);
    h.dom();
    expect(h.frames).toHaveLength(1);
    firstPaint(h);
    expect(h.timers).toHaveLength(1);
    expect(h.timers[0].delay).toBe(1200);
    expect(h.load).not.toHaveBeenCalled();
    await h.timers[0].callback();
    expect(init).toHaveBeenCalledTimes(1);
    expect(h.state()).toBe("ready");
  });

  it("initializes a late-loaded standalone root without an SPA event", async () => {
    const h = harness();
    firstPaint(h);
    await h.timers[0].callback();
    expect(h.load).toHaveBeenCalledTimes(1);
  });

  it("does not treat SPA DOM readiness or frames as application paint", async () => {
    const h = harness({ spa: true, readyState: "loading", pathname: "/pricing" });
    h.dom();
    expect(h.frames).toHaveLength(0);
    expect(h.timers).toHaveLength(0);
    h.paint(); h.paint();
    expect(h.timers).toHaveLength(1);
    await h.timers[0].callback();
    expect(h.load).toHaveBeenCalledTimes(1);
  });

  it("honors the already-painted SPA marker even on a root SPA fallback", () => {
    const h = harness({ spa: true, painted: true });
    expect(h.timers).toHaveLength(1);
    expect(h.frames).toHaveLength(0);
  });

  it("guards repeated script execution before scheduling and during SDK loading", async () => {
    let resolve!: (value: object) => void;
    const init = vi.fn();
    const h = harness({ load: vi.fn(() => new Promise(done => { resolve = done; })) });
    h.execute();
    expect(h.frames).toHaveLength(1);
    firstPaint(h);
    h.execute();
    expect(h.timers).toHaveLength(1);
    const pending = h.timers[0].callback();
    h.execute();
    resolve({ default: { init } });
    await pending;
    h.execute(); h.paint();
    expect(init).toHaveBeenCalledTimes(1);
    expect(h.load).toHaveBeenCalledTimes(1);
  });

  it.each(["before", "during"])("does not replace an existing Flowise embed %s SDK load", async when => {
    let resolve!: (value: object) => void;
    const init = vi.fn();
    const h = harness({ spa: true, painted: true, load: vi.fn(() => new Promise(done => { resolve = done; })) });
    if (when === "before") h.addHost();
    const pending = h.timers[0].callback();
    if (when === "during") { h.addHost(); resolve({ default: { init } }); }
    await pending;
    expect(init).not.toHaveBeenCalled();
    expect(h.load).toHaveBeenCalledTimes(when === "before" ? 0 : 1);
  });

  it.each(["/admin", "/admin/blog", "/admin/blog/edit"])("does no startup work on %s", pathname => {
    const h = harness({ spa: true, painted: true, pathname });
    h.paint(); h.dom(); h.execute();
    expect(h.frames).toHaveLength(0);
    expect(h.timers).toHaveLength(0);
    expect(h.load).not.toHaveBeenCalled();
  });

  it("rechecks admin navigation before fetching and after SDK loading", async () => {
    const before = harness({ spa: true, painted: true });
    before.window.location.pathname = "/admin/blog";
    await before.timers[0].callback();
    expect(before.load).not.toHaveBeenCalled();
    let resolve!: (value: object) => void;
    const init = vi.fn();
    const during = harness({ spa: true, painted: true, load: vi.fn(() => new Promise(done => { resolve = done; })) });
    const pending = during.timers[0].callback();
    during.window.location.pathname = "/admin/blog";
    resolve({ default: { init } });
    await pending;
    expect(init).not.toHaveBeenCalled();
  });

  it.each(["CDN", "initialization", "invalid SDK"])("contains %s rejection without retry loops or startup failure", async failure => {
    const load = failure === "CDN"
      ? vi.fn().mockRejectedValue(new Error("CDN unavailable"))
      : vi.fn().mockResolvedValue({ default: failure === "invalid SDK" ? {} : { init: vi.fn().mockRejectedValue(new Error("SDK rejected")) } });
    const h = harness({ spa: true, painted: true, load });
    await expect(h.timers[0].callback()).resolves.toBeUndefined();
    expect(h.warn).toHaveBeenCalledTimes(1);
    expect(h.state()).toBe("failed");
    h.execute(); h.paint();
    expect(h.load).toHaveBeenCalledTimes(1);
    expect(h.timers).toHaveLength(1);
  });

  it("uses execution-time visual viewport dimensions, preserves branding and enables safe-area styling", async () => {
    const init = vi.fn();
    const h = harness({ spa: true, painted: true, width: 1440, height: 900, visualViewport: true, load: vi.fn().mockResolvedValue({ default: { init } }) });
    h.window.visualViewport!.width = 320;
    h.window.visualViewport!.height = 420;
    await h.timers[0].callback();
    const config = init.mock.calls[0][0];
    expect(config.chatflowid).toBe("343c9ce8-205b-434d-9c95-68737d97752e");
    expect(config.apiHost).toBe("https://flowise.zigron.com");
    expect(config.theme.chatWindow).toMatchObject({ width: 300, height: 300, title: "MySentry Assistant", welcomeMessage: "Hi there! What brings you in today?", textInput: { autoFocus: false }, footer: { company: "MySentry.AI" } });
    expect(config.theme.button).toMatchObject({ size: 50, customIconSrc: "/chatbot-icon.jpg", autoWindowOpen: { autoOpen: false, autoOpenOnMobile: false } });
    expect(config.theme.customCSS).toContain("safe-area-inset-bottom");
    expect(config.theme.customCSS).toContain("2147483000");
  });

  it("updates viewport constraints on resize and hides the existing widget on SPA admin navigation", async () => {
    let host!: ReturnType<ReturnType<typeof harness>["addHost"]>;
    const init = vi.fn(() => { host = h.addHost(); });
    const h = harness({ spa: true, painted: true, visualViewport: true, load: vi.fn().mockResolvedValue({ default: { init } }) });
    await h.timers[0].callback();
    expect(host.style.setProperty).toHaveBeenCalledWith("--mysentry-chat-height", "844px");
    h.window.visualViewport!.height = 400;
    h.viewportResize();
    expect(host.style.setProperty).toHaveBeenLastCalledWith("--mysentry-chat-height", "400px");
    h.window.location.pathname = "/admin/blog";
    h.event("pushState");
    expect(host.hidden).toBe(true);
    h.window.location.pathname = "/pricing";
    h.event("popstate");
    expect(host.hidden).toBe(false);
    expect(init).toHaveBeenCalledTimes(1);
  });
});
