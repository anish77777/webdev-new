/**
 * LOCAL STORAGE CONCEPT
 * Local Storage allows you to store data persistently in the browser.
 * Data remains even after the browser is closed or the page is refreshed.
 * 
 * NOTE: Local Storage ONLY stores strings. 
 * To store objects or arrays, use JSON.stringify() and JSON.parse().
 */

console.log("--- 1. Basic Operations ---");

// Setting an item
// localStorage.setItem(key, value)
localStorage.setItem("name", "Harry");
localStorage.setItem("role", "Developer");

// Getting an item
// localStorage.getItem(key)
let name = localStorage.getItem("name");
console.log("Retrieved Name:", name);

// Removing an item
// localStorage.removeItem(key)
localStorage.removeItem("role");
console.log("Role after removal:", localStorage.getItem("role")); // returns null


console.log("\n--- 2. Storing Objects/Arrays ---");

let user = {
    id: 1,
    skills: ["JS", "CSS", "HTML"],
    active: true
};

// Error: If you do this, it stores "[object Object]"
// localStorage.setItem("user", user); 

// Correct way: Stringify the object
localStorage.setItem("user", JSON.stringify(user));

// To get it back as an object: Parse the string
let storedUser = JSON.parse(localStorage.getItem("user"));
console.log("Retrieved Object (Skills):", storedUser.skills);


console.log("\n--- 3. Other Useful Commands ---");

// Check length (number of items)
console.log("Total items in Storage:", localStorage.length);

// Clear everything
// localStorage.clear();
// console.log("Storage cleared. Length:", localStorage.length);

console.log("\nTIP: Open DevTools (F12) -> Application -> Local Storage to see the data visually!");
