const express = require('express');
// Create a new router object to handle routes
const router = express.Router();

// ==========================================
// ROUTER-LEVEL MIDDLEWARE
// ==========================================
// This middleware will ONLY run for requests that hit this specific router
// (So, anything that starts with '/blog' since we mount it there in main.js)
router.use((req, res, next) => {
    console.log(`[BLOG ROUTER] Someone is accessing the blog at: ${req.url}`);
    next();
});

// Define routes specific to this router
// Note: In main.js we will mount this at '/blog', so:
// This route is actually handling GET /blog/
router.get('/', (req, res) => {
    res.send('Welcome to the Blog Home Page!');
});

// This route is actually handling GET /blog/about
router.get('/about', (req, res) => {
    res.send('About this Blog');
});

// Export the router so we can import it in main.js
module.exports = router;
