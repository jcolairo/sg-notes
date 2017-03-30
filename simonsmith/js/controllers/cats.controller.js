function CatsController() {
  var controller = this;


  function init() {
    console.log('CatsController:', controller);
    controller.title = 'Pictures of cats that looks like Donald Trump';
    controller.context = 'Here are some images of cats that look like Donald Trump';
    controller.images = [
      'http://theawesomedaily.com/wp-content/uploads/2015/07/donald-trump-funny-look-alike-201__700.jpg',
      'https://www.usnews.com/cmsmedia/ba/be/b1a693e74cdebda131dcfd3ec68a/150715-editorial.JPG',
      'http://cdn.smosh.com/sites/default/files/2015/08/donald-trump-looks-like-cat.jpg'
    ];
  }
  init();
}

angular
  .module('angularstates')
  .controller('CatsController', CatsController);
