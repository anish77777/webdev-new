const express = require("express");
const router = express.Router();

// ==========================================
// Central Router (routes/main.js)
// ==========================================
// This is the single router that main.js imports.
// It manages ALL sub-routes internally.
// main.js only needs one line: app.use("/", mainRouter)

// Import blog router
const blogRouter = require("./blog");

// Mount blog router at "/blog"
// So:  /blog       → blog.js router handles it
//      /blog/:id   → blog.js router handles it
router.use("/blog", blogRouter);
// ✅ No need to add router.use('/blog/:id') separately.
// router.use("/blog", blogRouter) already matches /blog AND /blog/:id AND /blog/anything

router.get("/", (req, res) => {
  res.send("This is main page");
});

// ❌ NEVER call app.listen() here!
// This is a ROUTER file - it doesn't have `app` or `port`.
// Only the main server file (main.js) calls app.listen().

module.exports = router;


