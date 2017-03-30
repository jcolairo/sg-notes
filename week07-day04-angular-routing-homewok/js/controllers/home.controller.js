function HomeController() {
  var controller = this;

  controller.title = 'This is the home page';

  function init() {
    controller.todos = {
      '1': 'Something',
      '2': 'Something Something',
      '3': 'Something Something Something',
      '4': 'Something Something Something Something'
    };
  }
  init();
}

angular
  .module('angularstates')
  .controller('HomeController', HomeController);
