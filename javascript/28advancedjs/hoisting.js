/**
 * HOISTING CONCEPT
 * JavaScript's behavior of moving declarations to the top of the current scope.
 */

console.log("--- 1. Variable Hoisting with 'var' ---");
// With 'var', the declaration is hoisted, but NOT the initialization.
// So it returns 'undefined' instead of an error.
console.log(a); // undefined
var a = 5;
console.log(a); // 5


console.log("\n--- 2. Variable Hoisting with 'let' and 'const' ---");
// 'let' and 'const' are also hoisted, but they are in a "Temporal Dead Zone".
// Accessing them before declaration causes a ReferenceError.

try {
    console.log(b); 
} catch (error) {
    console.log("Error accessing 'let' before declaration:", error.message);
}
let b = 10;


console.log("\n--- 3. Function Hoisting ---");
// Function DECLARATIONS are fully hoisted. You can call them before they are written.
greet(); // "Hello World" works fine!

function greet() {
    console.log("Hello from a hoisted function declaration!");
}

// Function EXPRESSIONS or Arrow Functions behave like variables.
// They are NOT hoisted in the same way.
try {
    sayHi();
} catch (error) {
    console.log("Error calling function expression before declaration:", error.message);
}

var sayHi = function() {
    console.log("Hi!");
};

