const express = require("express");
const app = express();
const port = 3000;

// ⚠️  ORDER MATTERS: app.use() must come BEFORE route handlers.
// Express processes middleware and routes TOP TO BOTTOM, in the exact order
// they are defined. If you put app.use() AFTER a route, it won't run for
// requests that match that route (because res.send() ends the pipeline first).
//
// Pipeline order for every incoming request:
//   1. app.use(express.static(...))   ← always runs first
//   2. app.use(logger middleware)     ← always runs second
//   3. app.get("/", ...)              ← only runs if method + path match
//
// Rule of thumb:
//   - Global middleware (logging, auth, body parsing) → TOP, before all routes
//   - Route handlers                                  → MIDDLE
//   - Error handlers (err, req, res, next)            → VERY BOTTOM
app.use(express.static("public"))
// ==========================================
// WHAT IS MIDDLEWARE?
// ==========================================
// Middleware is any function that runs BETWEEN the request arriving
// and the final response being sent back.
//
// Think of it like airport security:
//   ✈️  Passenger (Request) arrives
//   🔍  Security Check 1: Scan passport    ← Middleware 1
//   🔍  Security Check 2: Scan luggage     ← Middleware 2
//   🔍  Security Check 3: Check ticket     ← Middleware 3
//   🚪  Passenger boards the plane (Response sent)
//
// Every middleware function receives 3 arguments:
//   - req  → The incoming request object
//   - res  → The outgoing response object
//   - next → A function you MUST call to pass control to the next middleware
//             If you forget to call next(), the request gets STUCK forever!
//
// SYNTAX:
//   app.use((req, res, next) => {
//     // do something...
//     next(); // ← pass to the next middleware or route handler
//   });
//
// TYPES OF MIDDLEWARE:
//   1. Application-level  → app.use(...)       - runs for ALL routes
//   2. Router-level       → router.use(...)     - runs for routes in that router
//   3. Built-in           → express.json()      - parses JSON body
//                           express.static()    - serves files from a folder
//   4. Third-party        → morgan (logging), cors, helmet, etc.
//   5. Error-handling     → has 4 params: (err, req, res, next)

// ==========================================
// EXAMPLE 1: order of execution and sharing data (m1 -> m2 -> route)
// ==========================================

// Middleware 1 (m1): Runs first
app.use((req, res, next) => {
  console.log(`[m1] Running first for: ${req.url}`);
  
  // m1 can modify the request! Let's add a custom property.
  // We can also access things like req.headers here.
  // console.log("Headers:", req.headers);
  req.customData = "Added by m1";
  
  next(); // Go to m2
});

// Middleware 2 (m2): Runs second
app.use((req, res, next) => {
  console.log(`[m2] Running second.`);
  
  // m2 can read what m1 added!
  console.log(`[m2] I see custom data: ${req.customData}`);
  
  // Let's modify it again before it hits the route handler
  req.customData += " -> Modified by m2";
  
  next(); // Go to the route handler
});

// Route handlers come AFTER middleware. By the time a request reaches here,
// it has already passed through express.static(), m1, and m2.
// Once res.send() is called, the pipeline ENDS — nothing registered below runs.
app.get("/", (req, res) => {
  // We can see the data that m1 and m2 added/modified!
  res.send(`
    <h1>Middleware Test</h1>
    <p>Look at the terminal for the console logs!</p>
    <p><strong>Custom Data from Middleware:</strong> ${req.customData}</p>
    <br/>
    <p><strong>Your User-Agent Header:</strong> ${req.headers['user-agent']}</p>
  `);
});

// ==========================================
// EXAMPLE 2: Router-Level Middleware
// ==========================================
// We created a separate file (routes/blog.js) to organize all blog-related routes.
// We import it here:
const blogRouter = require("./routes/blog");

// Then we use app.use() to tell Express:
// "Any request that starts with '/blog', send it to the blogRouter!"
// This is how large applications are structured into smaller pieces.
app.use("/blog", blogRouter);

// ==========================================
// WHY IS MIDDLEWARE IMPORTANT? (EXAMPLE)
// ==========================================
// Imagine you want to verify a user is logged in before letting them
// access their profile or settings. 
//
// WITHOUT middleware, you would have to write the check in every single route:
/*
app.get("/profile", (req, res) => {
    if (!loggedIn) return res.send("Not allowed"); // Repeated code!
    res.send("Profile Page");
});

app.get("/settings", (req, res) => {
    if (!loggedIn) return res.send("Not allowed"); // Repeated code!
    res.send("Settings Page");
});
*/

// WITH middleware, you write the check ONCE:
const requireLogin = (req, res, next) => {
    const isLoggedIn = true; // Pretend we check a database here
    if (isLoggedIn) {
        next(); // User is good, let them continue to the route!
    } else {
        res.status(401).send("Access Denied!"); // Stop! Don't call next()
    }
};

// Now we just drop the middleware into ANY route that needs protection!
app.get("/profile", requireLogin, (req, res) => {
    res.send("Welcome to your private profile!");
});

app.get("/settings", requireLogin, (req, res) => {
    res.send("Here are your private settings!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

