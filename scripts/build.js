const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

for (const file of ["index.html", "docs.html", "favicon.ico"]) {
  fs.copyFileSync(path.join(root, file), path.join(dist, file));
}
fs.cpSync(path.join(root, "assets"), path.join(dist, "assets"), { recursive: true });

let count = 0;
(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else count += 1;
  }
})(dist);

console.log(`dist ready: ${count} files`);
