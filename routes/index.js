const express = require('express');
const router = express.Router();
const Index = require('../controllers/index')

router
  .post('/signup', Index.signup)
  .post('/signin', Index.signin)
  .post('/loginfb', Index.loginfb)

module.exports = router;