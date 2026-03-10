# ECMAScript Modules (ESM) vs CommonJS (CJS)

In JavaScript, there are two main ways to share code between files.

## 1. CommonJS (CJS)
- **Keyword**: `require` and `module.exports`.
- **File Extension**: Usually `.js` (in older Node projects).
- **Behavior**: It is synchronous.
- **Example**: 
  ```javascript
  const myModule = require("./myModule.js");
  module.exports = { ... };
  ```

## 2. ECMAScript Modules (ESM)
- **Keyword**: `import` and `export`.
- **File Extension**: Usually `.mjs` or `.js` (if "type": "module" is in package.json).
- **Behavior**: It is asynchronous and the modern standard for JavaScript.
- **Example**: 
  ```javascript
  import { something } from "./myModule.js";
  export const something = ...;
  ```

## How to switch in Node.js?
By default, Node.js treats `.js` files as **CommonJS**. 
To use **ESM**, you have two options:
1. Change your file extension to `.mjs`.
2. Add `"type": "module"` to your `package.json`.

---

## 3. NPM Scripts (The Shortcuts)
In `package.json`, the `"scripts"` section is where we create shortcuts for long commands.

- **Is "dev" default?** No! I added it specifically for you.
- **Why?** It's a common **convention**. Most developers use `"dev"` for their development command (like starting `nodemon`).
- **How to run them?**
  - For almost any script: `npm run <name>` (Example: `npm run dev`)
  - Special shortcut: `npm start` (You don't *need* the "run" word for "start").

**Tip**: Always check the `package.json` when you join a new project to see what scripts are available!

---

## 4. Troubleshooting: "Nodemon not recognized"
If you type `nodemon main.js` and get an error, here is why:

1. **Local vs Global**: We installed `nodemon` **locally** in this project. This means it is "hidden" inside the `node_modules` folder.
2. **The PATH**: Your terminal only knows how to run commands that are in its "PATH" (its map of tools).
3. **The Solution**: 
   - **`npm run dev`**: This command is special. It tells Node to look inside `node_modules` for the tool.
   - **`npx nodemon main.js`**: This is another way to run local tools without the `npm run` shortcut.

**Think of it like this:** 
- `nodemon` is a hammer. 
- Local install puts the hammer in your **project's toolbox** (`node_modules`).
- `npm run` or `npx` is you **opening the toolbox** to use the hammer. 
- Typing `nodemon` directly is you trying to use a hammer that's locked inside a box you haven't opened yet!
