'use strict';

describe('movieList', function() {

  beforeEach(module('movieList'));

  // Test the controller
  describe('MovieListController', function() {

    it('should create a `phones` model with 3 phones', inject(function($componentController) {
      var ctrl = $componentController('movieList');

      expect(ctrl.phones.length).toBe(3);
    }));

  });

});
