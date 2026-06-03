import express from "express";
import cors from "cors";
const app = express();
const port = 3000;

app.use(cors());
app.get("/", (req, res) => {
    res.send("hello world from backend")
})
app.use(express.json());
// app.post mean the post request from frontend to the backend
// when we click on submit button in react form it will send post request to the backend
// and we have to listen to that request in the backend
// app.get mean we are sending get request from frontend to the backend
// and we have to listen to that request in the backend

app.post('/', (req, res) => {
    console.log(req.form)
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});