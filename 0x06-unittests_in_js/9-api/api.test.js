const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  describe('GET /cart/:id', () => {
    it('returns correct response when :id is a number', (done) => {
      const validId = 123;
      request.get(`${API_URL}/cart/${validId}`, (_err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal(`Payment methods for cart ${validId}`);
        done();
      });
    });

    it('returns 400 status code when :id is NOT a number', (done) => {
      const invalidId = 'abc';
      request.get(`${API_URL}/cart/${invalidId}`, (_err, res, body) => {
        expect(res.statusCode).to.be.equal(400);
        const responseBody = JSON.parse(body);
        expect(responseBody.errors).to.be.an('array').that.is.not.empty;
        expect(responseBody.errors[0]).to.have.property('msg').that.equals('ID must be a number');
        done();
      });
    });

    it('returns correct response when :id is a string number', (done) => {
      const stringNumberId = '456';
      request.get(`${API_URL}/cart/${stringNumberId}`, (_err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal(`Payment methods for cart ${stringNumberId}`);
        done();
      });
    });
  });
});
