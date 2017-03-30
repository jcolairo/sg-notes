function HomeController() {
  var controller = this;

  controller.title = 'Show current TODOS';

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

  function init() {
    controller.todos = ['Something', 'Something Something', 'Something Something Something','Something Something Something Something'];
  }
  init();
}
//
// var myApp = angular.module('myApp', []);
//
// myApp.factory('Fact', function() {
//   return {Field: ''};
// });
//
// myApp.controller('FirstCtrl', function (controller, Fact ) {
//   controller.Alpha = Fact;
// });
//
// myApp.controller('SecondCtrl', function (controller, Fact) {
//   controller.Beta = Fact;
// });

angular
  .module('angularstates')
  .controller('HomeController', HomeController);
