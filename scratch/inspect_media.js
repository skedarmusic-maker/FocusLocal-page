import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("Inspecionando mídias (ESM)...");

const imagesDir = path.join(__dirname, '..', 'public', 'images');
fs.readdir(imagesDir, (err, files) => {
  if (err) {
    console.error("Erro ao ler diretório de imagens:", err);
    return;
  }
  
  files.forEach(file => {
    const filePath = path.join(imagesDir, file);
    const stats = fs.statSync(filePath);
    console.log(`Arquivo: ${file} | Tamanho: ${(stats.size / (1024 * 1024)).toFixed(2)} MB`);
  });
});
