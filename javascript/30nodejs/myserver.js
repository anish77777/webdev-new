// 1. This line imports the "HTTP Toolkit" built into Node.js. 
// 'createServer' is a tool from this toolkit used to build the server.
const { createServer } = require("node:http");
// 127.0.0.1 is a special IP called "localhost". 
// It means "This very computer" (your laptop).
const hostname = "127.0.0.1";
/*
  WHAT IS A PORT NUMBER?
  
  Analogy: 
  - The IP Address (127.0.0.1) is like the ADDRESS of an apartment building.
  - The Port Number (3000) is like the specific APARTMENT NUMBER inside.

  Why do we need it?
  Your laptop can do many things at once. It might be:
  - Downloading a file (Port 21)
  - Browsing a website (Port 80 or 443)
  - Running your own Node.js server (Port 3000)

  The port number tells the internet traffic exactly which "door" or 
  "application" to talk to.
*/
const port = 3000;
// This function runs every time someone visits your website (a "Request")
const server = createServer((req, res) => {
  // 1. Set the Status Code: 200 means "OK, everything is fine!"
  res.statusCode = 200;

  // 2. Set the Header: Tells the browser we are sending plain text
  res.setHeader("Content-Type", "text/plain");

  // 3. Send the Data and CLOSE the connection:
  // This sends "Hello World" FROM the Server TO your Browser (the Client).
  res.end("Hello World");

  /* 
    WHERE DOES IT SHOW UP?
    - It shows up in your BROWSER (at http://127.0.0.1:3000).
    - It DOES NOT show up in your terminal (command prompt) unless you 
      use console.log().
  
    THE FLOW:
    1. Browser (Client) asks: "Give me the page!"
    2. Server (Your Node script) receives the request.
    3. Server says: "Here is 'Hello World'!"
    4. Server calls `res.end()` to actually SEND it.
  
    YES, the Server is the one RESPONDING to the Browser.
    'Hello World' is the message.
    'res.end' is the action of sending that message.
  */
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/*
  --- DEPLOYING TO A SERVICE PROVIDER (Heroku, Render, AWS) ---

  When you move your code from your laptop to a "service provider":

  1. THE PORT: 
     You won't pick the port (3000). The provider will GIVE you a port.
     In real apps, we use `process.env.PORT` to get the port they give us.

  2. THE HOSTNAME:
     The hostname in 'server.listen' is where the server "binds" itself.
     - On your laptop: '127.0.0.1' (Only you can see it).
     - On a service provider: We usually use '0.0.0.0' or just leave it empty.
       This tells the server: "Listen to any request coming from the internet."

  3. THE PUBLIC URL:
     The provider (like AWS) will give you a public address like "myapp.render.com".
     You don't put that address inside 'server.listen'. You just tell the server 
     to listen, and the provider routes the traffic to it!
*/

