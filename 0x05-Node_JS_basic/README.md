# 0x05. NodeJS Basics

## Back-end
- JavaScript
- ES6
- NodeJS
- ExpressJS

### Resources
Read or watch:
- [Node JS getting started](https://nodejs.org/en/docs/guides/getting-started-guide/)
- [Process API doc](https://nodejs.org/api/process.html)
- [Child process](https://nodejs.org/api/child_process.html)
- [Express getting started](https://expressjs.com/en/starter/installing.html)
- [Mocha documentation](https://mochajs.org/)
- [Nodemon documentation](https://nodemon.io/)

### Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
- Run JavaScript using NodeJS
- Use NodeJS modules
- Use specific NodeJS module to read files
- Use process to access command line arguments and the environment
- Create a small HTTP server using NodeJS
- Create a small HTTP server using ExpressJS
- Create advanced routes with ExpressJS
- Use ES6 with NodeJS with Babel-node
- Use Nodemon to develop faster

### Provided files
- `database.csv`
- `firstname,lastname,age,field`

### Repo
- GitHub repository: [alx-backend-javascript](https://github.com/yourusername/alx-backend-javascript)
- Directory: `0x05-Node_JS_basic`

## Tasks
### 0. Executing basic javascript with Node JS
In `0-console.js`, a function `displayMessage` prints a string argument to STDOUT.

### 1. Using Process stdin
In `1-stdin.js`, prompts the user for their name, reads input from stdin, and prints the user's name.

### 2. Reading a file synchronously with Node JS
In `2-read_file.js`, a function `countStudents` reads `database.csv` synchronously, counts students in each field, and logs the results.

### 3. Reading a file asynchronously with Node JS
In `3-read_file_async.js`, `countStudents` function reads `database.csv` asynchronously, counts students in each field, and logs the results using promises.

### 4. Create a small HTTP server using Node's HTTP module
In `4-http.js`, creates a basic HTTP server using Node's `http` module on port 1245 that responds with "Hello Holberton School!" for any endpoint.

### 5. Create a more complex HTTP server using Node's HTTP module
In `5-http.js`, creates a HTTP server on port 1245 using Node's `http` module. Responds with "Hello Holberton School!" for `/` and lists students from `database.csv` for `/students`.

### 6. Create a small HTTP server using Express
In `6-http_express.js`, creates an HTTP server using Express on port 1245 that responds with "Hello Holberton School!" for the endpoint `/`.

### 7. Create a more complex HTTP server using Express
In `7-http_express.js`, creates an HTTP server using Express on port 1245. Responds with "Hello Holberton School!" for `/` and lists students from `database.csv` for `/students`.

### 8. Organize a complex HTTP server using Express
Creates a structured Express server in the `full_server` directory, using ES6 with Babel-node. Includes controllers for homepage and students, routes for `/` and `/students`, and utilizes `readDatabase` utility for data access.
