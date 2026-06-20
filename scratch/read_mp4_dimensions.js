import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const videoPath = path.join(__dirname, '..', 'public', 'images', '1000329384_202606191326.mp4');

try {
  const buffer = fs.readFileSync(videoPath);
  console.log("Tamanho do buffer do vídeo:", buffer.length);
  
  // Vamos buscar por padrões de metadados comuns como 'width' e 'height' ou átomos de vídeo
  // Procuramos por 'tkhd'
  const tkhdIndex = buffer.indexOf(Buffer.from('tkhd'));
  if (tkhdIndex !== -1) {
    console.log("tkhd encontrado na posição:", tkhdIndex);
    // Vamos imprimir 40 bytes após o tkhd
    const slice = buffer.slice(tkhdIndex, tkhdIndex + 120);
    console.log("Bytes do tkhd (hex):", slice.toString('hex'));
    
    // tkhd:
    // size: 4 bytes
    // type: 'tkhd' (4 bytes)
    // version & flags: 4 bytes (geralmente 0x00000001 ou 0x00000003 ou 0x01000007)
    // se version = 0:
    //   creation_time: 4 bytes
    //   modification_time: 4 bytes
    //   track_id: 4 bytes
    //   reserved: 4 bytes
    //   duration: 4 bytes
    // se version = 1:
    //   creation_time: 8 bytes
    //   modification_time: 8 bytes
    //   track_id: 4 bytes
    //   reserved: 4 bytes
    //   duration: 8 bytes
    // depois comum a ambos:
    //   reserved: 8 bytes (2x 32-bit)
    //   layer: 2 bytes
    //   alternate_group: 2 bytes
    //   volume: 2 bytes (8.8 fixed point)
    //   reserved: 2 bytes
    //   matrix: 36 bytes (9x 32-bit matrix)
    //   width: 4 bytes (16.16 fixed point)
    //   height: 4 bytes (16.16 fixed point)
    
    const version = slice.readUInt8(8); // offset 8 a partir do início de tkhd (4 bytes size + 4 bytes 'tkhd')
    console.log("tkhd version:", version);
    
    let matrixOffset = 0;
    if (version === 0) {
      matrixOffset = 8 + 4 + 4 + 4 + 4 + 4 + 8 + 2 + 2 + 2 + 2; // = 44 bytes depois do tkhd
    } else if (version === 1) {
      matrixOffset = 8 + 8 + 8 + 4 + 4 + 8 + 8 + 2 + 2 + 2 + 2; // = 56 bytes depois do tkhd
    }
    
    // A matriz tem 36 bytes
    const widthOffset = matrixOffset + 36;
    const heightOffset = widthOffset + 4;
    
    if (widthOffset + 8 <= slice.length) {
      // O formato é 16.16 fixed point
      const wRaw = slice.readUInt32BE(widthOffset);
      const hRaw = slice.readUInt32BE(heightOffset);
      
      const width = wRaw / 65536;
      const height = hRaw / 65536;
      
      console.log(`Resolução lida: ${width}x${height}`);
      console.log(`Valores brutos: Width = ${wRaw} (0x${wRaw.toString(16)}), Height = ${hRaw} (0x${hRaw.toString(16)})`);
    }
  }
} catch (e) {
  console.error("Erro:", e);
}
