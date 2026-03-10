/* 
  --- THE COMMONJS MODULE WRAPPER ---

  When you run a file in Node.js (CommonJS), Node DOES NOT run your code exactly 
   as you wrote it. Instead, it "wraps" your code inside a function.

  It looks like this behind the scenes:
*/

(function(exports, require, module, __filename, __dirname) {

    // --- YOUR CODE STARTS HERE ---
    
    console.log("Welcome to the CJS Wrapper Demo!");

    // This is why you can use '__dirname' even though you never defined it!
    console.log("Current Directory:", __dirname);
    console.log("Current Filename:", __filename);

    // This is why 'require' is available!
    // const fs = require('fs');

    // This is how 'exports' works!
    exports.secret = 12345;

    // --- YOUR CODE ENDS HERE ---

});

/* 
  WHY DOES NODE DO THIS?
  1. SCOPING: It prevents variables from leaking into the global scope.
  2. UTILITIES: It provides you with tools like 'require' and '__dirname' 
     as arguments to this "secret" function.
*/

// --- HOW TO SEE THE ACTUAL WRAPPER CODE ---
const { wrapper } = require('node:module');

console.log("\nNode's actual module wrapper structure:");
console.log("-----------------------------------------");
console.log(wrapper[0]); // The start: (function (exports, require, module, __filename, __dirname) {
console.log("  ... your code goes here ...");
console.log(wrapper[1]); // The end: });

console.log("\nTry running this file with: node wrapper_demo.js");
