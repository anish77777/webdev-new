const express = require("express");

// ==========================================
// Express Router
// ==========================================
// Instead of defining all routes in one giant main file,
// we can create a ROUTER for each section of our app.
//
// Think of it like this:
// - main app file = The main post office building
// - Router        = A dedicated department inside the post office
//                   (e.g. a special "Blog Department" that only handles blog mail)
//
// This keeps our code organized. All blog-related routes live HERE,
// not cluttering up the main server file.

const router = express.Router();

// GET /blog          → Show all blog posts
router.get("/", (req, res) => {
  console.log("GET /blog - Fetching all blog posts");
  res.send("Here are all the blog posts!");
});

// GET /blog/:id      → Show a single blog post by its ID
router.get("/:id", (req, res) => {
  const postId = req.params.id;
  console.log(`GET /blog/${postId} - Fetching single post`);
  res.send(`Here is the blog post with ID: ${postId}`);
});

// POST /blog         → Create a new blog post
router.post("/", (req, res) => {
  console.log("POST /blog - Creating a new blog post");
  res.send("New blog post created successfully!");
});

// PUT /blog/:id      → Update an existing blog post
router.put("/:id", (req, res) => {
  const postId = req.params.id;
  console.log(`PUT /blog/${postId} - Updating post`);
  res.send(`Blog post with ID: ${postId} has been updated!`);
});

// DELETE /blog/:id   → Delete a blog post
router.delete("/:id", (req, res) => {
  const postId = req.params.id;
  console.log(`DELETE /blog/${postId} - Deleting post`);
  res.send(`Blog post with ID: ${postId} has been deleted!`);
});

// Export the router so the main server file can use it
module.exports = router;
