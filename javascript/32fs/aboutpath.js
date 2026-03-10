import path from 'path';

/*
  --- UNDERSTANDING PATHS IN NODE.JS 📂 ---

  When working with files, it's dangerous to use relative paths (like './harry.txt')
  because they depend on WHERE you run the terminal from.
  
  The 'path' module helps us build absolute paths that always point 
  to the right place.
*/

// 1. Get the directory of the current script (Modern ESM way)
const __dirname = import.meta.dirname;
console.log("Directory of this script:", __dirname);

// 2. Joining paths
// instead of doing __dirname + "/harry.txt" (which fails on Windows/Mac/Linux differences)
// we use path.join()
const fullPath = path.join(__dirname, 'harry.txt');
console.log("Full path to harry.txt:", fullPath);

// 3. Other useful path tools:
console.log("Extension name:", path.extname(fullPath)); // .txt
console.log("Base name:", path.basename(fullPath));      // harry.txt
console.log("Directory name:", path.dirname(fullPath));  // .../32fs

/*
  --- EXAMPLE WITH TOP-LEVEL AWAIT ---
*/
import fs from 'fs/promises';

console.log("\nReading file using the absolute path...");
const content = await fs.readFile(fullPath, 'utf-8');
console.log("File content read successfully!");