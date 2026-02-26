let arr = [1, 2, 3, 4, 5, 65, 7];
arr[0] = "55";
// array are muitable unlike strings
console.log(arr);
console.log(arr[0]);
console.log(arr.join(" and "));

// Push - adds one or more elements to the end of an array and returns the new length
arr.push(100);
console.log("After push(100):", arr);

// Pop - removes the last element from the array and returns it
let lastElement = arr.pop();
console.log("Popped element:", lastElement);
console.log("After pop():", arr);
// Shift - removes the first element from the array and returns it
let firstElement = arr.shift();
console.log("Shifted element:", firstElement);
console.log("After shift():", arr);

// Unshift - adds one or more elements to the beginning of an array and returns the new length
arr.unshift(0);
console.log("After unshift(0):", arr);
arr.unshift(-2, -1);
console.log("After unshift(-2, -1):", arr);
// Delete - removes an element from the array but does NOT change the length
// The length remains the same, it just leaves an empty slot (undefined)
delete arr[2];
console.log("After delete arr[2]:", arr);
console.log("Length after delete:", arr.length); // Length is still the same!
console.log("arr[2] is now:", arr[2]); // It's undefined
// Concat - merges two or more arrays and returns a new array
// The original arrays are NOT modified
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8];
let newArr = arr1.concat(arr2, arr3);
console.log("arr1.concat(arr2, arr3):", newArr);
console.log("Original arr1:", arr1); // arr1 is unchanged
// Slice - extracts a shallow copy of a portion of an array
// Does NOT modify the original array
// Returns a new array with elements from start to end (end is not included)
let sliceArr = [10, 20, 30, 40, 50, 60];
let sliced = sliceArr.slice(1, 4); // Start at index 1, end before index 4
console.log("sliceArr.slice(1, 4):", sliced); // [20, 30, 40]
console.log("Original sliceArr:", sliceArr); // unchanged

// Splice - changes the contents of an array by removing/replacing existing elements
// MODIFIES the original array and returns the removed elements
// splice(start, deleteCount, item1, item2, ...)
let spliceArr = [10, 20, 30, 40, 50];
let removed = spliceArr.splice(2, 1, 99); // Remove 1 element at index 2, insert 99
console.log("Removed elements:", removed); // [30]
console.log("After splice(2, 1, 99):", spliceArr); // [10, 20, 99, 40, 50]

arrowarray = [1, 4, 6, 8]
arrowarray.forEach((value,index,array) => {
    console.log(value, index, array);
});
array.forEach(element => {
    
});
