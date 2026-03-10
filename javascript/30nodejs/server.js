/*
  --- WHAT IS A BACKEND AND HOW DOES IT WORK? ---

  1. WHAT IS A BACKEND?
     The backend (also called the "server-side") is the part of a website or web application 
     that users don't see. It's like the kitchen in a restaurant: the customers stay in the 
     dining area (frontend), while the cooks prepare the food (backend) based on the menu.

  2. HOW DOES IT WORK? (The Request-Response Cycle)
     - REQUEST: When you type a URL or click a button on a website, your browser (Frontend) 
       sends a "Request" over the internet to a server (Backend).
     - PROCESSING: The backend receives this request, talks to a database if needed, 
       performs logic (like checking your password), and prepares the data.
     - RESPONSE: The backend sends a "Response" back to your browser, which then displays 
       the information to you.

  3. CORE RESPONSIBILITIES:
     - Data Storage: Managing databases (storing user info, posts, etc.).
     - Logic & API: Handling calculations, authentication, and communication with the frontend.
     - Security: Making sure only authorized users can access certain data.
     - Integration: Connecting with other services like payment gateways (Stripe) or emails.

  4. COMMON TOOLS:
     - Languages: JavaScript (Node.js), Python, Java, Ruby, PHP.
     - Frameworks: Express (for Node.js), Django (for Python), Spring (for Java).
     - Databases: MongoDB, MySQL, PostgreSQL.

  5. WHAT IS 'npm init'?
     - 'npm init' is a command used to set up a new Node.js project.
     - It creates a 'package.json' file, which is like an "ID card" for your project.
     - It stores the project name, version, and a list of all the tools (packages) it uses.
*/

console.log("Hello! This is your backend environment running on Node.js.");

var slugify = require('slugify')

let a = slugify('some string') // some-string
console.log(a);


// if you prefer something other than '-' as separator
let b = slugify("some string", "_");  // some_string
console.log(b);
