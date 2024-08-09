import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Directorio donde se encuentran los iconos
const iconsDir = path.join(__dirname);
const indexPath = path.join(iconsDir, 'index.tsx' );

// Lee los archivos del directorio
fs.readdir(iconsDir, (err, files) => {
  if (err) {    
    console.error('Error al leer el directorio:', err);
    return;
  }

  // Filtra solo los archivos .tsx (excluyendo el index.tsx)
  const iconFiles = files.filter(file => file.endsWith('.tsx') && file !== 'index.tsx');

  // Genera el contenido del archivo de índice
  const indexContent = iconFiles
    .map(file => {
      const importName = path.basename(file, '.tsx');
      if(importName === 'index' || importName === 'generate-index' || importName === 'types') return;
      console.log("importName", importName);
     
      return `export { default as ${importName} } from './${importName}';`;
    })
    .join('\n');

  // Escribe el contenido en el archivo index.tsx
  fs.writeFile(indexPath, indexContent, (err) => {
    if (err) {
      console.error('Error al escribir el archivo index.tsx:', err);
      return;
    }
    console.log('Archivo index.tsx generado exitosamente.');
  });
});