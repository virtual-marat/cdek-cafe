'use strict';

angular.module('myApp.profile', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/profile', {
    templateUrl: 'profile/profile.html',
    controller: 'ProfileCtrl',
    name: 'client'
  });
}])

.controller('ProfileCtrl', ['$scope', '$http', 'Dishes', 'Users', function($scope, $http, Dishes, Users) {

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
    Dishes.orderDish(_dish, user);
  };

}]);