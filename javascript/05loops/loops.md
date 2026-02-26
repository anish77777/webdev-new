# JavaScript Loops

## What are Loops?

Loops are programming constructs that allow you to repeat a block of code multiple times. Instead of writing the same code over and over, you can use a loop to execute code as many times as you need.

## Why Use Loops?

- To avoid repetitive code
- To process items in a collection (arrays, lists)
- To perform actions until a condition is met
- To iterate through data structures
- To automate repetitive tasks

## Types of Loops

### 1. For Loop
A loop that repeats a block of code a specific number of times. It has an initialization, condition, and increment/decrement expression.

**Use case:** When you know exactly how many times you want to loop.

### 2. While Loop
A loop that repeats a block of code as long as a specified condition is true.

**Use case:** When you want to loop until a condition changes.

### 3. Do...While Loop
Similar to a while loop, but the code block is executed at least once before the condition is checked.

**Use case:** When you need the code to execute at least once regardless of the condition.

### 4. For...In Loop
Loops through the properties of an object (or array indices).

**Use case:** When you want to iterate through object properties or array indices.

### 5. For...Of Loop
Loops through the values of an iterable object (like arrays, strings, maps, sets).

**Use case:** When you want to iterate through values directly.

### 6. ForEach Loop
A method that executes a function for each element in an array.

**Use case:** When you want to perform an action on each array element.

## Loop Control Statements

### Break
Terminates the loop immediately and exits the loop body.

**Use case:** When you want to stop looping based on a condition.

### Continue
Skips the current iteration and moves to the next iteration.

**Use case:** When you want to skip certain iterations without exiting the loop.

## Key Concepts

**Iteration:** One cycle/repetition of the loop.

**Loop Counter:** A variable that tracks how many times the loop has executed.

**Infinite Loop:** A loop that never terminates (usually a mistake).

**Nested Loop:** A loop inside another loop.

## When to Use Which Loop?

- **For Loop:** Fixed number of iterations
- **While Loop:** Unknown number of iterations, condition-based
- **Do...While:** Need at least one execution
- **For...In:** Iterating through object properties
- **For...Of:** Iterating through array values
- **forEach:** Functional approach to array iteration
