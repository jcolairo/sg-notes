function DuckController($stateParams, DuckFactory ) {
  var controller = this;

  controller.getDuck = function() {
    var duckId = $stateParams.duckId;

    DuckFactory.getOne(duckId).then(
      function success(response) {
        console.log('Duck', response);
        controller.selectedDuck = response.data;
      },
      function error(error) {
        console.log('Error getting duck:', error);
      }
    );
  };

  function init() {
    console.log(controller);
    controller.selectedDuck = undefined;
    controller.allDucks = [];
    //make an API call to retrieve the data
    DuckFactory.getAll().then(
      function success(response) {
        controller.allDucks = response.data;
        console.log('allDucks:', controller.allDucks);
      },
      function error(error) {
        console.log('Error getting ducks', error);
      }
    );
  }

  init();
}

angular
  .module('DuckApp')
  .controller('DuckController', DuckController);
