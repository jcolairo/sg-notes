var express = require('express');
var router = express.Router();

var todoController = require('../js/controllers/todo.controller');

router.route('/todos')
  .get(todoController.getAll)
  .post(todoController.createTodo);

router.route('/todos/:id')
  .get(todoController.getTodo)
  .patch(todoController.updateTodo);


module.exports = router;
