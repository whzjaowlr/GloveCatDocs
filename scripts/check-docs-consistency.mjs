import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const excludedDirectories = new Set([
  ".git",
  ".vitepress/dist",
  "node_modules",
]);
const checkedExtensions = new Set([".md", ".ts", ".vue", ".yml", ".yaml"]);

async function collectFiles(directory, relativeDirectory = "") {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const relativePath = path.posix.join(relativeDirectory, entry.name);
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      if (
        excludedDirectories.has(relativePath) ||
        excludedDirectories.has(entry.name) ||
        relativePath.startsWith("scripts")
      ) {
        continue;
      }
      files.push(...(await collectFiles(absolutePath, relativePath)));
      continue;
    }
    if (checkedExtensions.has(path.extname(entry.name))) {
      files.push({ absolutePath, relativePath });
    }
  }

  return files;
}

const forbiddenClaims = [
  {
    pattern: /Trading is not open\.\s+Public staking is not live\./i,
    label: "pre-launch FAQ claim",
  },
  {
    pattern: /Trading launch scheduled for June 29, 2026/i,
    label: "expired launch schedule",
  },
  { pattern: /June 29, 2026 at 2:00 PM UTC/i, label: "expired launch time" },
  {
    pattern: /2026-06-29T14:00(?::00)?(?:\.000)?Z/i,
    label: "expired launch timestamp",
  },
  {
    pattern: /latest live readiness check/i,
    label: "undated latest-readiness claim",
  },
  {
    pattern: /incentivePool\s*=\s*1,000,000 GCAT/i,
    label: "stale 1M current-pool equality",
  },
  {
    pattern: /incentivePool (?:now )?holds 1,000,000 GCAT/i,
    label: "stale 1M current-pool claim",
  },
  {
    pattern: /Public staking readiness (?:now )?passes on-chain/i,
    label: "static public-staking readiness claim",
  },
  { pattern: /> Last updated: 2026-06-24/i, label: "stale June 24 page date" },
];

const files = await collectFiles(root);
const violations = [];

for (const file of files) {
  const content = await readFile(file.absolutePath, "utf8");
  for (const forbidden of forbiddenClaims) {
    if (forbidden.pattern.test(content)) {
      violations.push(`${file.relativePath}: ${forbidden.label}`);
    }
  }
}

async function requireContent(relativePath, requiredValues) {
  const content = await readFile(path.join(root, relativePath), "utf8");
  for (const { value, label } of requiredValues) {
    if (!content.includes(value)) {
      violations.push(`${relativePath}: missing ${label}`);
    }
  }
  return content;
}

await requireContent(".vitepress/data/contracts.ts", [
  {
    value: "https://api.glovecatcoin.com/api/v1/public-status",
    label: "canonical production status API",
  },
  {
    value: 'schemaVersion: "1.0.0"',
    label: "production status schema version",
  },
  { value: "2026-07-10T13:53:49.000Z", label: "dated snapshot timestamp" },
  { value: 'blockNumber: "48451141"', label: "dated snapshot block" },
  {
    value: "0xbc6cb32902c61cb39da42f24cb656ff2053133c9c21998cb590120e0c234fa89",
    label: "dated snapshot block hash",
  },
  {
    value: "0x5996a597d0f82a612ada863d7e5132f779fbe539f47d07a27547442039920076",
    label: "1M funding evidence",
  },
  {
    value: "0x3d54e7a95f62b4c945924b0f7325c0af3dbfe0cb2f89a31ea77df36f181840d3",
    label: "4M funding evidence",
  },
]);

await requireContent(".vitepress/theme/components/LiveProtocolStatus.vue", [
  {
    value: "MAX_OBSERVATION_AGE_MS",
    label: "explicit observation freshness constant",
  },
  {
    value: 'requiredString(data, "schemaVersion")',
    label: "schema-version validation",
  },
  {
    value: 'requiredString(data, "blockHash")',
    label: "block-hash validation",
  },
  {
    value: 'requiredString(data, "validUntil")',
    label: "valid-until validation",
  },
]);

await requireContent("guide/operational-status.md", [
  { value: "<LiveProtocolStatus />", label: "live status component" },
  { value: "On-chain call possible", label: "on-chain terminology" },
  {
    value: "Official public readiness",
    label: "official readiness terminology",
  },
  { value: "UI availability", label: "UI availability terminology" },
  {
    value: "current status unavailable",
    label: "conservative failure wording",
  },
]);

await requireContent("guide/official-pool-policy.md", [
  {
    value: "/guide/registered-pool-policy",
    label: "registered-pool compatibility link",
  },
]);

const workflow = await requireContent(".github/workflows/deploy.yml", [
  { value: "actions/checkout@v7", label: "checkout action major" },
  { value: "pnpm/action-setup@v6", label: "pnpm setup action" },
  { value: "actions/setup-node@v6", label: "setup-node action major" },
  { value: "node-version: 22", label: "Node 22 build runtime" },
  {
    value: "actions/configure-pages@v6",
    label: "configure-pages action major",
  },
  {
    value: "actions/upload-pages-artifact@v5",
    label: "pages artifact action major",
  },
  { value: "actions/deploy-pages@v5", label: "deploy-pages action major" },
  { value: "cache: pnpm", label: "pnpm cache configuration" },
]);
if (
  workflow.indexOf("pnpm/action-setup@v6") >
  workflow.indexOf("actions/setup-node@v6")
) {
  violations.push(
    ".github/workflows/deploy.yml: pnpm must be installed before setup-node pnpm caching",
  );
}

await requireContent(".vitepress/config.ts", [
  {
    value: "connect-src 'self' https://api.glovecatcoin.com",
    label: "narrow status API CSP",
  },
  {
    value: 'link: "/guide/operational-status"',
    label: "operational-status navigation",
  },
]);

await requireContent(".vitepress/theme/index.ts", [
  {
    value: 'app.component("LiveProtocolStatus", LiveProtocolStatus)',
    label: "live component registration",
  },
]);

await requireContent("package.json", [
  {
    value: '"consistency:check": "node scripts/check-docs-consistency.mjs"',
    label: "consistency package script",
  },
  {
    value: '"docs:build": "pnpm run consistency:check && vitepress build"',
    label: "pre-build consistency gate",
  },
]);

await requireContent("guide/roadmap.md", [
  { value: "> Last updated: 2026-07-11", label: "current roadmap date" },
]);

if (violations.length > 0) {
  throw new Error(
    `Documentation consistency check failed:\n- ${violations.join("\n- ")}`,
  );
}

console.log(
  `Checked ${files.length} source files for operational-status consistency.`,
);
