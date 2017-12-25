'use strict';

angular.module('myApp.client', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/client', {
    templateUrl: 'client/client.html',
    controller: 'ClientCtrl',
    name: 'client'
  });
}])

.controller('ClientCtrl', ['$scope', '$http', 'Orders', 'Users', function($scope, $http, Orders, Users) {

  $scope.upBalance = function(user, value) {
    user.balance += value;
  };

  $scope.menuDishes = null;
  $scope.isShowMenu = false;

  $scope.showMenu = function() {
    $scope.isShowMenu = !$scope.isShowMenu;
    if (!$scope.menuDishes) {
      $http.get('/assets/menu.json').then(function(response){
            $scope.menuDishes = response.data;
      });
    }
  };

  $scope.hideMenu = function() {
    $scope.isShowMenu = false;
  };

  $scope.addDish = function(dish, count, user, scope) {
    scope.count = 1;
    var _dish = angular.extend({}, dish, {
      state: 'ordered',
      count: count
    });

    user.balance -= _dish.price * count;
    user.dishes = user.dishes || [];
    user.dishes.push(_dish);

    Users.updateUser(user.email, 'balance', user.balance);
    Orders.addOrder(_dish, user);
  };

}]);