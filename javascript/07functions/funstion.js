// 1. Function Declaration
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice"));

// 2. Function Expression
const add = function (a, b) {
    console.log('sdf');
    
  return a + b;
};

console.log("added",add(5, 3));

// 3. Arrow Function
const multiply = (x, y) => {
    console.log("this is from arrow function and multiple is")
  return x * y;
};

console.log(multiply(4, 7));

// 4. Function with Default Parameters
function welcome(name = "Guest") {
  console.log("Welcome, " + name);
}

welcome();
welcome("Bob");

// 5. Function with Multiple Return Statements
function checkNumber(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

console.log(checkNumber(10));
console.log(checkNumber(-5));
console.log(checkNumber(0));

// 6. Function with No Parameters
function getCurrentTime() {
  return new Date();
}

console.log(getCurrentTime());

// 7. Function with Rest Parameters
const sum = (...numbers) => {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
};

console.log(sum(1, 2, 3, 4, 5));

// 8. Higher Order Function
function repeat(func, times) {
  for (let i = 0; i < times; i++) {
    func();
  }
}

repeat(() => console.log("Function called!"), 3);
