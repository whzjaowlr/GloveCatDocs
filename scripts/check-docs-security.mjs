import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const distDir = path.resolve(".vitepress/dist");

async function collectHtmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectHtmlFiles(entryPath)));
      continue;
    }
    if (entry.name.endsWith(".html")) {
      files.push(entryPath);
    }
  }

  return files;
}

function requirePattern(file, html, pattern, label) {
  if (!pattern.test(html)) {
    throw new Error(`${path.relative(process.cwd(), file)} is missing ${label}`);
  }
}

function rejectPattern(file, html, pattern, label) {
  if (pattern.test(html)) {
    throw new Error(`${path.relative(process.cwd(), file)} contains ${label}`);
  }
}

const htmlFiles = await collectHtmlFiles(distDir);
if (htmlFiles.length === 0) {
  throw new Error("No built HTML files found. Run docs:build before security:check.");
}

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  requirePattern(file, html, /http-equiv="Content-Security-Policy"/, "meta CSP");
  requirePattern(file, html, /base-uri 'self'/, "CSP base-uri");
  requirePattern(file, html, /object-src 'none'/, "CSP object-src");
  requirePattern(file, html, /form-action 'self'/, "CSP form-action");
  requirePattern(file, html, /connect-src 'self'(?:;|")/, "narrow CSP connect-src");
  requirePattern(file, html, /frame-src 'none'/, "CSP frame-src");
  requirePattern(file, html, /worker-src 'self' blob:/, "CSP worker-src");
  requirePattern(
    file,
    html,
    /<meta name="referrer" content="strict-origin-when-cross-origin">/,
    "referrer policy",
  );
  rejectPattern(file, html, /connect-src 'self' https:(?:\s|;)/, "broad HTTPS connect-src");
  rejectPattern(file, html, /cloudflareinsights\.com/, "Cloudflare analytics allowlist");
  rejectPattern(file, html, /<script[^>]+src="http:\/\//, "insecure script source");
  rejectPattern(file, html, /<iframe\b/i, "iframe markup");
}

console.log(`Checked ${htmlFiles.length} built HTML files for baseline security metadata.`);
