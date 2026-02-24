// ===== PRIMITIVE DATA TYPES =====
// Primitives are immutable and stored by value.

console.log("%c--- PRIMITIVE DATA TYPES ---", "color: #00d4ff; font-weight: bold; font-size: 1.2rem;");

// 1. String
let name = "Ashek";
console.log("1. String:", name, "| Type:", typeof name);

// 2. Number
let age = 25;
let pi = 3.14;
console.log("2. Number:", age, ",", pi, "| Type:", typeof age);

// 3. Boolean
let isStudent = true;
console.log("3. Boolean:", isStudent, "| Type:", typeof isStudent);

// 4. Undefined (Variable declared but not assigned)
let undefinedVar;
console.log("4. Undefined:", undefinedVar, "| Type:", typeof undefinedVar);

// 5. Null (Intentional absence of value)
let nullVar = null;
console.log("5. Null:", nullVar, "| Type:", typeof nullVar); // Note: returns "object" (legacy JS quirk)

// 6. Symbol (Unique and immutable identifier)
let sym = Symbol("unique");
console.log("6. Symbol:", sym.toString(), "| Type:", typeof sym);

// 7. BigInt (For numbers larger than 2^53 - 1)
let bigIntNum = 9007199254740991n;
console.log("7. BigInt:", bigIntNum, "| Type:", typeof bigIntNum);
