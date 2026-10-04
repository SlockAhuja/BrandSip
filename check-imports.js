import fs from 'fs';
import path from 'path';

function checkImports(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      checkImports(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const importRegex = /import\s+.*?\s+from\s+['"]([^'"]+)['"]/g;
      let match;
      while ((match = importRegex.exec(content)) !== null) {
        const importPath = match[1];
        if (importPath.startsWith('.')) {
          // Resolve relative path
          let resolvedPath = path.resolve(dir, importPath);
          let found = false;
          // check if it exists as .tsx, .ts, .js, .jsx, .css
          const exts = ['.tsx', '.ts', '.js', '.jsx', '.css', ''];
          for (const ext of exts) {
            if (fs.existsSync(resolvedPath + ext)) {
              // check exact case using fs.readdirSync
              const dirName = path.dirname(resolvedPath + ext);
              const baseName = path.basename(resolvedPath + ext);
              try {
                const actualFiles = fs.readdirSync(dirName);
                if (!actualFiles.includes(baseName)) {
                  console.error(`Case mismatch in ${fullPath}: imported '${importPath}' but actual file is '${actualFiles.find(f => f.toLowerCase() === baseName.toLowerCase())}'`);
                }
              } catch (e) {}
              found = true;
              break;
            }
          }
          if (!found) {
            console.error(`File not found in ${fullPath}: imported '${importPath}'`);
          }
        }
      }
    }
  }
}

checkImports('./src');
console.log('Done checking imports.');
