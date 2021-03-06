'use strict';

angular.module('myApp')

.factory('Users', ['LocalStorage', 'Orders', function(LocalStorage, Orders) {
  return {
    _getAllUsers: function() {
      return LocalStorage.getJSON('dodocafe_users') || []
    },
    _setAllUsers: function(users) {
      LocalStorage.setJSON('dodocafe_users', users);
    },
    saveUser: function(user) {
      var users = this._getAllUsers();
      users.push(user);
      this._setAllUsers(users);
    },
    updateUser: function(email, key, value) {
      var users = this._getAllUsers();
      var userIdx = users.findIndex(function(user) {
        return user.email === email;
      });
      users[userIdx][key] = value;
      this._setAllUsers(users);
    },
    getOrders: function(email) {
      return Orders._getAllOrders().filter(function(order){
        return order.user.email === email;
      });
    }
  };
}]);