const { getPaymentTokenFromAPI } = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  test('should resolve with correct data when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).toEqual({ data: 'Successful response from the API' });
        done();
      })
      .catch((error) => {
        done(error); // Fail the test if there's an error
      });
  });

  test('should not resolve when success is false', (done) => {
    getPaymentTokenFromAPI(false)
      .then((response) => {
        // This test should not resolve, so we should not reach here
        done(new Error('Expected promise to be rejected, but it was resolved with: ' + JSON.stringify(response)));
      })
      .catch(() => {
        // Expected behavior: promise should be rejected
        done();
      });
  });
});
