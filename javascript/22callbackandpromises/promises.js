// --- Topic: Promises ---
// A Promise is an object that represents the *eventual* completion (or failure)
// of an asynchronous operation, and the value it produces.
//
// Think of it like ordering food at a restaurant:
//   - You place the order → You get a "promise" (receipt/ticket)
//   - You don't stand at the counter waiting. You go sit down (non-blocking).
//   - When the food is ready → the promise is "fulfilled" (your order is called)
//   - If they run out of ingredients → the promise is "rejected" (order cancelled)

// --------------------------------------------------
// PROMISE STATES
// --------------------------------------------------
// A promise can be in exactly ONE of three states:
//   1. pending   — initial state, operation is still ongoing
//   2. fulfilled — operation completed successfully (resolved with a value)
//   3. rejected  — operation failed (rejected with a reason/error)
//
// Once settled (fulfilled OR rejected), a promise is IMMUTABLE — it cannot
// change state again.

// --------------------------------------------------
// CREATING A PROMISE
// --------------------------------------------------
// new Promise((resolve, reject) => { ... })
//   resolve(value)  — call this when the operation succeeds
//   reject(reason)  — call this when the operation fails

function fetchUser(userId) {
  // Returns a Promise that simulates fetching a user from a server
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        // ✅ Simulate a successful response
        resolve({ id: userId, name: "Harry" });
      } else {
        // ❌ Simulate an error
        reject(new Error("Invalid user ID"));
      }
    }, 1000);
  });
}




// --------------------------------------------------
// CONSUMING A PROMISE — .then() / .catch() / .finally()
// --------------------------------------------------
// .then(onFulfilled)   — runs when the promise resolves successfully
// .catch(onRejected)   — runs when the promise is rejected (error handling)
// .finally(onSettled)  — runs regardless of outcome (cleanup logic)

console.log("Fetching user...");

fetchUser(1)
  .then((user) => {
    // This runs if the promise was resolved
    console.log("✅ User fetched:", user);
    return user.name; // Return a value to chain the next .then()
  })
  .then((name) => {
    // Chained .then() — receives the return value of the previous .then()
    console.log("👤 User name:", name);
  })
  .catch((error) => {
    // This runs if the promise was rejected at ANY point in the chain
    console.error("❌ Error:", error.message);
  })
  .finally(() => {
    // Always runs — good for hiding loaders, closing connections, etc.
    console.log("🏁 Done (finally block)");
  });

// --------------------------------------------------
// PROMISE CHAINING — the solution to Callback Hell
// --------------------------------------------------
// Instead of nesting callbacks, promises let you CHAIN .then() calls
// in a flat, readable sequence.

function asyncStep(stepName, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`✅ ${stepName} done`);
      resolve(); // signal that this step is complete
    }, delay);
  });
}

console.log("\n--- Promise Chain (no nesting!) ---");

asyncStep("Step 1: Fetch User", 500)
  .then(() => asyncStep("Step 2: Fetch Orders", 500))      // flat chain!
  .then(() => asyncStep("Step 3: Fetch Order Details", 500))
  .then(() => asyncStep("Step 4: Send Email", 500))
  .then(() => console.log("🎉 All done — clean and readable!"))
  .catch((err) => console.error("Something went wrong:", err));

// --------------------------------------------------
// PROMISE UTILITY METHODS
// --------------------------------------------------
const p1 = Promise.resolve("Result A"); // instantly resolved promise
const p2 = Promise.resolve("Result B");
const p3 = Promise.reject(new Error("Failed C")); // instantly rejected promise

// Promise.all — waits for ALL promises to resolve; rejects if ANY rejects
Promise.all([p1, p2])
  .then((results) => console.log("\nPromise.all results:", results))
  // → ["Result A", "Result B"]

// Promise.allSettled — waits for ALL, regardless of resolve/reject
Promise.allSettled([p1, p3])
  .then((results) => console.log("Promise.allSettled:", results));
  // → [{status:"fulfilled", value:"Result A"}, {status:"rejected", reason:Error}]

// Promise.race — resolves/rejects as soon as the FIRST one settles
Promise.race([p1, p2])
  .then((winner) => console.log("Promise.race winner:", winner));
  // → "Result A"  (whichever resolves first)

/*
SUMMARY:
  Callback        → a function passed to another function, called after a task.
  Callback Hell   → deeply nested callbacks; hard to read/maintain (see callbackHell.js).
  Promise         → an object representing a future value; avoids nesting via chaining.
  Async/Await     → syntactic sugar over Promises; makes async code look synchronous.
*/
