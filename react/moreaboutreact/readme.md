public/index.html
we can access this public file index.html directly from the browser
but we cannot access the src folder
here the public folder is like a root folder
and the src folder is like a source folder

in src/index.js we have a link to public/index.html
here there is a root div in public/index.html
and in src/index.js we have a root.render(<App />)
so it is like a bridge between index.js and public/index.html while we can directly see the bridge or the link but it is not directly accessible from the browser


what actually connect public and src folder?
connection is handled by the build process
when we run npm start, it starts a development server
this server serves the public folder
and it also compiles the src folder
make like a bundle of code 
inject the scripts into the public/index.html
and serves the compiled code
so it is like a bridge between public and src folder
but it is not directly accessible from the browser