const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authUser');
const validate = require('../middlewares/validateToken');

router.post('/register', validate, register);

router.post('/login', login);

router.put('/change', validate, register);
module.exports = router;