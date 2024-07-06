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
