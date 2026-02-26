console.log("hello world");

// Access child nodes by index
console.log("\n=== childNodes by Index ===");
console.log("childNodes[0]:", document.body.childNodes[0]); // First child node (may include text/whitespace)
console.log("childNodes[1]:", document.body.childNodes[1]); // Second child node

// Access first child (including text nodes and whitespace)
console.log("\n=== firstChild (includes whitespace/text) ===");
console.log(document.body.firstChild); // First child node (could be whitespace, text, or element)

// Access first child element (ignores text nodes and whitespace)
console.log("\n=== firstElementChild (only elements) ===");
console.log(document.body.firstElementChild); // First actual HTML element

// Access last child (including text nodes and whitespace)
console.log("\n=== lastChild (includes whitespace/text) ===");
console.log(document.body.lastChild); // Last child node (could be whitespace, text, or element)

// Access last child element (ignores text nodes and whitespace)
console.log("\n=== lastElementChild (only elements) ===");
console.log(document.body.lastElementChild); // Last actual HTML element

// Access children collection (only elements, not text nodes)
console.log("\n=== children (all child elements) ===");
console.log(document.body.children); // HTMLCollection of all child elements
console.log("First child element:", document.body.children[0]);
console.log(
  "Last child element:",
  document.body.children[document.body.children.length - 1],
);
document