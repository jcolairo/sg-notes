function TrucksController() {
  var controller = this;


  function init() {
    console.log('TrucksController:', controller);
    controller.title = 'Monster Trucks';
    controller.context = 'Here are some images of Monster Trucks';
    controller.images = [
      'https://www.monsterjam.com/sites/default/files/Dragon16_02.jpg',
      'http://s1.ticketm.net/tm/en-us/dam/a/266/ae1a1d9a-a509-4175-ba7e-4e060c17b266_144461_CUSTOM.jpg',
      'https://i.ytimg.com/vi/I_UoNrgPclw/maxresdefault.jpg'
    ];
    controller.video = 'https://www.youtube.com/watch?v=5V93tl8mbtg';
  }
  init();
}

angular
  .module('angularstates')
  .controller('TrucksController', TrucksController);
