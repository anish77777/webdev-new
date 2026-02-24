// ===== OBJECT DATA TYPES =====
// Objects are mutable and stored by reference.

console.log("%c--- OBJECT DATA TYPES ---", "color: #ff007a; font-weight: bold; font-size: 1.2rem;");

// 1. Object (Key-value pairs)
let person = {
    firstName: "Ashek",
    lastName: "Anish",
    age: 25
};
console.log("1. Object:", person, "| Type:", typeof person);

// 2. Array (Ordered list of values)
let colors = ["Red", "Green", "Blue"];
console.log("2. Array:", colors, "| Type:", typeof colors); // Arrays are technically objects

// 3. Function (Callable objects)
function sayHello() {
    return "Hello!";
}
console.log("3. Function:", sayHello, "| Type:", typeof sayHello);

// 4. Date
let now = new Date();
console.log("4. Date:", now, "| Type:", typeof now);
let sure = true;
console.log(sure+1);
