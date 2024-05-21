const jwt = require('jsonwebtoken');

const createAuthToken = (userId) => {
  const token = jwt.sign({ userId: userId }, 'secret_key', { expiresIn: '1h' });
  return token;
};

module.exports = createAuthToken;
