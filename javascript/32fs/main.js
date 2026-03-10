const fs = require('fs');

console.log('--- START ---');

// 1. SYNCHRONOUS: writeFileSync
// This BLOCKS the code. It waits until the file is written before moving to the next line.
console.log('Writing file sync...');
fs.writeFileSync('harry.txt', 'This was written SYNCHRONOUSLY.');
console.log('Done writing sync!');


// 2. ASYNCHRONOUS: writeFile
// This does NOT block the code. It starts the work and moves to the next line immediately.
// The "callback" function runs ONLY when the file is finished writing.
console.log('Starting async write...');
fs.writeFile('harry2.txt', 'This was written ASYNCHRONOUSLY.', () => {
    console.log('Done writing async! (This callback runs last)');
});

console.log('--- END OF CODE ---');
// Notice how "END OF CODE" appears BEFORE "Done writing async"!

// --- READING FILES ---

// 1. SYNCHRONOUS: readFileSync
// Again, this BLOCKS everything until the file is read.
console.log('\nReading file sync...');
const content = fs.readFileSync('harry.txt', 'utf-8'); // 'utf-8' turns the data into a readable string
console.log('Sync Content:', content);
console.log('Done reading sync!');

// 2. ASYNCHRONOUS: readFile
// This starts reading and immediately moves on.
console.log('\nStarting async read...');
fs.readFile('harry2.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('Async Content:', data);
        console.log('Done reading async! (Callback runs last)');
    }
});

console.log('--- FINAL LINE OF SCRIPT ---');

// --- APPENDING TO FILES ---

// appendFile adds data to the END of a file instead of overwriting it (like writeFile does).
fs.appendFile('harry.txt', '\nThis data was APPENDED!', (err) => {
    if (err) {
        console.error('Error appending file:', err);
    } else {
        console.log('\nData successfully appended to harry.txt!');
    }
});

