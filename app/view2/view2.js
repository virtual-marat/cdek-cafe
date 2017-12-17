'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/kitchen', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl',
    name: 'kitchen'
  });
}])

.controller('View2Ctrl', [function() {

}]);