'use strict';

angular.module('myApp')

.factory('LocalStorage', [function() {
  return {
    getJSON: function(key) {
      if (key) {
        var item = localStorage.getItem(key);
        if (item) {
          try {
            var obj = JSON.parse(item);
            return obj;
          } catch (err) {
            return null;
          }
        } else {
          return null;
        }
      } else {
        return null;
      }
    },
    setJSON: function(key, obj) {
      localStorage.setItem(key, JSON.stringify(obj));
    }
  };
}]);