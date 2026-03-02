class Animal {
    constructor(name) {
        this.name = name; // Calls the setter
        console.log("Object is created (gs.js)");
    }

    /**
     * WHY _name?
     * If we used 'return this.name' inside 'get name()', it would call the getter again,
     * which would call the getter again, causing INFINITE RECURSION (Loop).
     * The underscore '_' is a convention to say "this is a private/internal variable".
     */
    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log("Name too short!");
            this._name = "Unknown";
            return;
        }
        this._name = value;
    }

    /**
     * WHAT IF PROPERTIES HAVE TWO VALUES? (Composite Properties)
     * You can use a getter/setter to manage multiple internal values at once.
     * Example: Setting one 'fullName' updates both 'firstName' and 'lastName'.
     */
    set fullName(value) {
        let parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1] || ""; // Handle cases with no last name
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`.trim();
    }

    static breathe() {
        console.log("All animals breathe air.");
    }
}

class Lion extends Animal {
    constructor(name) {
        super(name);
        console.log("Lion created!");
    }
}

// --- TESTING ---

// 1. Underscore vs Property
let a = new Animal("Bunny");
console.log("Getting a.name calling getter:", a.name); 

// 2. Composite Property (Multiple Values)
console.log("\n--- Multiple Values Example ---");
a.fullName = "Leo Das"; // Setting one property updates two values internaly
console.log("First Name:", a.firstName);
console.log("Last Name:", a.lastName);
console.log("Full Name (via getter):", a.fullName);

// 3. Static Method
Animal.breathe();

// 4. THE 'instanceof' OPERATOR
// 'instanceof' checks if an object belongs to a class or if it inherits from it.
console.log("\n--- 'instanceof' Example ---");

let myLion = new Lion("Sheera");

console.log("Is myLion a Lion?", myLion instanceof Lion);     // true
console.log("Is myLion an Animal?", myLion instanceof Animal); // true (because Lion extends Animal)
console.log("Is myLion an Object?", myLion instanceof Object); // true (everything is an object in JS)

let myAnimal = new Animal("Bunny");
console.log("Is myAnimal a Lion?", myAnimal instanceof Lion);   // false
console.log("Is myAnimal an Animal?", myAnimal instanceof Animal); // true

