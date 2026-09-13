const fs = require("fs");
const path = require("path");

const outDir = path.join(process.cwd(), "out");
const files = ["sitemap.xml", "robots.txt"];

if (!fs.existsSync(outDir)) {
  console.error("Missing out/ directory. Run next build first.");
  process.exit(1);
}

for (const file of files) {
  const from = path.join(process.cwd(), "public", file);
  const to = path.join(outDir, file);
  fs.copyFileSync(from, to);
  console.log("Published", to);
}
