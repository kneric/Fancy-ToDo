const express = require('express');
const router = express.Router();
const Todo = require('../controllers/todo')

router.route('/')
  .get()
  .post()

router.route('/:id')
  .put()
  .delete()

router.route('/images')
  .post()

module.exports = router;