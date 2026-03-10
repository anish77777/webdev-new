// This is the entry point for our browser module
import { greet, getYear } from "./util.js";

const output = document.getElementById("output");

output.innerHTML = `${greet("Student")}! <br> The current year is ${getYear()}.`;

console.log("ES Modules loaded successfully in the browser!");
