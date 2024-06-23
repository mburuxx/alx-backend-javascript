# 0x04. TypeScript

## Back-end
- JavaScript
- TypeScript

### Resources
Read or watch:
- [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [TypeScript documentation](https://www.typescriptlang.org/docs/)

### Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
- Basic types in TypeScript
- Interfaces, Classes, and functions
- How to work with the DOM and TypeScript
- Generic types
- How to use namespaces
- How to merge declarations
- How to use an ambient Namespace to import an external library
- Basic nominal typing with TypeScript

### Requirements
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- All your files will be transpiled on Ubuntu 18.04
- Your TS scripts will be checked with jest (version 24.9.* )
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the ts extension when possible
- The TypeScript compiler should not show any warning or error when compiling your code

### Configuration Files
Please use these files for the following tasks:

- `package.json`
- `.eslintrc.js`
- `tsconfig.json`
- `webpack.config.js`

### Repo
- GitHub repository: [alx-backend-javascript](https://github.com/mburuxx/alx-backend-javascript)
- Directory: `0x04-TypeScript`

## Tasks

### 0. Creating an interface for a student
- **Directory:** [task_0](task_0)
- **Files:** `task_0/js/main.ts`, `task_0/package.json`, `task_0/.eslintrc.js`, `task_0/tsconfig.json`, `task_0/webpack.config.js`

In `task_0/js/main.ts`, create an interface `Student` with elements: `firstName` (string), `lastName` (string), `age` (number), and `location` (string). Create two students, add them to an array `studentsList`, and render a table using Vanilla JavaScript.

### 1. Let's build a Teacher interface
- **Directory:** [task_1](task_1)
- **Files:** `task_1/js/main.ts`, `task_1/webpack.config.js`, `task_1/tsconfig.json`, `task_1/package.json`

In `task_1/js/main.ts`, create a `Teacher` interface with specific properties. Add functionality to modify and display these properties, allowing dynamic attribute addition.

### 2. Extending the Teacher class
- **Directory:** [task_1](task_1)
- **Files:** `task_1/js/main.ts`

Extend the `Teacher` interface to create a `Directors` interface with an additional property `numberOfReports` (number).

### 3. Printing teachers
- **Directory:** [task_1](task_1)
- **Files:** `task_1/js/main.ts`

Write a function `printTeacher` that returns the first initial of the firstName and the full lastName.

### 4. Writing a class
- **Directory:** [task_1](task_0)
- **Files:** `task_1/js/main.ts`

Create a `StudentClass` with methods `workOnHomework` and `displayName`, and describe both the constructor and class through an Interface.

### 5. Advanced types Part 1
- **Directory:** [task_2](task_2)
- **Files:** `task_2/js/main.ts`, `task_2/webpack.config.js`, `task_2/tsconfig.json`, `task_2/package.json`

Create `DirectorInterface` and `TeacherInterface` with specific methods, and implement these interfaces in `Director` and `Teacher` classes respectively. Add a function `createEmployee` to return an instance based on the salary.

### 6. Creating functions specific to employees
- **Directory:** [task_2](task_2)
- **Files:** `task_2/js/main.ts`

Write functions `isDirector` and `executeWork` to determine the type of employee and execute the corresponding tasks.

### 7. String literal types
- **Directory:** [task_2](task_2)
- **Files:** `task_2/js/main.ts`

Create a String literal type `Subjects` and a function `teachClass` that returns specific strings based on the argument.

### 8. Ambient Namespaces
- **Directory:** [task_3](task_2)
- **Files:** `task_3/js/main.ts`, `task_3/js/interface.ts`, `task_3/js/crud.d.ts`

Create types and interfaces, and write an ambient file for `crud.js` functions. Implement functions to manipulate `RowElement` objects using the CRUD operations.

### 9. Namespace & Declaration merging
- **Directory:** [task_4](task_4)
- **Files:** `task_4/js/subjects/Cpp.ts`, `task_4/js/subjects/Java.ts`, `task_4/js/subjects/React.ts`, `task_4/js/subjects/Subject.ts`, `task_4/js/subjects/Teacher.ts`

Use declaration merging to add attributes to `Teacher` interface and create `Cpp`, `Java`, and `React` classes with specific methods.

### 10. Update task_4/js/main.ts
- **Directory:** [task_4](task_4)
- **Files:** `task_4/js/main.ts`

Create and export constants for `Cpp`, `Java`, and `React` subjects, and a `Teacher` object. Implement methods to log the requirements and availability of teachers for each subject.

### 11. Brand convention & Nominal typing
- **Directory:** [task_5](task_5)
- **Files:** `task_5/js/main.ts`, `task_5/package.json`, `task_5/webpack.config.js`, `task_5/tsconfig.json`

Create interfaces `MajorCredits` and `MinorCredits` with unique brand properties. Implement functions `sumMajorCredits` and `sumMinorCredits` to sum the credits of two subjects.
