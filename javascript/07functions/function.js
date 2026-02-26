function nice(name) {
    console.log('Hey' + name + "you are nice");
    console.log('hey' + name + "your tshirt is good");
    console.log('hey' + name + "you are good");
    console.log('hey' +name + "your course is good too.");
}

nice("anish");
nice("asmit");

function sum(a, b,c=3) {
    return a + b + c;
}
let result = sum(3, 5);// c=3 default parameter 
console.log(result);

//arrow function
// Arrow Function
const greet = (name) => {
    return "Hello, " + name;
};

// Arrow Function (even shorter, implicit return)
const greeter = name => "Hello, " + name;
let op = greeter("anish");
console.log(op);


// Function Expression - has its own 'this'
const person = {
    name: "Alice",
    greetFunc: function() {
        console.log("Function Expression:", this.name);
    },
    greetArrow: () => {
        console.log("Arrow Function:", this.name);
    }
};

person.greetFunc(); // "Function Expression: Alice" (this = person)
person.greetArrow(); // "Arrow Function: undefined" (this = outer scope, probably window)



