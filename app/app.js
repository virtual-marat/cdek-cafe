'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.kitchen',
  'myApp.client',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/'});
}])
.run(['$rootScope', '$route', 'LocalStorage', function($rootScope, $route, LocalStorage) {
  $rootScope.$route = $route;

  var users = LocalStorage.getJSON('dodocafe_users');
  if (users && users.length) {
    $rootScope.currentUser = users[0];
  }

}]);
