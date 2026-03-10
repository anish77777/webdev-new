/* 
  --- THE ES MODULE (ESM) SCOPE ---

  Wait... Where is the function wrapper? 🕵️‍♂️
  Unlike CommonJS, ES Modules (ESM) DO NOT use a function wrapper like 
  (function(exports, require, ...)).

  Instead, ESM files are executed in their own "Module Scope". 

  What's missing?
  - 'require' is NOT available.
  - '__dirname' and '__filename' are NOT available.

  So how do we get file info?
  We use 'import.meta.url'!
*/

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { wrapper } from 'node:module'; // We can still import this!

// 1. Get the current filename (equivalent to __filename)
const __filename = fileURLToPath(import.meta.url);

// 2. Get the current directory (equivalent to __dirname)
const __dirname = path.dirname(__filename);

console.log("ESM Wrapper (Scope) Demo!");
console.log("-----------------------------------------");
console.log("Current Directory (ESM way):", __dirname);
console.log("Current Filename (ESM way):", __filename);

console.log("\nComparison: The 'Ghost' of the CJS Wrapper:");
console.log("Node still keeps the CJS wrapper strings here:");
console.log("Start:", wrapper[0]); 
console.log("End:  ", wrapper[1]);

/* 
  KEY DIFFERENCES:
  1. No Wrapper: ESM is handled directly by the JS engine's module loader.
  2. Strict Mode: ESM is ALWAYS in "strict mode" by default.
  3. 'this': In ESM, 'this' at the top level is 'undefined'. 
     (In CJS, 'this' is 'module.exports').
*/

console.log("\nTry running this file with: node wrapper_esm_demo.mjs");
