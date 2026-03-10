# Node.js Project: 30nodejs

This project was initialized using `npm init`.

## What is `package.json`?

The `package.json` file is the heart of any Node.js project. It acts as a manifest that contains metadata about your project and handles its dependencies.

### Key Sections:
- **name**: The name of your project.
- **version**: The current version of your project.
- **main**: The entry point of your application (in our case, `server.js`).
- **scripts**: Custom commands you can run using `npm run <script-name>`.
  - We added `"start": "node server.js"`, so you can start your app by running `npm start`.
- **dependencies**: A list of external libraries (packages) your project needs to run (none yet!).

## How to use it?
- To install a new package: `npm install <package-name>`
- To run the project: `npm start`
