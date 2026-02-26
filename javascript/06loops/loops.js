// JavaScript Loops - Complete Guide with Examples and Explanations

// ============================================
// 1. FOR LOOP
// ============================================
// Explanation: A for loop repeats code a specific number of times.
// Syntax: for (initialization; condition; increment/decrement) { code block }
// Best for: When you know exactly how many times you need to loop

console.log("=== FOR LOOP ===");

// Example 1: Simple counting loop
for (let i = 0; i < 5; i++) {
  console.log("Count:", i);
}
// Output: Count: 0, 1, 2, 3, 4

// Example 2: Loop through array
let fruits = ["Apple", "Banana", "Orange", "Mango"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Example 3: Loop backwards
for (let i = 5; i > 0; i--) {
  console.log("Countdown:", i);
}

// ============================================
// 2. WHILE LOOP
// ============================================
// Explanation: A while loop repeats code as long as a condition is true.
// Syntax: while (condition) { code block }
// Best for: When you don't know how many times you need to loop

console.log("\n=== WHILE LOOP ===");

// Example 1: Simple while loop
let count = 0;
while (count < 5) {
  console.log("Count:", count);
  count++;
}

// Example 2: Loop until a value is reached
let num = 1;
while (num <= 10) {
  console.log(num);
  num += 2; // Increment by 2
}

// ============================================
// 3. DO...WHILE LOOP
// ============================================
// Explanation: A do...while loop executes code at least once, then repeats if condition is true.
// Syntax: do { code block } while (condition);
// Best for: When you need the code to execute at least once

console.log("\n=== DO...WHILE LOOP ===");

// Example 1: Simple do...while
let x = 0;
do {
  console.log("Value:", x);
  x++;
} while (x < 3);

// Example 2: Even if condition is false, it runs once
let value = 10;
do {
  console.log("This runs at least once:", value);
} while (value < 5); // Condition is false but code runs once

// ============================================
// 4. FOR...IN LOOP
// ============================================
// Explanation: A for...in loop iterates through all properties of an object or indices of an array.
// Syntax: for (key in object) { code block }
// Best for: Iterating through object properties

console.log("\n=== FOR...IN LOOP ===");

// Example 1: Loop through object properties
let person = {
  name: "Ashek",
  age: 25,
  city: "New York",
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}

// Example 2: Loop through array indices
let colors = ["Red", "Green", "Blue"];
for (let index in colors) {
  console.log(index + ": " + colors[index]);
}

// ============================================
// 5. FOR...OF LOOP
// ============================================
// Explanation: A for...of loop iterates through the VALUES of an iterable (arrays, strings, etc).
// Syntax: for (value of iterable) { code block }
// Best for: Iterating through array values directly

console.log("\n=== FOR...OF LOOP ===");

// Example 1: Loop through array values
let numbers = [10, 20, 30, 40];
for (let num of numbers) {
  console.log(num);
}

// Example 2: Loop through string
let text = "Hello";
for (let char of text) {
  console.log(char);
}

// ============================================
// 6. FOREACH LOOP
// ============================================
// Explanation: forEach() is a method that executes a function for each array element.
// Syntax: array.forEach(function(element, index, array) { code block });
// Best for: Functional approach to array iteration

console.log("\n=== FOREACH LOOP ===");

// Example 1: Simple forEach
let animals = ["Cat", "Dog", "Bird", "Fish"];
animals.forEach(function (animal) {
  console.log(animal);
});

// Example 2: forEach with index
let items = ["Item 1", "Item 2", "Item 3"];
items.forEach(function (item, index) {
  console.log(index + ": " + item);
});

// Example 3: forEach with arrow function (modern syntax)
let products = ["Phone", "Laptop", "Tablet"];
products.forEach((product, index) => {
  console.log(`${index}: ${product}`);
});

// ============================================
// 7. BREAK STATEMENT
// ============================================
// Explanation: break terminates the loop immediately
// Best for: When you want to exit the loop based on a condition

console.log("\n=== BREAK STATEMENT ===");

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Exit loop when i equals 5
  }
  console.log(i);
}
// Output: 0, 1, 2, 3, 4

// ============================================
// 8. CONTINUE STATEMENT
// ============================================
// Explanation: continue skips the current iteration and moves to the next one
// Best for: When you want to skip certain iterations

console.log("\n=== CONTINUE STATEMENT ===");

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(i);
}
// Output: 1, 3, 5, 7, 9 (only odd numbers)

// ============================================
// 9. NESTED LOOPS
// ============================================
// Explanation: A loop inside another loop
// Best for: Working with multi-dimensional data like tables

console.log("\n=== NESTED LOOPS ===");

// Create a multiplication table
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

// ============================================
// 10. LOOP COMPARISON TABLE
// ============================================

/*
Loop Type     | Use When                           | Syntax Style
--------------|------------------------------------|-----------------
For           | You know the iteration count       | C-style with counter
While         | Condition-based, unknown count     | Simple condition check
Do...While    | Need at least one execution        | Execute-then-check
For...In      | Iterating object properties        | Loop through keys
For...Of      | Iterating array/string values      | Loop through values
forEach       | Functional style array iteration   | Method with callback
*/
