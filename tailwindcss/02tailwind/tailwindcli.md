# Tailwind CLI Setup

1. **Initialize Project**
   ```bash
   npm init -y
   ```

2. **Install Tailwind**
   ```bash
   npm install tailwindcss @tailwindcss/cli
   ```

3. **Import Tailwind**
   Add this to `src/input.css`:
   ```css
   @import "tailwindcss";
   ```

4. **Start Build Process**
   ```bash
   npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
   ```

   what is dev dependency?
   Dev dependencies are packages that are only needed during development and are not required for the application to run in production. They are typically used for development tools, build tools, testing frameworks, and other utilities that help in the development process.

   Examples:
   - Development tools: linters, code formatters, build tools, etc.
   - Testing frameworks: Jest, Mocha, Chai, etc.
   - Build tools: Webpack, Rollup, Parcel, etc.
   - Other utilities: code generators, documentation tools, etc.