const jwt = require ('jsonwebtoken');
const Todo = require('../models/todo');
const loggedInUser = jwt.verify(req.body.token, process.env.secretKey)

const createTodo = (req, res)=> {
  const {task, dueDate, description, priority} = req.body
  

  Todo.create({

  })
}

module.exports = {
  createTodo,
  listTodo,
  updateTodo,
  deleteTodo
};
