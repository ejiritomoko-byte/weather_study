import fs from "node:fs";
import { pathToFileURL } from "node:url";

const nodeModules = "C:/Users/ejiri/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules";
const pdfjsLib = await import(pathToFileURL(`${nodeModules}/pdfjs-dist/legacy/build/pdf.mjs`).href);
const { createCanvas } = await import(pathToFileURL(`${nodeModules}/@napi-rs/canvas/index.js`).href);

const [pdfPath, pageArg = "1", outputPath = "local-data/rendered-page.png"] = process.argv.slice(2);

if (!pdfPath) {
  throw new Error("Usage: node tools/render-pdf-page.mjs <pdf> [page] [output]");
}

const pageNumber = Number(pageArg);
const data = new Uint8Array(fs.readFileSync(pdfPath));
const loadingTask = pdfjsLib.getDocument({ data, disableWorker: true });
const pdf = await loadingTask.promise;
const page = await pdf.getPage(pageNumber);
const viewport = page.getViewport({ scale: 2.2 });
const canvas = createCanvas(Math.ceil(viewport.width), Math.ceil(viewport.height));
const context = canvas.getContext("2d");

await page.render({ canvasContext: context, viewport }).promise;
const outputDir = outputPath.includes("\\") || outputPath.includes("/")
  ? outputPath.replace(/[\\/][^\\/]*$/, "")
  : ".";
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputPath, canvas.toBuffer("image/png"));
console.log(JSON.stringify({ pdfPath, pageNumber, outputPath, width: canvas.width, height: canvas.height }));
