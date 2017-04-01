function MainRouter ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/todos',
      templateUrl: '/states/home.html'
    });

  $urlRouterProvider.otherwise('/todos');

}

angular
  .module('TodoApp', ['ui.router'])
  .constant('API_URL', 'http://localhost:3000')
  .config(MainRouter);
