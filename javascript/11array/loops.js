// FOR...OF LOOP - iterates over the VALUES of an iterable (arrays, strings, etc.)
console.log("======== FOR...OF LOOP ========");
let fruits = ["apple", "banana", "orange", "mango"];

for (let fruit of fruits) {
  console.log("Fruit:", fruit); // fruit is the VALUE
}

// FOR...OF with numbers
let numbers = [10, 20, 30, 40];
for (let num of numbers) {
  console.log("Number:", num);
}

// FOR...IN LOOP - iterates over the KEYS/INDICES of an object or array
console.log("\n======== FOR...IN LOOP ========");
for (let index in fruits) {
  console.log("Index:", index, "Value:", fruits[index]); // index is the KEY/INDEX
}

// FOR...IN with object - iterates through all keys
console.log("\n======== FOR...IN WITH OBJECT ========");
let person = {
  name: "John",
  age: 25,
  city: "New York",
  job: "Developer",
};

for (let key in person) {
  console.log(key + ":", person[key]); // key is the property name, person[key] is the value
}

// FOR...OF with object (using Object.keys())
console.log("\n======== FOR...OF WITH OBJECT KEYS ========");
for (let key of Object.keys(person)) {
  console.log(key + ":", person[key]); // get both key and value
}

// FOR...OF with object (using Object.values())
console.log("\n======== FOR...OF WITH OBJECT VALUES ========");
for (let value of Object.values(person)) {
  console.log("Value:", value); // only get values
}

// FOR...OF with object (using Object.entries())
console.log("\n======== FOR...OF WITH OBJECT ENTRIES ========");
for (let [key, value] of Object.entries(person)) {
  console.log(key + ":", value); // destructuring to get both key and value
}
