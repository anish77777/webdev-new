let element = document.getElementsByClassName("box");
console.log(element);

element[2].style.backgroundColor = "red";

document.getElementById("last").style.backgroundColor = "pink";
// ===== QUERYSELECTOR EXAMPLES =====

console.log("\n=== querySelector - Select FIRST matching element ===");

// 1. Select by ID using querySelector - use # for ID
let idElement = document.querySelector("#last");
console.log("querySelector by ID:", idElement);
idElement.style.color = "blue";

// 2. Select by class using querySelector - use . for class
let classElement = document.querySelector(".box");
console.log("querySelector by class:", classElement); // Gets FIRST element with class "box"
classElement.style.fontSize = "20px";

// 3. Select by tag name using querySelector
let tagElement = document.querySelector("p");
console.log("querySelector by tag:", tagElement); // Gets FIRST <p> element

// 4. Select by attribute using querySelector
let attrElement = document.querySelector("[data-type='special']");
console.log("querySelector by attribute:", attrElement);

console.log("\n=== querySelectorAll - Select ALL matching elements ===");

// 5. Select all elements with class "box"
let allBoxes = document.querySelectorAll(".box");
console.log("querySelectorAll .box:", allBoxes); // Returns NodeList of all .box elements

// 6. Loop through all selected elements
allBoxes.forEach((box, index) => {
  console.log(`Box ${index}:`, box);
  // box.style.backgroundColor = "lightblue";
});

// 7. Select all paragraphs
let allParagraphs = document.querySelectorAll("p");
console.log("All <p> elements:", allParagraphs);

// 8. Select using complex selectors
let complexSelect = document.querySelectorAll("div.box"); // All <div> with class "box"
console.log("querySelectorAll div.box:", complexSelect);

// 9. Select multiple selectors (OR operator)
let multiSelect = document.querySelectorAll("p, .box, #last"); // All <p> OR .box OR #last
console.log("Multiple selectors:", multiSelect);

// 10. Select by attribute value
let attrAllElements = document.querySelectorAll("[data-type]"); // All elements with data-type attribute
console.log("All elements with data-type:", attrAllElements);

console.log("\n=== Key Differences ===");
console.log("querySelector - Returns FIRST match (single element)");
console.log("querySelectorAll - Returns ALL matches (NodeList)");
console.log("getElementById - Returns element with specific ID");
console.log("getElementsByClassName - Returns HTMLCollection (live)");
console.log("\n=== matches() - Check if element matches a selector ===");

// matches() returns true/false if element matches a CSS selector
let testBox = document.querySelector(".box");

if (testBox.matches(".box")) {
  console.log("✓ testBox matches '.box' selector"); // true
}

if (testBox.matches("div")) {
  console.log("✓ testBox matches 'div' tag"); // true
}

if (testBox.matches("#last")) {
  console.log("✓ testBox matches '#last' ID"); // true or false
} else {
  console.log("✗ testBox does NOT match '#last' ID");
}

// Use case: Check element type before manipulating it
let randomElement = document.querySelector("p");
if (randomElement.matches("p")) {
  console.log("Element is a paragraph");
}

console.log("\n=== closest() - Find closest parent matching selector ===");

// closest() traverses UP the DOM tree to find the first ancestor matching the selector
let innerElement = document.querySelector(".box"); // Get a .box element

// Find closest parent that is a div
let closestDiv = innerElement.closest("div");
console.log("Closest <div> parent:", closestDiv);

// Find closest parent with class "container"
let closestContainer = innerElement.closest(".container");
console.log("Closest .container parent:", closestContainer);

// Find closest element that matches selector
let closestParent = innerElement.closest("[data-type]");
console.log("Closest element with data-type:", closestParent);

// Real-world use case: Event delegation - find parent button from click
function handleClick(e) {
  let button = e.target.closest("button"); // Find closest button
  if (button) {
    console.log("Clicked button:", button);
  }
}

console.log("\n=== contains() - Check if element contains another element ===");

// contains() returns true/false if an element contains another node
let parent = document.body;
let child = document.querySelector(".box");

if (parent.contains(child)) {
  console.log("✓ body contains .box element"); // true
}

// Check if element contains itself
if (child.contains(child)) {
  console.log("✓ Element contains itself"); // true
}

// Check if element contains text node
let textNode = child.firstChild; // Get first child (could be text)
if (child.contains(textNode)) {
  console.log("✓ Element contains its first child node"); // true
}

// Real-world use case: Check if clicked element is inside a specific container
let container = document.querySelector(".container");
document.addEventListener("click", function (e) {
  if (container && container.contains(e.target)) {
    console.log("You clicked inside the container");
  } else {
    console.log("You clicked outside the container");
  }
});

console.log("\n=== Summary ===");
console.log("matches() - Returns TRUE if element matches a selector");
console.log("closest() - Finds the closest parent matching a selector");
console.log("contains() - Returns TRUE if element contains another node");
