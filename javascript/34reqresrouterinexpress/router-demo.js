const express = require("express");
const app = express();
const port = 3000;

// ==========================================
// Only ONE import needed!
// ==========================================
// routes/main.js is the central router.
// It imports blog.js internally, so we don't need to import blog.js here.

const mainRouter = require("./routes/main");

// Mount the central router at "/"
// This means:
//   /         → handled by routes/main.js directly
//   /about    → handled by routes/main.js directly
//   /blog     → routes/main.js passes this to routes/blog.js
//   /blog/123 → routes/main.js passes this to routes/blog.js

app.use("/", mainRouter);

app.listen(port, () => {
  console.log(`Router Demo server running at http://localhost:${port}`);
  console.log("📌 Test these URLs in your browser:");
  console.log("   GET  http://localhost:3000/");
  console.log("   GET  http://localhost:3000/about");
  console.log("   GET  http://localhost:3000/blog");
  console.log("   GET  http://localhost:3000/blog/123");
});



