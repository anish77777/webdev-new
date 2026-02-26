// JavaScript Operators

// 1. Arithmetic Operators
console.log("=== Arithmetic Operators ===");
console.log(10 + 5); // Addition: 15
console.log(10 - 5); // Subtraction: 5
console.log(10 * 5); // Multiplication: 50
console.log(10 / 5); // Division: 2
console.log(10 % 3); // Modulo: 1
console.log(2 ** 3); // Exponentiation: 8

// 2. Assignment Operators
console.log("\n=== Assignment Operators ===");
let x = 10;
console.log(x); // 10
x += 5;
console.log(x); // 15
x -= 3;
console.log(x); // 12
x *= 2;
console.log(x); // 24
x /= 4;
console.log(x); // 6

// 3. Comparison Operators
console.log("\n=== Comparison Operators ===");
console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true
console.log(10 <= 5); // false
console.log(10 == "10"); // true (loose equality)
console.log(10 === "10"); // false (strict equality)
console.log(10 != "10"); // false
console.log(10 !== "10"); // true

// 4. Logical Operators
console.log("\n=== Logical Operators ===");
console.log(true && false); // false (AND)
console.log(true || false); // true (OR)
console.log(!true); // false (NOT)

// 5. Increment/Decrement Operators
console.log("\n=== Increment/Decrement Operators ===");
let count = 5;
console.log(count++); // 5 (post-increment)
console.log(count); // 6
console.log(++count); // 7 (pre-increment)
console.log(count--); // 7 (post-decrement)
console.log(--count); // 5 (pre-decrement)

// 6. Ternary Operator
console.log("\n=== Ternary Operator ===");
let age = 20;
let canVote = age >= 18 ? "Yesyfghgf" : "No";
console.log(canVote); // Yes

// 7. Type Operators
console.log("\n=== Type Operators ===");
console.log(typeof 10); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof {}); // "object"
