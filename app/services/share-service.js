'use strict';

angular.module('myApp')

.factory('Share', [function() {
  return {
    getObjFromLS: function(key) {
      if (key) {
        var lsItem = localStorage.getItem(key);
        if (lsItem) {
          try {
            var lsItemObj = JSON.parse(lsItem);
            return lsItemObj;
          } catch (err) {
            return null;
          }
        } else {
          return null;
        }
      } else {
        return null;
      }
    }
  };
}]);