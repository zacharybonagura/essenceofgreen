const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const inputDir = "../img";
const outputDir = "../img";

const validExtensions = [".jpg", ".jpeg", ".png"];

fs.readdirSync(inputDir).forEach((file) => {
  const ext = path.extname(file).toLowerCase();
  const baseName = path.basename(file, ext);

  if (!validExtensions.includes(ext)) return;

  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, `${baseName}.webp`);

  sharp(inputPath)
    .rotate()
    .webp({ quality: 75 })
    .toFile(outputPath)
    .then(() => console.log(`✅ Converted: ${file} → ${baseName}.webp`))
    .catch((err) => console.error(`❌ Error processing ${file}:`, err));
});
