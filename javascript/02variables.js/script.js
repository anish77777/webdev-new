// ===== SCOPE EXAMPLES =====

console.log("===== BLOCK SCOPE vs GLOBAL SCOPE =====\n");

// ===== VAR (Function/Global Scoped) =====
console.log("--- VAR Behavior ---");
var globalVar = "I am global";
console.log("Outside block - globalVar:", globalVar);

{
  var globalVar = "I am reassigned in block";
  console.log("Inside block - globalVar:", globalVar);
}

console.log("After block - globalVar:", globalVar); // Changed! (not block scoped)
console.log("VAR: Can be updated ✓, Can be redeclared ✓\n");

// ===== LET (Block Scoped) =====
console.log("--- LET Behavior ---");
let blockLet = "I am outside";
console.log("Outside block - blockLet:", blockLet);

{
  let blockLet = "I am inside block";
  console.log("Inside block - blockLet:", blockLet);
}

console.log("After block - blockLet:", blockLet); // Unchanged! (block scoped)
console.log("LET: Can be updated ✓, Cannot be redeclared ✗\n");

// ===== CONST (Block Scoped - Immutable) =====
console.log("--- CONST Behavior ---");
const blockConst = "I am constant";
console.log("blockConst:", blockConst);

// blockConst = "Change me"; // ERROR: Assignment to constant variable
// const blockConst = "Try again"; // ERROR: Identifier already declared

console.log("CONST: Cannot be updated ✗, Cannot be redeclared ✗\n");

// ===== PRACTICAL EXAMPLES =====
console.log("===== PRACTICAL EXAMPLES =====\n");

// Example 1: VAR can be redeclared
var user = "Ashek";
var user = "Anish"; // Redeclared - works fine
console.log("VAR redeclared:", user);

// Example 2: LET cannot be redeclared
let city = "Mumbai";
// let city = "Delhi"; // ERROR: Identifier 'city' has already been declared
city = "Delhi"; // Update - works fine
console.log("LET updated:", city);

// Example 3: CONST cannot be updated
const country = "India";
console.log("CONST:", country);
// country = "USA"; // ERROR: Assignment to constant variable

// ===== SUMMARY TABLE =====
console.log("\n===== SUMMARY TABLE =====");
console.log("VAR    - Scope: Function/Global | Update: Yes | Redeclare: Yes");
console.log("LET    - Scope: Block           | Update: Yes | Redeclare: No");
console.log("CONST  - Scope: Block           | Update: No  | Redeclare: No");

// ===== INITIALIZATION WITH UNDEFINED (HOISTING) =====
console.log("\n===== INITIALIZATION & HOISTING =====\n");

// Example 1: VAR is initialized with undefined
console.log("--- VAR Hoisting ---");
console.log("Before declaration - hoistedVar:", hoistedVar); // undefined (not an error!)
var hoistedVar = "I am assigned";
console.log("After declaration - hoistedVar:", hoistedVar); // "I am assigned"

// Example 2: LET is NOT initialized (Temporal Dead Zone)
console.log("\n--- LET Temporal Dead Zone ---");
console.log(
  "LET variable exists but not initialized in the TDZ (Temporal Dead Zone)",
);
// console.log("Before declaration - letVar:", letVar); // ReferenceError: Cannot access 'letVar' before initialization
let letVar = "I am assigned";
console.log("After declaration - letVar:", letVar); // "I am assigned"

// Example 3: CONST is NOT initialized (Temporal Dead Zone)
console.log("\n--- CONST Temporal Dead Zone ---");
console.log("CONST variable also exists but not initialized in the TDZ");
// console.log("Before declaration - constVar:", constVar); // ReferenceError: Cannot access 'constVar' before initialization
const constVar = "I am assigned";
console.log("After declaration - constVar:", constVar); // "I am assigned"

console.log("\n===== KEY DIFFERENCES =====");
console.log("VAR    - Initialized with: undefined (Hoisting)");
console.log("LET    - Initialized with: NOT initialized (Temporal Dead Zone)");
console.log("CONST  - Initialized with: NOT initialized (Temporal Dead Zone)");
