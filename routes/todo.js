const express = require('express');
const router = express.Router();
const Todo = require('../controllers/todo')

router.route('/')
  .get(Todo)

module.exports = router;