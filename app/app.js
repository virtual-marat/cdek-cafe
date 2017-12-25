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
.run(['$rootScope', '$route', 'LocalStorage', '$location', '$timeout', 'Orders', function($rootScope, $route, LocalStorage, $location, $timeout, Orders) {
  $rootScope.$route = $route;

  var users = LocalStorage.getJSON('dodocafe_users');
  if (users && users.length) {
    $rootScope.currentUser = users[0];
    $location.path('/client');
  }

  (function checkOrders() {
    Orders.deferredRemoveOrder();
    $timeout(checkOrders, 1000);
  })();

}]);
