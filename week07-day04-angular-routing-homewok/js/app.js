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
      url: '/home/:id/edit',
      templateUrl: '../state/home.html'
    });

  $urlRouterProvider.otherwise('/');
}

angular
  .module('angularstates', ['ui.router'])
  .config(mainRouter);
