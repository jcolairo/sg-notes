console.log('Home.controller.js');

function HomeController() {
  var controller = this;
  var canShowGonzo = false;

  // Shows example of sending the click event to this handler –
  // see the markup, where the variable `$event` is passed to this method.
  controller.showGonzo = function(event) {
    console.log('showGonzo: event:', event);
    canShowGonzo = true;
  };

  controller.hideGonzo = function() {
    canShowGonzo = false;
  };

  controller.toggleGonzo = function() {
    canShowGonzo = !canShowGonzo;
  };

  controller.isGonzoVisible = function () {
    return canShowGonzo;
  };

  controller.getGonzoVisibility = function () {
    var className = 'isVisible';

    if (!canShowGonzo) {
      className = 'isNotVisible';
    }
    return className;
    // {'isVisible': home.isGonzoVisible(), 'isNotVisible': !home.isGonzoVisible() }
  };

  controller.addTrainer = function () {
    console.log('addTrainer: controller.newTrainerName:', controller.newTrainerName);
    controller.trainers.push(controller.newTrainerName);
    controller.newTrainerName = '';
  };

  controller.clearTrainerList = function() {
    console.log('clearTrainerList:', controller.clearTrainerList);
    controller.trainers = [];
  };

  controller.deleteTrainer = function($index) {
    console.log('deleteTrainer:', controller.deleteTrainer);
    controller.trainers.splice($index, 1);
  };

  // controller.updateTrainersName = function() {
  //   if(controller.trainer) {
  //     controller.trainers.push(controller);
  //     controller.trainer = '';
  //     console.log('updateTrainersName passed:', controller.updateTrainersName);
  //   }
  //   console.log('updateTrainersName failed:', controller.updateTrainersName);
  // };

  controller.updateTrainer = function ($index) {
    if(controller.updatedTrainerNames[$index]) {
      controller.trainers.splice($index, 1, controller.updatedTrainerNames[$index]);
    }
    console.log('sdfsdfs');
  };

  function init() {
    console.log('inside HomeController');
    controller.newTrainerName = '';
    controller.title = 'Home page';
    controller.trainers = ['Steve', 'Matt', 'Ollie', 'Niall'];
    controller.hideGonzo();
    controller.updatedTrainerName = [];
  }

  init();
}

angular
  .module('myFirstApp', [])
  .controller('HomeController',HomeController);
