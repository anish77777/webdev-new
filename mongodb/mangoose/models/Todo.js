// mangoose doc

//models folder is used to store the models
//models are the blueprints of the database
//models are used to create the database
//models are used to query the database
//models are used to update the database
//models are used to delete the database

import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {type:String, default:"Todo",required:true},
    description: String,
    completed: Boolean,
    days: Number
    //there can be multiple validation
    //like required, default, min, max, enum, etc
    //like this
    // days: {type:Number, min:0, max:100}
});

const Todo = mongoose.model("Todo", todoSchema);
// why export Todo
// because we need to use it in other files
//but it nt js file is export in other format ?
// yes it is
//so why different format in here
// because it is not a js file it is a model file
//so why export Todo
// because it is a model file  
// .model accept two arguments
// 1. name of the model
// 2. schema of the model
// .model return a model
// model is a class
// model is used to create documents
// model is used to query documents
// model is used to update documents
// model is used to delete documents
export default Todo;