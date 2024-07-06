const request = require('supertest');
const app = require('./api.js');

describe('GET /cart/:id', () => {
  it('should return 200 for a valid id', (done) => {
    request(app)
      .get('/cart/12')
      .expect(200, 'Payment methods for cart 12', done);
  });

  it('should return 404 for an invalid id', (done) => {
    request(app)
      .get('/cart/hello')
      .expect(404, done);
  });
});

describe('GET /available_payments', () => {
  it('should return payment methods', (done) => {
    request(app)
      .get('/available_payments')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      }, done);
  });
});

describe('POST /login', () => {
  it('should welcome the user', (done) => {
    request(app)
      .post('/login')
      .send({ userName: 'Betty' })
      .set('Content-Type', 'application/json')
      .expect(200, 'Welcome Betty', done);
  });

  it('should return 400 if no username is provided', (done) => {
    request(app)
      .post('/login')
      .send({})
      .set('Content-Type', 'application/json')
      .expect(400, 'Bad Request', done);
  });
});
