'use strict';

describe('myApp.kitchen module', function() {

  beforeEach(module('myApp.kitchen'));

  describe('kitchen controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var kitchenCtrl = $controller('KitchenCtrl');
      expect(kitchenCtrl).toBeDefined();
    }));

  });
});