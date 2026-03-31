how to host node js apps on ubuntu

step 1: install node js and npm and build essentials
    
    sudo apt update
    sudo apt install nodejs
    sudo apt install npm


    isnt it 
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
    this is for specific version of node js

    sudo means super user do what super user do 
    it is like  run as administrator in windows
    and apt mean advanced package tool
    sudo mean 

    now install build essentials
    
    sudo apt install build-essential
    this is for the native module of node js
    native module mean the module that is not written in pure javascript but in c++ or other language  


Create a directory and initialize a simple Express app:
```bash
     mkdir sample 
     cd sample
     npm init -y
     npm i express@4.18.2
```

Create `index.js` with the following content:
```javascript
    const express = require("express");
    const app = express();

    app.get("/", (req, res) => {
        res.send("Hello World!");
    });

    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
```

Test the app:
```bash
    node index.js
```
*Note: Running the app directly with `node` will stop the process if the terminal is closed.*

## Step 3: Install and Configure PM2
install pm2 globally wjich is a process manager for node js apps
```bash
sudo npm i -g pm2
```

Start your application with a specific name:
```bash
    pm2 start index.js --name "my-app"
```

## Step 4: Set Up the App to Run on Startup

To ensure the app restarts after a server reboot, generate and run the startup script:
```bash
pm2 startup
```
*Copy and paste the command provided by the output of `pm2 startup`.*

Save the current process list:
```bash
pm2 save
```

## step5: apt install nginx
Nginx is a web server that is used to serve static files and act as a reverse proxy for dynamic applications.
dynamic application mean the application that is not static but dynamic
what is dynamic application ?
dynamic application is an application that can change its content based on the user request
or it can perform some action based on the user request

proxy mean it will forward the request to the application
reverse proxy mean it will receive the request from the internet and forward it to the application
like receive a ip address and forward it to the application
from where it will receive ip address ?
it will receive ip address from the internet and who will give it to us ?
we have to buy it from a domain registrar
like go daddy, namecheap, etc

and then we have to configure it to point to our server

User → Domain → IP → Server (Nginx) → Your App
user visits example.com
DNS points example.com to your server's IP
Nginx receives the request
Nginx forwards the request to your Node.js app (port 3000)
Your app responds

key difference between forward proxy and reverse proxy
Type	Who does it protect/hide?	Who sees the final server?
Forward proxy	Client	Client's IP is hidden; server sees proxy
Reverse proxy	Server	Client sees proxy, not the real app server

``` 
    sudo apt install nginx
    
```
now we have to configure nginx to point to our application
we have to edit the nginx configuration file
```bash
    sudo nano /etc/nginx/sites-available/default
```
file look like this 
```
server {
    listen 80;
    server_name example.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

```
if there is second app
file will be like this 
location /app2 mean when user visit example.com/app2 it will forward to the application

```
server {
    listen 80;
    server_name example.com;

    location /app2 {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```
we have to replace example.com with our domain name
and then we have to restart nginx
```bash
    sudo systemctl restart nginx
```

``` 
remember we have to buy domain name from domain registrar
like go daddy, namecheap, etc
and then we have to configure it to point to our server
like make a record in dns
address record mean it will point to our server ip address
```