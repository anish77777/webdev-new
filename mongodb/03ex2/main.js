// we will use mongoose to connect to the database
// genereate a dummy data in this format in a collection called employee in a db company
//
//name: string
//language: string
//salary: number
//city: string
//isManager: boolean

// 10 such record when a button called generate data create an express app to achieve it everytime a button is clicked it should generate 10 new records
// use array to like 3 varaiables to create random data
import express from "express";
import mongoose from "mongoose";    
import Employee from "./models/Employee.js";
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

// Wait for Mongoose to connect before executing operations
await mongoose.connect('mongodb://localhost:27017/company');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/generate', async (req, res) => {
    //Generate random data
    const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace"];
    const langs = ["JavaScript", "Python", "Java", "C++", "Go", "Rust"];
    const cities = ["London", "New York", "San Francisco", "Tokyo", "Berlin", "Paris"];

    const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

    let dummyData = [];
    for (let i = 0; i < 10; i++) {
        dummyData.push({
            name: getRandom(names),
            language: getRandom(langs),
            salary: Math.floor(Math.random() * 80000) + 40000,
            city: getRandom(cities),
            isManager: Math.random() > 0.8
            //how is manager gonna be true
            // if Math.random() > 0.8 is true then it will be true
            // so 20% chance of being true
            //
        });
    }

    await Employee.insertMany(dummyData);
    res.json({ success: true, message: "10 records generated successfully!", data: dummyData });
});

app.get('/clear', async (req, res) => {
    await Employee.deleteMany({});
    res.json({ success: true, message: "All records cleared!" });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});