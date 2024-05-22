const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Token not provided' });

  jwt.verify(token, 'secret_key', (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.userId = decoded.userId;
    next();
  });
};

module.exports = verifyToken;
