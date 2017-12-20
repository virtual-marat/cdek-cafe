'use strict';

angular.module('myApp')

.factory('Users', ['Share', function(Share) {
  return {
    saveUser: function(user) {
      var users = (Share.getObjFromLS('dodocafe_users') || [])
        .push(user);
      window.localStorage.setItem('dodocafe_users',
        JSON.stringify(users)
      );
      return true;
    }
  };
}]);