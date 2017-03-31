function HomeController() {
  var controller = this;

  controller.title = 'Show current TODOS';
  controller.complete = 'Completed TODOS';

  controller.addTitle = 'Add new TODOS';
  controller.addNewTodos = function() {
    controller.todos.push(controller.newTodos);
    controller.newTodos = '';
  };

  controller.updateTodos = function(index) {
    if(controller.updatedTodosField[index]) {
      controller.todos[index] = controller.updatedTodosField[index];
    }
  };

  controller.deleteTodos = function($index) {
    controller.todos.splice($index, 1);
  };

  controller.checkbox = function(todo) {
    controller.completedTodos.push(todo);
  };

  function init() {
    controller.todos = ['Something', 'Something Something', 'Something Something Something','Something Something Something Something'];
    controller.completedTodos = [];
  }
  init();
}

angular
  .module('angularstates')
  .controller('HomeController', HomeController);
