'use strict';

angular.module('myApp')

.factory('Orders', ['LocalStorage', function(LocalStorage) {
  return {
    _getAllOrders: function() {
      return LocalStorage.getJSON('dodocafe_orders') || [];
    },
    _setAllOrders: function(orders) {
      LocalStorage.setJSON('dodocafe_orders', orders);
    },
    addOrder: function(dish, user) {
      var orders = this._getAllOrders();
      orders.push(angular.extend({}, { dish: dish, user: user }));
      this._setAllOrders(orders);
    },
    getOrders: function(){
      return this._getAllOrders();
    },
    updateOrders: function(orders) {
      this._setAllOrders(orders);
    },
    deferredRemoveOrder: function() {
      var orders = this._getAllOrders();
      var time = new Date();
      var freshOrders = orders.filter(function(order){
        if (order.dish.cooked) {
          if ((new Date(order.dish.cooked).getTime() + 5 * 1000) > time) {
            return true;
          }
        } else {
          return true;
        }
      });
      this._setAllOrders(freshOrders);
    }
  };
}]);