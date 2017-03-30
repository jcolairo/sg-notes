function NewController() {
  var controller = this;

  controller.title = 'Add new TODOS';


  function init() {

  }
  init();
}

angular
  .module('angularstates')
  .controller('NewController', NewController);
