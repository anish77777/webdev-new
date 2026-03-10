/*
  --- COMMONJS vs ECMASCRIPT MODULES ---

  1. WHY IS THIS COMMONJS (CJS)?
     Because the file extension is '.js' and we haven't added 
     '"type": "module"' to our 'package.json'. 
     In this mode, we MUST use 'require' and 'module.exports'.

  2. HOW TO USE ECMASCRIPT (ESM)?
     If we want to use 'import' and 'export' instead of 'require':
     - Option A: Change this file extension to '.mjs'.
     - Option B: Add '"type": "module"' to 'package.json'.
*/

// This is the CommonJS way (the older way)
// It uses 'require' to import tools from other files
const { createServer } = require("node:http"); 
// Modern Way: import { createServer } from 'node:http';

// --- HOW TO IMPORT YOUR OWN MODULE ---

// Choice 1: Import everything as one object
const mymodule = require("./mymodule.js");
console.log(mymodule.myVar); // 42
mymodule.myFunc();           // "Hello from the module!"

// Choice 2: Destructure (only get what you need)
// const { myVar, myFunc } = require("./mymodule.js");
// console.log(myVar); 

console.log("CommonJS: Hello from main.js!");

const hostname = "127.0.0.1";
const port = 3000;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello Worldd");
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
