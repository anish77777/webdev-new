use("CrudDb");
console.log(db);

db.createCollection("courses")
// create a collection and insert one object

db.courses.insertOne({
    name: "web dev free course",
    price: 0,
    assignment: 12,
    projects: 45,
})
// insert many takes array of objects
// create a collection and insert many objects
db.courses.insertMany([
    {
        name: "Python Mastery",
        price: 1500,
        assignment: 10,
        projects: 5
    },
    {
        name: "JavaScript Deep Dive",
        price: 1800,
        assignment: 15,
        projects: 8
    },
    {
        name: "C++ for Beginners",
        price: 2200,
        assignment: 12,
        projects: 4
    },
    {
        name: "Node.js Backend",
        price: 2500,
        assignment: 20,
        projects: 10
    },
    {
        name: "React Essentials",
        price: 3000,
        assignment: 18,
        projects: 12
    }
]);
console.log("Documents inserted successfully");
//read operations
let a = db.courses.find({ price: 0 })
let b = db.courses.findOne({ price: 0 })
// only return one object
console.log(b);
// here a returns a cursor
// cursor is an object that points to the result of a query
// to get the result we need to iterate over the cursor
console.log(a);
console.log(a.count());
console.log(a.toArray());
// to change the cursor to array we use toArray()

//update operations
let c = db.courses.updateOne({ name: "web dev free course" }, { $set: { price: 100 } })
console.log(c);
let d = db.courses.updateMany({ name: "web dev free course" }, { $set: { price: 300 } })
console.log(d);

//delete
let e = db.courses.deleteOne({ price:2200 })
console.log(e);
let f = db.courses.deleteMany({ price:2200 })
console.log(f);

// --- MONGODB OPERATORS REFERENCE ---
// 
// 1. Comparison Operators:
//    $eq  : Matches values that are equal to a specified value.
//    $gt  : Matches values that are greater than a specified value. (e.g., { price: { $gt: 100 } })
//    $gte : Matches values that are greater than or equal to a specified value.
//    $lt  : Matches values that are less than a specified value.
//    $lte : Matches values that are less than or equal to a specified value.
//    $ne  : Matches all values that are not equal to a specified value.
//    $in  : Matches any of the values specified in an array.
//    $nin : Matches none of the values specified in an array.
//
// 2. Logical Operators:
//    $and : Joins query clauses with a logical AND.
//    $or  : Joins query clauses with a logical OR.
//    $not : Inverts the effect of a query expression.
//    $nor : Joins query clauses with a logical NOR.
//
// 3. Update Operators (Used in updateOne, updateMany):
//    $set   : Replaces the value of a field with the specified value.
//    $unset : Deletes the field from a document.
//    $inc   : Increments the value of the field by the specified amount.
//    $push  : Adds an item to an array field.
//    $pull  : Removes all array elements that match a specified query.
//    $rename: Renames a field.
