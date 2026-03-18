// https://www.npmjs.com/package/mongodb
// here we are installing mongoose
// mangoose help in schema validation

import express from 'express'
import mongoose from "mongoose";
import Todo from "./models/Todo.js";
const app = express()
const port = 3000
//why mangoose.connect is used
// it is used to connect to the mongodb database
// so it is to connect mangoose package to the mongodb database?
// yes it is 
let a = await mongoose.connect("mongodb://localhost:27017/todoDB");
// mongodb default db creation is test db 
// copied connection string from mongodb compass
//go to mongodb compass and click on connect button it will show you the connection string
//copy it and paste it in the connection string

// why this is running even without async await
// because it is top level await
// wdym by top level await
// top level await is a feature of es6 that allows you to use await at the top level of a module
// so only one await is allowed in a module
// yes it is

app.get('/', (req, res) => {
  const todo = new Todo({
    title: "Todo 1",
    //even if i dont provide title it will insert default value
    //due to the object {type:String, default:"Todo"}
    // what if i insert title as 1 that in number it will insert as string?
    // it will insert as string because we defined the schema as string
    // it will insert object yeah but in mongodb it will be stored as string
    description: "Todo 1 description",
    completed: false,
    days: 3
    // days:three validation failed
    // ValidationError: Todo validation failed: days: Cast to Number failed for value "three" (type string) at path "days"
  });
  todo.save();
  //crud operation
  // can be done using model
  // Todo.find()
  // Todo.findOne()
  // Todo.findById()
  // Todo.insertMany()
  // Todo.updateOne()
  // Todo.updateMany()
  // Todo.deleteOne()
  // Todo.deleteMany()
  // 
  res.send('Hello World!')
})

//crud operation
// find
app.get('/find', async (req, res) => {
  const todos = await Todo.find();
  res.send(todos);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})







