# 0x06. Unittests in JS

## UnitTests
- JavaScript
- ES6
- NodeJS
- ExpressJS
- Mocha
- Chai
- Sinon

### Resources
Read or watch:
- [Mocha documentation](https://mochajs.org/)
- [Chai documentation](https://www.chaijs.com/)
- [Sinon documentation](https://sinonjs.org/)
- [Express documentation](https://expressjs.com/)
- [Request documentation](https://www.npmjs.com/package/request)
- [How to Test NodeJS Apps using Mocha, Chai and SinonJS](https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai)

### Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
- How to use Mocha to write a test suite
- How to use different assertion libraries (Node or Chai)
- How to present long test suites
- When and how to use spies
- When and how to use stubs
- What are hooks and when to use them
- Unit testing with Async functions
- How to write integration tests with a small node server

### Requirements
- All of your code will be executed on Ubuntu 18.04 using Node 12.x.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- When running every test with `npm run test *.test.js`, everything should pass correctly without any warning or error

### Tasks
1. **Basic test with Mocha and Node assertion library**
   - Install Mocha using npm
   - Set up scripts in your package.json to run Mocha using `npm test`
   - Implement `calculateNumber` function in `0-calcul.js` with basic tests in `0-calcul.test.js`

2. **Combining descriptions**
   - Create `1-calcul.js` with extended functionality of `calculateNumber`
   - Write test cases in `1-calcul.test.js` using assert

3. **Basic test using Chai assertion library**
   - Copy `1-calcul.js` to `2-calcul_chai.js`
   - Rewrite tests using Chai's `expect` in `2-calcul_chai.test.js`

4. **Spies**
   - Implement `sendPaymentRequestToApi` in `3-payment.js`
   - Create tests in `3-payment.test.js` using Sinon spies

5. **Stubs**
   - Copy `3-payment.js` to `4-payment.js`
   - Use Sinon stubs to mock `Utils.calculateNumber` in tests in `4-payment.test.js`

6. **Hooks**
   - Implement `sendPaymentRequestToApi` in `5-payment.js`
   - Write tests in `5-payment.test.js` using beforeEach and afterEach hooks

7. **Async tests with done**
   - Create `getPaymentTokenFromAPI` function in `6-payment_token.js`
   - Implement tests in `6-payment_token.test.js` using `done` callback for async testing

8. **Skip**
   - Use `7-skip.test.js` to demonstrate skipping tests without removing or commenting them out

9. **Basic Integration testing**
   - Setup Express server in `8-api/api.js`
   - Write integration tests in `8-api/api.test.js` for basic endpoint functionality

10. **Regex integration testing**
    - Extend Express server in `9-api/api.js` with regex validation for GET `/cart/:id`
    - Write tests in `9-api/api.test.js` to validate endpoint behavior

11. **Deep equality & Post integration testing**
    - Enhance Express server in `10-api/api.js` with endpoints `/available_payments` and `/login`
    - Create tests in `10-api/api.test.js` to verify deep equality and correct server responses

### Repo
- GitHub repository: [alx-backend-javascript](https://github.com/mburuxx/alx-backend-javascript)
- Directory: `0x06-unittests_in_js`
