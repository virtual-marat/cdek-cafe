'use strict';

angular.module('myApp')

.factory('Users', ['LocalStorage', function(LocalStorage) {
  return {
    saveUser: function(user) {
      var users = LocalStorage.getJSON('dodocafe_users') || [];
      users.push(user);
      LocalStorage.setJSON('dodocafe_users', users);
      return true;
    }
  };
}]);