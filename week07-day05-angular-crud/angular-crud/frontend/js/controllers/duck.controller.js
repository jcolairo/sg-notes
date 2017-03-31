function DuckController(DuckFactory) {
  var controller = this;

  function init() {
    console.log(controller);
    controller.allDucks = [];
    //make an API call to retrieve the data
    DuckFactory.getAll().then(
      function (response) {
        controller.allDucks = response.data;
        console.log('allDucks:', controller.allDucks);
      },
      function (error) {
        console.log('Error getting ducks', error);
      }
    );
  }
  init();
}

angular
  .module('DuckApp')
  .controller('DuckController', DuckController);
