angular
  .module('angularDirectives')
  .directive('profile', function() {
    return {
      restrict: 'E', // this directive has to be implemented as an element
      replace: true,
      templateUrl: 'directives/profile/profile.directive.html',
      scope: {
        person: '=' // firstly looking for an attirube for 'Element'for a two way binding
      },
      link: function(scope /*, element, attrs*/) {
        scope.showSkills = false;

        scope.toggleSkills = function() {
          scope.showSkills = !scope.showSkills;
        };
      }
    };
  });
