function ContactController() {
  var controller = this;

  function init() {
    console.log('ContactController:', controller);
  }
  init();
}

angular
  .module('angularstates')
  .controller('ContactController', ContactController);
