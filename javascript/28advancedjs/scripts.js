async function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(45);
    }, 1000);
  });
}

// let a = await sleep(); error cause we cant use await without async
// iife immediate invoke function
(async function main() {
    // let a = await sleep();
    // console.log(a);
    // let b = await sleep();
    // console.log(b);

    // 1. ARRAY DESTRUCTURING
    // Extracting values from arrays into separate variables
    let arr = [1, 5, 7, 9, 11, 15];
    let [x, y, ...rest] = arr; 
    // x = 1, y = 5, rest = [7, 9, 11, 15] (Spread/Rest inside destructuring)
    console.log("Array Destructuring:", x, y, rest);

    // 2. OBJECT DESTRUCTURING
    // In objects, we destructure by Key Name. 
    // You can pick exactly which keys you want.
    let obj = {
        a: 10,
        b: 20,
        c: 30,
        d: 40
    };
    
    // Getting specifically 'a' and 'b', and then packing the 'rest' into an object
    let { a, b, ...otherProperties } = obj; 
    
    console.log("Object Destructuring (a, b):", a, b);
    console.log("Rest of the object properties:", otherProperties);

    // 3. SPREAD OPERATOR (...)
    // Used to unpack elements of an array or properties of an object

    // With Arrays:
    let arr1 = [1, 2, 3];
    let arr2 = [...arr1, 4, 5]; // Copies arr1 and adds 4, 5
    console.log("Array Spread:", arr2);

    // With Objects:
    let obj1 = { name: "Harry", role: "Developer" };
    let obj2 = { ...obj1, company: "ABC" }; // Copies obj1 and adds company
    console.log("Object Spread:", obj2);

    // Sum function using Rest parameters (often used with spread)
    function sum(v1, v2, v3) {
        return v1 + v2 + v3;
    }
    console.log("Spread in Function Call:", sum(...arr1)); // Unpacks arr1 into v1, v2, v3

})();

localStorage.setItem("name",a)
