const fs = require('fs');

/* 
  --- WELCOME TO CALLBACK HELL 🔥 ---

  This is a classic example of what happens when you have many 
  asynchronous tasks that must happen one after the other.

  The code starts to grow "sideways" (to the right) instead of "downwards."
  This is also called the "Pyramid of Doom." 📉
*/

console.log("Starting the sequence...");

// 1. First, create the file
fs.writeFile('hell.txt', 'This is the first line.', () => {
    console.log("1. File created successfully.");

    // 2. Now, read it (inside the callback!)
    fs.readFile('hell.txt', 'utf-8', (err, data) => {
        if (err) return console.error(err);
        console.log("2. Content read:", data);

        // 3. Now, append to it (DEEPER nesting!)
        fs.appendFile('hell.txt', '\nThis is the second line.', () => {
            console.log("3. Data appended successfully.");

            // 4. Now, read it again (EVEN DEEPER nesting!!)
            fs.readFile('hell.txt', 'utf-8', (err, data2) => {
                if (err) return console.error(err);
                console.log("4. New content read:\n", data2);

                // 5. Finally, rename it (WELCOME TO THE BOTTOM OF THE PYRAMID!)
                fs.rename('hell.txt', 'renamed_hell.txt', () => {
                    console.log("5. File renamed successfully.");
                    console.log("--- SEQUENCE COMPLETE ---");
                    
                    // Imagine if we had 10 more steps... it would be impossible to read!
                });
            });
        });
    });
});

/* 
  WHY IS THIS BAD?
  1. Readability: It's hard to follow the logic as it nests deeper.
  2. Error Handling: You have to handle errors at EVERY level.
  3. Maintenance: If you want to change the order, you have to rewrite everything.
*/
