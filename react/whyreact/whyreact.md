why react ?
we can use vanilla js to create dynamic web pages
but it is very difficult to manage the state of the application
react will help us to manage the state of the application
react will create a virtual dom and compare it with the real dom and update only the changes
this is called reconciliation


react is a library for building user interfaces
it is not a framework
it is a library
it is a javascript library
it is a declarative library
it is a component based library
it is a declarative library
it is a component based library 

We can reuse components
instead of writing the same code again and again we can create a component and reuse it we use variable to store the state of the application

History of react
react was created by facebook in 2013
often use for single page application

we can use react for both client side and server side rendering
client side rendering mean the browser will render the page
server side rendering mean the server will render the page
server side rendering is like template in express or ejs?
Yes, SSR is similar to template engines like EJS or Pug where the server prepares the HTML before sending it to the client.

**Client-Side Rendering (CSR):**
- The server sends a minimal HTML file and a JavaScript bundle to the browser.
- The browser executes the JavaScript to build the UI and fetch data.
- This provides a smooth, app-like experience after the initial load.

**Server-Side Rendering (SSR):**
- The server pre-renders the page into full HTML on every request.
- The client receives a fully populated page, which is better for SEO and initial load speed.
- React components are executed on the server to generate the initial markup before being "hydrated" on the client.
WHAT IS HYDRATION ?
Hydration is the process of attaching event handlers and state to the server-rendered HTML on the client side.
SO WHAT RENDERED ON SERVER RUNS IN BROWSER TOO? DURING HYDRATION?

Yes, the same React code runs again on the client during hydration.

Here's the breakdown:

1. Server-Side Rendering (SSR):
   - React components run on the server.
   - They generate HTML markup.
   - This HTML is sent to the browser.

2. Client-Side Hydration:
   - The browser receives the HTML and displays it immediately.
   - React then runs the same components again on the client.
   - It attaches event listeners (like onClick, onChange) to the existing HTML. SO THIS EVENTS HAS TO BE SENT TO SERVER OR NOT?
   No, the event listeners are not sent to the server. They are attached to the HTML on the client side.
   SO WHAT HAPPEN WHEN USER REQUEST FOR A NEW PAGE OR CLICK ON A LINK?
   When the user clicks a link or requests a new page, the browser sends a new HTTP request to the server.
   THEN SERVER RENDER THE PAGE AND SEND IT TO THE BROWSER.
   SO THIS PROCESS WILL REPEAT FOR EVERY PAGE REQUEST?
   Yes, this process repeats for every page request.
   SO SERVER CONTINUOUSLY RUNNING AND KEEPING TRACK OF EVERYTHING LIKE WHERE IS THE USER IS, WHAT IS THE STATE OF THE APPLICATION, ETC?
   Yes, the server continuously runs to handle requests.
   - It initializes state and connects everything to make the page interactive.
   AND SERVER ALSO RUNS THE SAME CODE AS USER RUNS ON BROWSER?
   Yes, the server also runs the same code as user runs on browser.
   AND WHEN USER TAP ON A LINK OR BUTTON IT WILL SEND A REQUEST TO THE SERVER AND SERVER WILL RENDER THE PAGE AND SEND IT TO THE BROWSER?
   Yes, when the user taps on a link or button it will send a request to the server and server will render the page and send it to the browser.
   AND THIS PROCESS WILL REPEAT FOR EVERY PAGE REQUEST?
   Yes, this process repeats for every page request.
   SO THIS PROCESS WILL BE VERY SLOW?
   Yes, this process will be very slow.
   SO THIS IS THE PROBLEM WITH SSR?
   Yes, this is the problem with SSR.

So, the same component code executes twice: once on the server to generate HTML, and once on the client to make it interactive.

This is why SSR gives you the best of both worlds:
- Fast initial load (from server-rendered HTML)
- Full interactivity (from client-side React)

It's different from CSR where the server sends minimal HTML and React builds everything from scratch in the browser.
