// --- Topic: Callback Hell ---
// "Callback Hell" (also called the "Pyramid of Doom") happens when you nest
// multiple callbacks inside each other to handle sequential async operations.
// The code grows horizontally and becomes very hard to read, debug, and maintain.

// --------------------------------------------------
// EXAMPLE: Simulated async steps using setTimeout
// (Think of each step as: fetch user → fetch orders → fetch details → send email)
// --------------------------------------------------

// Step helper: simulates an async task that takes `delay` ms then calls `callback`
function asyncTask(taskName, delay, callback) {
  setTimeout(() => {
    console.log(`✅ ${taskName} done`);
    callback(); // trigger the next step
  }, delay);
}

// ❌ CALLBACK HELL — deeply nested, hard to follow
console.log("Starting process...");

asyncTask("Step 1: Fetch User", 1000, () => {
  // Inside Step 1's callback, we kick off Step 2
  asyncTask("Step 2: Fetch Orders", 1000, () => {
    // Inside Step 2's callback, we kick off Step 3
    asyncTask("Step 3: Fetch Order Details", 1000, () => {
      // Inside Step 3's callback, we kick off Step 4
      asyncTask("Step 4: Send Confirmation Email", 1000, () => {
        // Inside Step 4's callback — we're 4 levels deep!
        console.log("🎉 All steps complete! (but the code is a mess...)");
        // Imagine adding error handling at EVERY level — it gets unmanageable fast.
      });
    });
  });
});

/*
PROBLEMS WITH CALLBACK HELL:
  1. Hard to read  — the pyramid shape makes logic flow difficult to follow.
  2. Hard to debug — errors can be swallowed silently inside nested callbacks.
  3. Hard to maintain — adding/removing a step requires restructuring the whole pyramid.
  4. No separation of concerns — each step is tangled with the next.

SOLUTIONS:
  - Named functions: extract each callback into a named function (flattens the pyramid).
  - Promises:        chain .then() calls instead of nesting (see promises.js).
  - Async/Await:     write async code that *looks* synchronous (built on Promises).
*/

// ✅ AVOIDING CALLBACK HELL — using named functions (same logic, flat structure)
console.log("\n--- Flat version using named functions ---");

function onStep4Done() {
  console.log("🎉 All steps complete! (clean version)");
}

function onStep3Done() {
  asyncTask("Step 4: Send Confirmation Email", 500, onStep4Done);
}

function onStep2Done() {
  asyncTask("Step 3: Fetch Order Details", 500, onStep3Done);
}

function onStep1Done() {
  asyncTask("Step 2: Fetch Orders", 500, onStep2Done);
}

// Kick off the chain — each function knows only about the NEXT step
asyncTask("Step 1: Fetch User", 500, onStep1Done);
