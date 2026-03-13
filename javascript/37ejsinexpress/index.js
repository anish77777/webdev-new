const express = require("express");
const app = express();
const port = 3000;
// ==========================================
// EJS (Embedded JavaScript) Templates Guide:
// EJS lets you generate HTML markup with plain JavaScript.
// It allows you to inject variables (like siteName or searchText) directly into your HTML.
//
// To use EJS later:
// 1. Install it in terminal: npm install ejs
// 2. Set it up in Express: app.set('view engine', 'ejs');
// 3. Create a folder named "views" and make files like "index.ejs" inside it.
// 4. Instead of res.sendFile(), you will use: res.render('index', { siteName, searchText });
// ==========================================
// https://github.com/mde/ejs/wiki/Using-EJS-with-Express
app.set('view engine', 'ejs');
// tell express to use ejs as the view engine
//app.set use to set the view engine ie ejs files
app.get("/", (req, res) => {
    let siteName = "Adidas";
    let searchText = "Search Now"
  res.render('views/index.ejs', { siteName: siteName, searchText: searchText });
  // {siteName:siteName} can be written as {siteName}
  // extension should be .ejs not .html
  // res.render use to render the ejs files and pass the variables to the ejs files ie template
});
app.get("/blog/:slug", (req, res) => {
    let blogTitle = "Adidas ahy and when?";
    let blogContent = "Its a very good brand."
  res.render('views/blogpost.ejs', { blogTitle, blogContent });
  // res.render use to render the ejs files and pass the variables to the ejs files ie template
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
