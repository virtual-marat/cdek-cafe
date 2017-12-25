'use strict';

angular.module('myApp.kitchen', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/kitchen', {
    templateUrl: 'kitchen/kitchen.html',
    controller: 'KitchenCtrl',
    menu: 'kitchen'
  });
}])

.controller('KitchenCtrl', ['$scope', 'Orders', function($scope, Orders) {

  $scope.orders = Orders.getOrders();

  $scope.setState = function(dish, state) {
    dish.state = state;
    if (state === 'ready') {
      dish.cooked = +new Date();
    }
    Orders.updateOrders($scope.orders);
  };

}]);