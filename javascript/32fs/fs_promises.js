import fs from 'fs/promises';
import { join } from 'path';

/* 
  --- ESCAPING CALLBACK HELL 🚀 ---

  In modern Node.js, we use Promises to handle asynchronous tasks.
  This allows us to write code that is much more readable and maintainable.
*/

// Helper to get an absolute path in the same directory as this script
const getPath = (name) => join(import.meta.dirname, name);

const fileName = getPath('promises.txt');

console.log("Starting the sequence with Promises...");

// --- METHOD 1: Promise Chaining (.then) ---
// This is better than callbacks because it stays "flat" (downwards) instead of "sideways".

fs.writeFile(fileName, 'Starting with Promises.')
    .then(() => {
        console.log("1. (Chain) File created.");
        return fs.readFile(fileName, 'utf-8');
    })
    .then((data) => {
        console.log("2. (Chain) Read data:", data);
        return fs.appendFile(fileName, '\nAdding a second line.');
    })
    .then(() => {
        console.log("3. (Chain) Data appended.");
        return fs.readFile(fileName, 'utf-8');
    })
    .then((newData) => {
        console.log("4. (Chain) Final read:\n", newData);
        return fs.rename(fileName, getPath('renamed_promises.txt'));
    })
    .then(() => {
        console.log("5. (Chain) File renamed.");
        console.log("--- PROMISE CHAIN COMPLETE ---\n");
        
        // Now let's see the even cleaner way...
        runAsyncAwait();
    })
    .catch((err) => {
        console.error("Error in Promise chain:", err);
    });


// --- METHOD 2: Async/Await (The Gold Standard) ---
// This looks and behaves like synchronous code, but it's non-blocking!

async function runAsyncAwait() {
    console.log("Starting the sequence with Async/Await...");
    const asyncFile = getPath('async_await.txt');

    try {
        // 1. Write
        await fs.writeFile(asyncFile, 'Starting with Async/Await.');
        console.log("1. (Async) File created.");

        // 2. Read
        const data = await fs.readFile(asyncFile, 'utf-8');
        console.log("2. (Async) Read data:", data);

        // 3. Append
        await fs.appendFile(asyncFile, '\nAdding a second line.');
        console.log("3. (Async) Data appended.");

        // 4. Read again
        const newData = await fs.readFile(asyncFile, 'utf-8');
        console.log("4. (Async) Final read:\n", newData);

        // 5. Rename
        await fs.rename(asyncFile, getPath('renamed_async.txt'));
        console.log("5. (Async) File renamed.");

        console.log("--- ASYNC/AWAIT COMPLETE ---");

    } catch (err) {
        console.error("Error in Async/Await block:", err);
    }
}

/*
  --- TOP-LEVEL AWAIT EXAMPLE 🚀 ---

  Because this project uses ES Modules ("type": "module" in package.json),
  we can use 'await' directly at the top level of the file without 
  wrapping it in an async function!
*/

console.log("\nStarting Top-Level Await example...");
try {
    const topLevelFile = getPath('top_level.txt');
    await fs.writeFile(topLevelFile, 'This was created using Top-Level Await!');
    console.log("1. (Top-Level) File created.");
    
    const content = await fs.readFile(topLevelFile, 'utf-8');
    console.log("2. (Top-Level) Read content:", content);
    
    await fs.rename(topLevelFile, getPath('renamed_top_level.txt'));
    console.log("3. (Top-Level) File renamed.");
} catch (err) {
    console.error("Top-level await error:", err);
}
