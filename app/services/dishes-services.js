'use strict';

angular.module('myApp')

.factory('Dishes', ['LocalStorage', function(LocalStorage) {
  return {
    _getAllOrders: function() {
      return LocalStorage.getJSON('dodocafe_orders') || [];
    },
    _setAllOrders: function(dishes) {
      LocalStorage.setJSON('dodocafe_orders', dishes);
    },
    orderDish: function(dish, user) {
      var dishes = this._getAllOrders();
      dishes.push(angular.extend({}, { dish: dish, user: user }));
      this._setAllOrders(dishes);
    }
  };
}]);