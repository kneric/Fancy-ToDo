const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  userId : {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  task: {
    type: String,
    required: [true, 'input the task!']
  },
  dueDate: {
    type: Date,
    required: [true, 'input the deadline!']
  },
  description: String,
  priority: String, // low, normal, high
  tags: [],
}, {timestamps: true})


const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
