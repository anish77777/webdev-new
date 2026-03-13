const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// ==========================================
// Serving HTML Files in Express
// ==========================================
// So far, we have been using `res.send("Some text")` 
// to send plain text back to the browser.
// 
// But what if we want to send a whole HTML file with CSS and JS?
// We use `res.sendFile()` instead!

app.get("/index", (req, res) => {
  // 1. We need the EXACT absolute path to where the HTML file lives on your computer.
  // 2. `__dirname` is a special Node.js variable that means: 
  //    "The directory folder where THIS javascript file is located right now."
  // 3. We use `path.join()` to safely connect `__dirname` with our file names.
  // Send the actual file!
  // res.send("THis is index page");
  res.sendFile('template/serve.html',{root:__dirname})
});

// ==========================================
// WHY DEVELOPERS USE TOOLS LIKE POSTMAN / THUNDER CLIENT
// ==========================================
// 1. Browsers can easily request GET endpoints (just by typing a URL).
// 2. Browsers CANNOT easily request POST/PUT/DELETE endpoints without writing 
//    HTML forms or Javascript `fetch()` code first.
// 3. Postman (or VS Code's "Thunder Client" extension) acts like a "super browser".
//    It lets you instantly send POST/PUT/DELETE requests to your backend
//    without ever having to build a frontend HTML page to test it!

// ==========================================
// OTHER USEFUL RESPONSE METHODS
// ==========================================

// 1. res.json()
// Purpose: Sending structured data (like objects or arrays) back to the frontend.
// Used constantly when building APIs for React/Vue frontends.
app.get("/api/user", (req, res) => {
  res.json({
    id: 1,
    name: "Anish",
    role: "Admin",
    skills: ["HTML", "CSS", "JavaScript", "Express"]
  });
});

// 2. A simple POST request for you to test with Postman!
// Try sending a POST request to: http://localhost:3000/api/submit
app.post("/api/submit", (req, res) => {
  console.log("POST request received! You tested this with an API tool like Postman.");
  res.json({ 
    message: "Success!", 
    details: "Your POST request was successfully received by the Express backend." 
  });
});

// 2. res.redirect()
// Purpose: Forces the user's browser to go to a completely different URL.
// Used after someone logs in successfully, or to redirect old broken links.
app.get("/go-to-google", (req, res) => {
  console.log("Redirecting user to Google!");
  res.redirect("https://www.google.com");
});

// 3. res.status().send()
// Purpose: Sending a specific HTTP status code along with your message.
// Used to tell the browser "Hey, something went wrong here!" (Like a 404 Not Found)
app.get("/secret-page", (req, res) => {
  res.status(403).send("<h1>Error 403: Forbidden!</h1><p>You do not have permission to view this page.</p>");
});

// Start the server
app.listen(port, () => {
  console.log(`HTML Server listening on port ${port}`);
  console.log("📦 View your HTML page at: http://localhost:3000");
  console.log("⚠️ Make sure to stop your other main.js server first (Ctrl+C) before running this one!");
});
