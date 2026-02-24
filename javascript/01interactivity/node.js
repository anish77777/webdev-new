// WHAT IS NODE.JS?
// Node.js is JavaScript that runs on your COMPUTER, not in a browser
// It allows you to run JavaScript on the SERVER (backend)

// Example 1: Simple output to console
console.log("Hello from Node.js!");

// Example 2: Working with variables
var name = "Ashek";
var age = 25;
console.log("My name is " + name + " and I am " + age + " years old");

// Example 3: Simple calculation
var num1 = 10;
var num2 = 20;
var sum = num1 + num2;
console.log("Sum is: " + sum);

// Example 4: Using if-else
var score = 85;
if (score >= 80) {
  console.log("You passed with good marks!");
} else if (score >= 60) {
  console.log("You passed!");
} else {
  console.log("You failed!");
}

// Example 5: Using loops
console.log("Numbers from 1 to 5:");
for (var i = 1; i <= 5; i++) {
  console.log(i);
}

// Example 6: Creating a function
function greet(userName) {
  console.log("Welcome " + userName + "!");
}
greet("Ashek");

// ====== BROWSER vs NODE.JS ======

// BROWSER ONLY (does NOT work in Node.js):
// 1. alert() - shows popup alert box
//    alert("This is an alert!");

// 2. confirm() - shows popup with OK/Cancel
//    var userConfirmed = confirm("Are you sure?");

// 3. prompt() - shows popup to get user input
//    var userInput = prompt("Enter your name");

// 4. document object - access HTML elements
//    document.getElementById("myId");
//    document.querySelector(".myClass");
//    document.body.innerHTML;

// 5. window object - browser window properties
//    window.location.href;
//    window.innerWidth;
//    window.alert();

console.log("\n===== TESTING IN NODE.JS =====");

// In Node.js:
console.log("typeof document:", typeof document); // undefined
console.log("typeof window:", typeof window); // undefined
console.log("typeof alert:", typeof alert); // undefined
console.log("typeof confirm:", typeof confirm); // undefined
console.log("typeof prompt:", typeof prompt); // undefined

// What WORKS in Node.js:
console.log("\nWhat works in Node.js:");
console.log("typeof console:", typeof console); // object (can use console.log)
console.log("typeof global:", typeof global); // object (global variables)

// Node.js specific objects:
console.log("typeof process:", typeof process); // object (system info)
console.log("typeof require:", typeof require); // function (import modules)

console.log("\n===== SUMMARY =====");
console.log("BROWSER: alert, confirm, prompt, document, window");
console.log("NODE.JS: console, global, process, require, file system");
