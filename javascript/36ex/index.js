// Clear the clutter
// for example these are the file become:
// name.jpg this.pdf harry.zip cat.jpg dog.png
// make folder for each file type and move them to the folder

const express = require("express");
const app = express();
const port = 3000;
const fs = require('node:fs');             // fs module for sync file operations (existsSync, mkdirSync, renameSync)
const path = require('path');               // path module to handle file/folder paths cross-platform
const { readdir } = require('node:fs/promises'); // readdir from promises API so we can use async/await

async function getFiles(dirPath) {
  try {
    const files = await readdir(dirPath);   // read all filenames in the given folder (returns an array)
    console.log(files);                     // log the list of files before organizing

    for (const file of files) {             // loop through each file one by one
      const ext = path.extname(file).slice(1);                      // get extension e.g. ".jpg" → "jpg"
      const destFolder = path.join('./managedFiles', ext);           // destination: ./managedFiles/jpg/

      // Create parent + ext folder if they don't exist
      if (!fs.existsSync(destFolder)) {
        fs.mkdirSync(destFolder, { recursive: true }); // recursive: true creates managedFiles AND jpg in one go
      }

      // Move the file from clutter into managedFiles/ext/
      fs.renameSync(
        path.join(dirPath, file),           // source: e.g. "./clutter/cat.jpg"
        path.join(destFolder, file)         // destination: e.g. "./managedFiles/jpg/cat.jpg"
      );
    }

    console.log("Files organized!");        // done!
  } catch (err) {
    console.error(err);                     // catch and log any errors (e.g. folder not found)
  }
}

// Usage:
getFiles('./clutter');

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
