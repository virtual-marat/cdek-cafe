'use strict';

angular.module('myApp.profile', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/profile', {
    templateUrl: 'profile/profile.html',
    controller: 'ProfileCtrl',
    name: 'client'
  });
}])

.controller('ProfileCtrl', ['$scope', '$http', function($scope, $http) {

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

}]);