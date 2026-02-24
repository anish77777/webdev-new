// ===== JAVASCRIPT DATA TYPES =====

console.log("===== DATA TYPES IN JAVASCRIPT =====\n");

// ===== PRIMITIVE DATA TYPES =====
console.log("--- PRIMITIVE DATA TYPES ---\n");

// 1. String
let name = "Ashek";
let greeting = 'Hello World';
let template = `My name is ${name}`;
console.log("1. STRING:");
console.log("   name:", name, "Type:", typeof name);
console.log("   greeting:", greeting);
console.log("   template:", template);

// 2. Number
let age = 25;
let price = 99.99;
let negative = -15;
console.log("\n2. NUMBER:");
console.log("   age:", age, "Type:", typeof age);
console.log("   price:", price);
console.log("   negative:", negative);

// 3. Boolean
let isStudent = true;
let isMarried = false;
console.log("\n3. BOOLEAN:");
console.log("   isStudent:", isStudent, "Type:", typeof isStudent);
console.log("   isMarried:", isMarried);

// 4. Undefined
let noValue;
console.log("\n4. UNDEFINED:");
console.log("   noValue:", noValue, "Type:", typeof noValue);

// 5. Null
let emptyValue = null;
console.log("\n5. NULL:");
console.log("   emptyValue:", emptyValue, "Type:", typeof emptyValue); // Returns "object" (quirk of JS)

// 6. Symbol (advanced)
let uniqueId = Symbol("id");
console.log("\n6. SYMBOL:");
console.log("   uniqueId:", uniqueId, "Type:", typeof uniqueId);

// 7. BigInt (for very large numbers)
let bigNumber = 123456789012345678901234567890n;
console.log("\n7. BIGINT:");
console.log("   bigNumber:", bigNumber, "Type:", typeof bigNumber);

// ===== OBJECT DATA TYPES =====
console.log("\n--- OBJECT DATA TYPES ---\n");

// 1. Object
let person = {
  name: "Ashek",
  age: 25,
  city: "Mumbai"
};
console.log("1. OBJECT:");
console.log("   person:", person, "Type:", typeof person);

// 2. Array
let fruits = ["Apple", "Banana", "Orange"];
console.log("\n2. ARRAY:");
console.log("   fruits:", fruits, "Type:", typeof fruits); // Returns "object"

// 3. Function
function greet() {
  return "Hello";
}
console.log("\n3. FUNCTION:");
console.log("   greet:", greet, "Type:", typeof greet);

// 4. Date
let today = new Date();
console.log("\n4. DATE:");
console.log("   today:", today, "Type:", typeof today);

// ===== TYPE CONVERSION =====
console.log("\n===== TYPE CONVERSION =====\n");

// String to Number
let str = "25";
let num = Number(str);
console.log("String to Number:");
console.log("   '25' -> Number('25'):", num, "Type:", typeof num);

// Number to String
let number = 100;
let string = String(number);
console.log("\nNumber to String:");
console.log("   100 -> String(100):", string, "Type:", typeof string);

// To Boolean
let value = "Hello";
let bool = Boolean(value);
console.log("\nTo Boolean:");
console.log("   'Hello' -> Boolean('Hello'):", bool, "Type:", typeof bool);

// ===== TYPE CHECKING =====
console.log("\n===== TYPE CHECKING =====\n");

console.log("typeof 'Hello':", typeof "Hello");
console.log("typeof 25:", typeof 25);
console.log("typeof true:", typeof true);
console.log("typeof undefined:", typeof undefined);
console.log("typeof null:", typeof null); // "object" (bug in JS)
console.log("typeof {}:", typeof {});
console.log("typeof []:", typeof []);

// ===== SUMMARY TABLE =====
console.log("\n===== SUMMARY TABLE =====");
console.log("PRIMITIVE TYPES: String, Number, Boolean, Undefined, Null, Symbol, BigInt");
console.log("OBJECT TYPES: Object, Array, Function, Date, etc.");
