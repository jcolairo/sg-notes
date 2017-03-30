function HomeController() {
  var controller = this;

  console.log('HomeController:', controller);

  function init() {
    controller.adress = {
      Street: '1 Strand',
      City: 'London',
      Postcode: 'W1'
    };
  }
  init();
}

angular
  .module('angularstates')
  .controller('HomeController', HomeController);
