// let obj = {
//     a: 1,
//     b: "harry",
// }

// console.log(obj);

// let animal = {
//     eats: true
// }

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal;
// sets rabbit.[prototype] = animal
//prototype is a additional property


// here is the proper wwwwway
class Animal {
    constructor(name) {
        this.name = name; // This calls the setter
        console.log("Object is created")
    }

    // GETTER: Used to get the value of a property
    // It allows you to access it like a property: a.name
    get name() {
        return this._name;
    }

    // SETTER: Used to set the value of a property
    // It allows you to add logic/validation before setting: a.name = "Bunny"
    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short. Setting default name 'Unknown'.");
            this._name = "Unknown";
            return;
        }
        this._name = value;
    }

    // STATIC METHOD: Belongs to the class itself, not to the objects (instances)
    // You call it using the class name: Animal.breathe()
    static breathe() {
        console.log("All animals breathe air.");
    }

    eats() {
        console.log('Kha ra hu');
    }

    jumps() {
        console.log('I am jumping');
    }
}

class Lion extends Animal {
    constructor(name) {
        super(name); // Calls the parent constructor
        console.log("Object is created and he is a lion...");
    }

    eats() {
        super.eats(); // Calls the eats() method of Animal class
        console.log("Kha ra hu lion");
    }
}

// 1. Static Method Usage (Called on the Class)
Animal.breathe(); 

// 2. Class Instance and Setter Usage
let a = new Animal("Bunny"); // "Bunny" is > 3 chars, so it works
console.log(a.name); // Getter is called: Bunny

let shortNameAnimal = new Animal("Cat"); // "Cat" is too short, setter logic triggers
console.log(shortNameAnimal.name); // Unknown

// 3. Inheritance and Method Overriding
let l = new Lion("Sheera");
console.log(l.name); // Sheera (Inherited getter)
l.eats(); // Calls Animal.eats() then Lion.eats()
