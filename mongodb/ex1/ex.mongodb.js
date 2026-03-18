// Select the database to use. /* global use, db */
// MongoDB Concepts Summary:
// 
// 1. MongoDB Instance: 
//    This is a single MongoDB server process (mongod) running on a computer or server. 
//    It manages the data storage, handles client connections, and executes your queries.
//
// 2. localhost:
//    This is a hostname that refers to "this computer" (the local machine you are currently on). 
//    Connecting to localhost means you are talking to a MongoDB instance running on your own PC.
//
// 3. Port (Default: 27017):
//    Ports are like virtual doors on your computer. MongoDB listens on port 27017 by default.
//    If your instance is running on localhost:27017, it's like saying "The server is on this machine, behind door 27017."
//
// 4. Connection String:
//    A URI like 'mongodb://localhost:27017' tells the client (like VS Code or Node.js) 
//    exactly where the MongoDB instance is located and how to talk to it.
//
// 5. Database vs Collection:
//    - Database: A container for data (e.g., 'mongodbVSCodePlaygroundDB').
//    - Collection: A group of documents within a database (like 'sales'). Similar to a table in SQL.
//
// 6. Can I use both databases like this?
//    - Short Answer: No, not with multiple `use()` calls in a row.
//    - Explanation: `use('database_name')` sets the GLOBAL context for the `db` variable. 
//      If you write `use('db1')` and then `use('db2')`, every command after that will use `db2`.
//    - Solution: If you need to talk to two databases in one script, you can do:
//      const db1 = db.getSiblingDB('mongodbVSCodePlaygroundDB');
//      const db2 = db.getSiblingDB('anish');
//      db1.getCollection('sales').find(...);
//      db2.getCollection('courses').insertMany(...);

// MongoDB Playground
// Note: Only the LAST `use()` call takes effect for the global `db` object.
// use('mongodbVSCodePlaygroundDB');
use('anish'); 

// --- FIXED VERSION OF YOUR INITIAL SNIPPET ---
// Your original snippet had a few syntax errors:
// 1. Missing comma after the `_id` block.
// 2. Missing quotes around keys like `name` (standard JSON/BSON practice).
// 3. The `_id` field shouldn't usually be manually set with `$oid` in a simple insert 
//    unless you are importing exported data. MongoDB generates it automatically.
// Corrected format:
/*
{
  "_id": ObjectId("69b4f03cecf7bdcce326a30a"),
  "name": "java",
  "Price": "2000",
  "Instructor": "Anish"
}
*/

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
  { "name": "Python Mastery", "Price": "1500", "Instructor": "Anish" },
  { "name": "JavaScript Deep Dive", "Price": "1800", "Instructor": "Anish" },
  { "name": "C++ for Beginners", "Price": "2200", "Instructor": "Anish" },
  { "name": "Node.js Backend", "Price": "2500", "Instructor": "Anish" },
  { "name": "React Essentials", "Price": "3000", "Instructor": "Anish" },
  { "name": "MongoDB Data Modeling", "Price": "1200", "Instructor": "Anish" },
  { "name": "HTML & CSS Layouts", "Price": "1000", "Instructor": "Anish" },
  { "name": "Full Stack Web Dev", "Price": "5000", "Instructor": "Anish" },
  { "name": "Data Science with R", "Price": "4500", "Instructor": "Anish" },
  { "name": "Machine Learning", "Price": "6000", "Instructor": "Anish" }
]
);

// denotion
console.log("inserted successfully");