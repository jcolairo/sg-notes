function HomeController() {
  var controller = this;

  console.log('HomeController:', controller);
  controller.title = 'Simon Smith\'s interests';
  controller.context = 'Here are some of Simon\'s interests';

  function init() {
    controller.interests = {
      '1': 'Pictures of cats that looks like Donald Trump',
      '2': 'Extreme Frisbee',
      '3': 'Monster Trucks'
    };
  }
  init();
}

angular
  .module('angularstates')
  .controller('HomeController', HomeController);
