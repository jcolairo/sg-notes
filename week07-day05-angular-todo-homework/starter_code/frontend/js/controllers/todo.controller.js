function TodoController($state, $stateParams, TodoFactory) {
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

  controller.addTodo = function () {
    console.log('addTodo()');
    TodoFactory.createOne(controller.newTodo).then(
      function success(response) {
        console.log('Created new TODO:', response);
        $state.go('home');
      },
      function error(error) {
        console.log('Error creating TODO:', error);
      }
    );
  };

  controller.deleteTodo = function (todoId) {
    TodoFactory.deleteOne(todoId).then(
      function success(response) {
        console.log('Todo delted:', response);
      },
      function error(error) {
        console.log('Error deleting TODO:', error);
      }
    );
  };

  controller.editTodo = function (todoId) {
    $state.go('edit', {todoId: todoId});
  };

  controller.updatedTodo = function() {
    TodoFactory.editOne(controller.selectedTodo.todo).then(
      function success(response) {
        console.log('TODO updated:', response);
      },
      function error(error) {
        console.log('Error updating TODO:', error);
      }
    );
  };

  function init() {
    console.log(controller);
    controller.selectedTodo = undefined;
    controller.allTodos = [];
    controller.newTodo = {};
    TodoFactory.getAll().then(
      function success(response) {
        controller.allTodos = response.data;
      },
      function error(error) {
        console.log('Error getting TODOS:', error);
      }
    );
  }
  init();
}

angular
  .module('TodoApp')
  .controller('TodoController', TodoController);
