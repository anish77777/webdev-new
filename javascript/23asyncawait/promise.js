// --- Topic: Consuming a Promise & Waiting for Data ---
// When a function returns a Promise, you have TWO ways to "wait" for its value:
//   1. .then() / .catch()  — traditional Promise chaining
//   2. async / await       — modern, cleaner syntax (built on top of Promises)

// --------------------------------------------------
// THE PROMISE PRODUCER
// --------------------------------------------------
// getData() simulates an async operation (e.g. a network request).
// It returns a Promise that will resolve with 455 after 3 seconds.
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(455); // resolves successfully with the value 455
    }, 3000);
  });
}

// --------------------------------------------------
// WAY 1: Consuming with .then() — "subscribe and wait"
// --------------------------------------------------
// You cannot just assign a Promise to a variable and get the value out directly,
// because the data isn't ready yet. The Promise is still "pending".
console.log("load data");

// ❌ WRONG — "process data" fires immediately, BEFORE the 3s timer completes.
//    `data` here is still a Promise { <pending> }, NOT 455.
let data = getData();
console.log(data);            // → Promise { <pending> }
// console.log("process data"); ← DON'T do this here — data hasn't arrived yet!

// ✅ CORRECT — use .then() so "process data" runs only AFTER the data is ready.
//    .then(callback)  → callback receives the resolved value once the Promise settles.
//    .catch(callback) → catches any rejection (error) in the chain.
getData()
  .then((value) => {
    // ✅ This runs AFTER the 3 seconds — value is 455
    console.log("Data received:", value);   // → 455
    console.log("process data");            // ← now safe to process!
  })
  .catch((error) => {
    console.error("Failed to get data:", error.message);
  });

// --------------------------------------------------
// WAY 2: async / await — "pause and wait" (modern approach)
// --------------------------------------------------
// async/await is syntactic sugar over Promises. It makes async code LOOK synchronous,
// which is much easier to read and reason about.
//
// RULES:
//   • You MUST mark a function with `async` before you can use `await` inside it.
//   • `await` pauses execution of the async function until the Promise settles.
//   • While paused, the rest of your program keeps running (non-blocking).
//   • Always wrap await in try/catch to handle rejections gracefully.

async function processData() {
  try {
    console.log("\n[async fn] Waiting for data...");

    // `await` unwraps the Promise — pauses HERE until getData() resolves,
    // then stores the resolved VALUE (455) directly into `result`.
    let result = await getData();

    // This line only runs AFTER the await above has completed.
    console.log("[async fn] Data received:", result); // → 455
    console.log("[async fn] Processing data now...");
  } catch (error) {
    // If getData() rejects, execution jumps here instead of crashing.
    console.error("[async fn] Error:", error.message);
  } finally {
    // Runs regardless of success or failure — useful for cleanup.
    console.log("[async fn] Done.");
  }
}

// --------------------------------------------------
// CALLING AN ASYNC FUNCTION
// --------------------------------------------------
// Every async function ALWAYS returns a Promise — even if you don't write `return`.
// That means you have two ways to call it:
//
// WAY A — Just call it and let it run on its own (fire-and-forget).
//          You don't care about waiting for its result here.
processData(); // starts running, returns a Promise, but we ignore the Promise
//
// WAY B — Chain .then() on the returned Promise if you need to do something
//          AFTER the async function fully completes.
// processData().then(() => {
//   console.log("processData() has fully finished!");
// });
//
// Both are valid — use WAY B when you need to sequence work AFTER the async fn.


// --------------------------------------------------
// ASYNC/AWAIT METHODS CHEAT SHEET
// --------------------------------------------------
// async function foo() { ... }   → declares an async function
// await somePromise              → pauses until settled, returns resolved value
// try { await ... } catch(e){}   → handles rejections (replaces .catch())
//
// Works great with Promise utilities too:
//   await Promise.all([p1, p2])        → waits for ALL to resolve
//   await Promise.allSettled([p1, p2]) → waits for ALL, even if some fail
//   await Promise.race([p1, p2])       → waits for the FIRST to settle
