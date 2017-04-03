/* global firebase */

function AuthRun() {
  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyDGzQFSOIMCC0ZFle7PkwD--fWZxirUbLQ',
    authDomain: 'angularauth-d944d.firebaseapp.com',
    databaseURL: 'https://angularauth-d944d.firebaseio.com',
    projectId: 'angularauth-d944d',
    storageBucket: 'angularauth-d944d.appspot.com',
    messagingSenderId: '887289502319'
  };

  firebase.initializeApp(config);
}

function AuthFactory($firebaseAuth) {
  return $firebaseAuth();
}
AuthFactory.$inject = ['$firebaseAuth'];

angular
  .module('myApp')
  .run(AuthRun)
  .factory('AuthFactory', AuthFactory);
