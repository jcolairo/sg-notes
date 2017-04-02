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

  controller.reloadState = function() {
    TodoFactory.getAll().then(
    function success(response) {
      controller.allTodos = response.data;
    },
    function error (error) {
      console.warn('Error getting todos:', error);
    }
    );
  };

  controller.addTodo = function () {
    TodoFactory.createOne(controller.newTodo).then(
      function success() {
        controller.reloadState();
        $state.go('home');
      },
      function error(error) {
        console.log('Error creating TODO:', error);
      }
    );
  };

  controller.deleteTodo = function (todoId) {
    TodoFactory.deleteOne(todoId).then(
      function success() {
        controller.reloadState();
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
      function success() {
        controller.reloadState();
        $state.go('home');
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
    controller.complete = [true, false];
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
