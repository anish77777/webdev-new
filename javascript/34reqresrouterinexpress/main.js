const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

// ==========================================
// Importing the Central Router
// ==========================================
// Instead of defining /blog routes here, we import routes/main.js
// which internally imports and manages routes/blog.js
const mainRouter = require("./routes/main");
app.use("/", mainRouter);

// ==========================================
// 1. GET Request
// ==========================================
// - Purpose: To "GET" or retrieve data from the server.
// - Usability: Perfect for loading pages, searching, or filtering data.
// - Visibility: The data sent is visible in the URL (e.g., ?username=anish)
app.get("/", (req, res) => {
  console.log("Hey it is a get request");

  res.send("Hello World! This is a GET request.");
});

// ==========================================
// 2. POST Request
// ==========================================
// - Purpose: To "POST" or send new data to the server to be saved/processed.
// - Usability: Used for submitting forms, uploading files, creating users, etc.
// - Visibility: The data is hidden inside the "body" of the Request, NOT in the URL.

// WHY WE CANNOT AFFORD TO PUT PASSWORDS IN GET REQUESTS:
// If a login form used GET, the URL would look like this:
// http://example.com/login?username=anish&password=mySecretPassword123
//
// Why is this terrible?
// 1. Anyone looking over your shoulder can see your password in the address bar!
// 2. If you bookmark the page, the password is saved in the bookmark.
// 3. The password is saved in plain text in your browser history.
// 4. The password is saved in plain text in the hosting provider's server logs!
//
// This is why we ALWAYS use POST for sensitive data.
// With POST, the data is sent silently in the background (in the Request Body).

app.post("/", (req, res) => {
  // We can't actually see this page by typing '/' in the browser URL bar,
  // because browsers ALWAYS make GET requests when you type an address!
  // POST requests are usually triggered by an HTML <form method="POST"> or Javascript (Fetch/Axios).
  
  // ==========================================
  // HOW TO VERIFY A POST REQUEST IS WORKING?
  // ==========================================
  // Since you can't just type this URL in your browser, you have 3 ways to test it:
  // 
  // Method 1: Use a tool like Postman or Thunder Client (VS Code Extension).
  //           These tools let you manually send a POST request to http://localhost:3000/
  // 
  // Method 2: Create an HTML file (in your public folder) with a form:
  //           <form action="/login" method="POST">
  //             <input type="text" name="username">
  //             <button type="submit">Submit</button>
  //           </form>
  // 
  // Method 3: Use Javascript 'fetch' in your browser console:
  //           fetch('/login', { method: 'POST' })
  //             .then(res => res.text())
  //             .then(data => console.log(data));
  // ==========================================
  
  console.log("hey this is post request");
  res.send("This is a POST request! Your sensitive data is safe in the body.");
});

// ==========================================
// 3. PUT Request
// ==========================================
// - Purpose: To "PUT" or UPDATE existing data on the server.
// - Usability: Perfect for editing an existing user profile, updating a blog post, etc.
// - Difference from POST: 
//   - POST = "Create new data" (Like taking a blank piece of paper and writing on it)
//   - PUT = "Update existing data" (Like taking an existing piece of paper, erasing a word, and writing a new one)
app.put("/", (req, res) => {
  console.log("Hey, this is a PUT request! Time to update some data.");
  res.send("This is a PUT request! The existing data has been successfully updated.");
});

// ==========================================
// 4. DELETE Request
// ==========================================
// - Purpose: To "DELETE" or remove existing data on the server.
// - Usability: Deleting a user account, removing an item from a shopping cart, deleting a comment.
app.delete("/", (req, res) => {
  console.log("Hey, this is a DELETE request! Deleting data now...");
  res.send("This is a DELETE request! The data has been successfully removed.");
});

// ==========================================
// 5. Route Chaining (app.route)
// ==========================================
// - Purpose: To group different HTTP methods (GET, POST, PUT, DELETE) 
//            that all share the EXACT SAME endpoint path.
// - Usability: Makes your code much cleaner and easier to read, instead of 
//              writing `app.get('/user',...)`, `app.post('/user',...)` on separate lines.
app.route("/user")
  .get((req, res) => {
    console.log("Hey, this is a GET request to /user");
    res.send("Fetching user info... (GET)");
  })
  .post((req, res) => {
    console.log("Hey, this is a POST request to /user");
    res.send("Creating new user... (POST)");
  })
  .put((req, res) => {
    console.log("Hey, this is a PUT request to /user");
    res.send("Updating user info... (PUT)");
  })
  .delete((req, res) => {
    console.log("Hey, this is a DELETE request to /user");
    res.send("Deleting user... (DELETE)");
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log("📦 Access it at: http://localhost:3000");
});
