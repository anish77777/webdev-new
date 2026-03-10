// In CommonJS, we use module.exports to share code
module.exports = {
    myVar: 42,
    myFunc: () => {
        console.log("Hello from the module!");
    }
};

/* 
  --- MODULE SYSTEM EXAMPLES ---

  1. COMMONJS (Current System):
     - To Export: module.exports = { ... }
     - To Import: const { myVar } = require("./mymodule.js");

  2. ECMASCRIPT (Modern System):
     - To Export: 
       export const myVar = 42;
       export const myFunc = () => { ... };
     - To Import: 
       import { myVar } from "./mymodule.js";
*/
