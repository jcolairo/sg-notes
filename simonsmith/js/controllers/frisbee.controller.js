function FrisbeeController() {
  var controller = this;


  function init() {
    console.log('FrisbeeController:', controller);
    controller.title = 'Extreme Frisbee';
    controller.context = 'Here\'s an image of extreme frisbees';
    controller.images = [ 'https://metrouk2.files.wordpress.com/2012/06/article-1340016298067-13a96eaf000005dc-468175_636x418.jpg',
      'https://s-media-cache-ak0.pinimg.com/736x/b4/09/47/b40947d421f8691f0d08088c178d6a96.jpg',
      'http://i3.cpcache.com/product/538872393/extrema_hunting_deer_karate_kick_rectangle_magnet.jpg?width=750&height=750&Filters=%5B%7B%22name%22%3A%22background%22%2C%22value%22%3A%22F2F2F2%22%2C%22sequence%22%3A2%7D%5D'
    ];
  }
  init();
}

angular
  .module('angularstates')
  .controller('FrisbeeController', FrisbeeController);
