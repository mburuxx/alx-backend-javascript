function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else {
      // If success is false, the function does nothing (no rejection).
      // You might consider rejecting with an appropriate error in a real scenario.
    }
  });
}

module.exports = { getPaymentTokenFromAPI };
