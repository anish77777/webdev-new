// MAP - transforms each element of an array using a callback function
// Returns a NEW array with the transformed elements
console.log("======== MAP METHOD ========");
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(function (num) {
  return num * 2;
});
console.log("Original:", numbers);
console.log("Doubled:", doubled); // [2, 4, 6, 8, 10]

// MAP with arrow function (cleaner syntax)
let squared = numbers.map((num) => num * num);
console.log("Squared:", squared); // [1, 4, 9, 16, 25]

// forEach to modify and print squared values
numbers.forEach((element, index) => {
  numbers[index] = element * element; // Use numbers[index], not element[index]
});
console.log("Squared with forEach:", numbers); // [1, 4, 9, 16, 25]

// MAP with objects array
let students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 75 },
  { name: "Charlie", score: 90 },
];
let names = students.map((student) => student.name);
console.log("Student names:", names); // ["Alice", "Bob", "Charlie"]

// FILTER - creates a NEW array with elements that pass the test condition
// Returns a filtered array, original array is NOT modified
console.log("\n======== FILTER METHOD ========");
let scores = [45, 67, 82, 55, 90, 42, 88];
let passed = scores.filter((score) => score >= 50);
console.log("All scores:", scores);
console.log("Passed (>=50):", passed); // [67, 82, 55, 90, 88]

// FILTER with objects array
let adults = students.filter((student) => student.score >= 80);
console.log("High scorers (>=80):", adults); // Alice and Charlie

// Combine MAP and FILTER
let passedNames = students
  .filter((student) => student.score >= 80)
  .map((student) => student.name);
console.log("Names of high scorers:", passedNames); // ["Alice", "Charlie"]

// REDUCE - reduces an array to a SINGLE VALUE
// Applies a function to each element (accumulating the result)
console.log("\n======== REDUCE METHOD ========");
let values = [1, 2, 3, 4, 5];
let sum = values.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0); // 0 is the initial value of accumulator
console.log("Sum of values:", sum); // 15

// REDUCE with arrow function
let product = values.reduce((acc, val) => acc * val, 1);
console.log("Product:", product); // 120

// REDUCE to find maximum value
let max = values.reduce((acc, val) => (val > acc ? val : acc));
console.log("Maximum value:", max); // 5

// REDUCE with objects array - sum all scores
let totalScore = students.reduce((sum, student) => sum + student.score, 0);
console.log("Total score:", totalScore); // 250

// REDUCE to create an object from array
let data = ["name", "age", "city"];
let obj = data.reduce((acc, val, index) => {
  acc[val] = null;
  return acc;
}, {});
console.log("Created object:", obj); // {name: null, age: null, city: null}
let mapped_array = data.map((e) => e + e);
console.log(mapped_array);



let arr2 = [1, 2, 4, 5]
console.log(arr2.reduce((sum, value) => sum * value));
// return sum*value
