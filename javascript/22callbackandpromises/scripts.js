// --- Topic: Asynchronous vs Synchronous ---
/// <reference lib="dom" />
// 1. Synchronous (Blocking)
// Code runs line by line. The next line waits for the previous one to finish.
console.log("SYNC: Step 1 (Start)");
console.log("SYNC: Step 2 (Middle)");
console.log("SYNC: Step 3 (End)");

console.log("--------------------------------");

// 2. Asynchronous (Non-Blocking)
// Code doesn't wait. It schedules a task and moves on immediately.
console.log("ASYNC: Step 1 (Start)");

// setTimeout is an Asynchronous API provided by the browser (Web API)
setTimeout(() => {
  // This is a "Callback" function that will run later
  console.log("ASYNC: Step 2 (Scheduled Task - runs after 2s)");
}, 2000);

console.log("ASYNC: Step 3 (End - but Step 2 hasn't run yet!)");

/* 
EXPLAINED:
JavaScript is single-threaded, meaning it can only do one thing at a time.
Asynchronous programming allows JS to "hand off" heavy tasks (like timers, network requests)
to the environment (browser/Node) so it can stay responsive.
*/

// ENTER YOUR CODE BELOW THIS LINE:
// --------------------------------

// --- Topic: Callback Functions ---
// A "callback" is a function passed as an argument to another function,
// to be called ("called back") at a later point — typically after some
// asynchronous operation completes (e.g. loading a script, fetching data).
//
// WHY USE CALLBACKS?
// Because JS is non-blocking: instead of waiting for a task to finish,
// you hand it a callback so it knows what to do once it's done.

// loadScript dynamically loads an external JS file.
// 'src'      — URL of the script to load
// 'callback' — function to run once the script has finished loading
const loadScript = (src, callback) => {
  const sc = document.createElement("script"); // create a <script> element
  sc.src = src;                                 // set its source URL

  // onload fires when the browser has downloaded & parsed the script.
  // We then immediately invoke the callback, passing "Harry" as an argument.
  sc.onload = () => callback("Harry",fn); // important: assign a function, don't call it here

  document.head.appendChild(sc); // inject the <script> into the page to start loading
};

// This is the callback: the function we want to run AFTER the script loads.
const callback = (arg,fn) => {
  console.log(arg); // logs whatever argument was passed by loadScript
  fn();
};
function fn() {
  console.log("fn function")
}

// Kick off the load — callback will be called automatically once done.
loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
  callback
);

