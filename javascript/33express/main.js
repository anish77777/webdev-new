// Step 1: Import the Express framework
// Express is a popular web application framework for Node.js
const express = require('express');

// Step 2: Initialize an Express application
// This 'app' object will be used to define routes and start the server
const app = express();

// Step 3: Define a port number
const port = 3000;

// Middleware to serve static files automatically!
// This tells Express to look into the 'public' folder whenever a file is requested.
// You can put ANY static files here, such as:
// - HTML files (like index.html)
// - CSS stylesheets (like style.css)
// - JavaScript files for the browser (like app.js)
// - Images (like logo.png or background.jpg)
// - Plain text files (like anish.txt)
app.use(express.static('public'));

/*
  Why use Express?
  1. Routing: Define different handlers for different URLs (like '/', '/about', etc.) easily.
  2. Middleware: Easily add functionality like data parsing, logging, and security.
  3. Simplified: It makes typical Node.js web server tasks much cleaner and faster.
*/

/*
  Why use Nodemon?
  1. Efficiency: It watches your files for changes and restarts the server automatically.
  2. No manual restart: You don't have to stop (Ctrl+C) and start (node main.js) every time you save.
*/

// Step 4: Define a Basic Route
// This tells the server what to do when someone visits the home page ('/')
// 'req' (Request) contains data about the incoming request
// 'res' (Response) is used to send data back to the user
// app.get or app.post or app.put or app.delete(path,handler)
app.get('/', (req, res) => {
  // res.send() is a simple way to send a string or HTML back to the browser
  res.send('Hello from Express! Try changing this text and save to see Nodemon in action.');
});

// Route for the About page
app.get('/about', (req, res) => {
  // This runs when someone visits http://localhost:3000/about
  res.send('This is the About page! We are learning Express.');
});

// Route for the Contact page
app.get('/contact', (req, res) => {
  // This runs when someone visits http://localhost:3000/contact
  res.send('Contact us at binod@gmail.com');
});
app.get('/blog', (req, res) => {
  // This runs when someone visits http://localhost:3000/blog
  res.send('This is the Blog page! We are learning Express.');
});
// Dynamic Route: :slug is a variable that represents whatever you type in the URL
app.get('/blog/:slug', (req, res) => {
    // 1. URL Parameters (Params) - Part of the path (e.g., /blog/intro)
    console.log('--- NEW REQUEST ---');
    console.log('Terminal: This is the URL Param (slug):', req.params.slug); 
    
    // 2. Query Parameters (Query) - After the ? (e.g., ?name=anish)
    console.log('Terminal: This is the URL Query:', req.query);   

    // We commented out console.log(req) because it's too big and hides these logs!
    // console.log(req); 

    res.send(`
        <h1>Blog Post: ${req.params.slug}</h1>
        <p>This is the dynamic parameter (Param): <b>${req.params.slug}</b></p>
        <p>These are the Query Parameters: <b>${JSON.stringify(req.query)}</b></p>
    `);
});

// Step 5: Start the Server
// This makes our application 'listen' for requests on the defined port
app.listen(port, () => {
  // This callback function runs once the server starts successfully
  console.log(`Server is running!`);
  console.log(`Click here to open: http://localhost:${port}`);
  console.log('Nodemon is watching for changes...');
});
