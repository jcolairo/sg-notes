function mainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '../states/home.html'
    })
    // New
    .state('new', {
      url: '/home/new',
      templateUrl: '../states/new.html'
    })
    // Delete
    .state('delete', {
      url: '/home/:id',
      templateUrl: '../states/home.html'
    })
    // Edit
    .state('edit', {
      url: '/home/edit',
      templateUrl: '../states/edit.html'
      // controller: function(controller, $stateProvider) {
      //   controller.id = $stateProvider.id;
      // }
    });

  $urlRouterProvider.otherwise('/');
}

angular
  .module('angularstates', ['ui.router'])
  .config(mainRouter);
