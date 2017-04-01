function TodosController($state, $stateParams, TodoFactory) {
  var controller = this;

  controller.getTodo =  function() {
    var todoId = $stateParams.todoId;

    TodoFactory.getOne(todoId).then(
      function success(response) {
        controller.selectedTodo = response.data;
      },
      function error(error) {
        console.log('Error getting todo:', error);
      }
    );
  };
}

angular
  .module('TodoApp')
  .controller('TodosController', TodosController);
