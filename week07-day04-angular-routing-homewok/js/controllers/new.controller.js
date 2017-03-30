function NewController() {
  var controller = this;

  controller.title = 'Add new TODOS';

  // controller.addNewTodos = function() {
  //   controller.todos.push(controller.newTodos);
  //   controller.newTodos = '';
  // };

  controller.todos = ['Something', 'Something Something', 'Something Something Something','Something Something Something Something'];


  function init() {

  }
  init();
}

angular
  .module('angularstates')
  .controller('NewController', NewController);
