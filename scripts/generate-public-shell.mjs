import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  ".."
);
const sourcePath = path.join(
  repoRoot,
  "client/public/mysentry-homepage-v17.html"
);
const outputPath = path.join(
  repoRoot,
  "client/src/components/public-shell/publicShellFragments.generated.ts"
);

// Keep these patterns and normalization identical to the approved shell parity test.
const fragments = [
  ["PUBLIC_HEADER_HTML", /<header class="site-header"[\s\S]*?<\/header>/g],
  [
    "PUBLIC_BANNER_HTML",
    /<section aria-label="MySentry and Ring announcement"[\s\S]*?<\/section>/g,
  ],
  ["PUBLIC_FOOTER_HTML", /<footer class="site-footer"[\s\S]*?<\/footer>/g],
];

export function extractPublicShell(document) {
  return Object.fromEntries(
    fragments.map(([name, pattern]) => {
      const matches = [...document.matchAll(pattern)];
      if (matches.length !== 1) {
        throw new Error(`Approved homepage must contain exactly one ${name}`);
      }
      const markup = matches[0][0].replace(/src="assets\//g, 'src="/assets/');
      if (/<script\b/i.test(markup)) {
        throw new Error(`Approved ${name} must not include scripts`);
      }
      return [name, markup];
    })
  );
}

export function renderPublicShell(document) {
  const values = extractPublicShell(document);
  return [
    "// Generated from client/public/mysentry-homepage-v17.html. Do not edit by hand.",
    "// Regenerate before builds: node scripts/generate-public-shell.mjs",
    "// First-party approved fragments only; no document CSS, hero, or scripts.",
    "",
    ...Object.entries(values).map(
      ([name, markup]) => `export const ${name} = ${JSON.stringify(markup)};`
    ),
    "",
  ].join("\n");
}

// Importing the helpers in a focused test never writes to the repository.
if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  const args = process.argv.slice(2);
  if (args.some(arg => arg !== "--check") || args.length > 1) {
    throw new Error("Usage: node scripts/generate-public-shell.mjs [--check]");
  }
  const output = renderPublicShell(readFileSync(sourcePath, "utf8"));
  if (args.includes("--check")) {
    if (readFileSync(outputPath, "utf8") !== output) {
      throw new Error(
        "Public shell is stale. Run: node scripts/generate-public-shell.mjs"
      );
    }
    console.log("Approved public shell fragments are current.");
  } else {
    writeFileSync(outputPath, output, "utf8");
    console.log(
      `Generated ${path.relative(repoRoot, outputPath)} from the approved homepage.`
    );
  }
}
