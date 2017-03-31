function DuckController(DuckFactory, $stateParams, $state) {
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

  controller.addDuck = function() {
    console.log('addDuck');
    DuckFactory.createOne(controller.newDuck).then(
      function success(response) {
        console.log('Duck', response);
        $state.go('home');
      },
      function error(error) {
        console.log('Error adding duck', error);
      }
    );
  };

  controller.deleteDuck = function(duckId) {
    DuckFactory.deleteOne(duckId).then(
      function success(response) {
        console.log('duck deleted:', response);
      },
      function error(error) {
        console.log('Error deleting duck', error);
      }
    );
  };

  function init() {
    console.log(controller);
    controller.selectedDuck = undefined;
    controller.allDucks = [];
    controller.newDuck = {};
    controller.colors = ['red', 'blue', 'pink with yellow polka dots'];
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
