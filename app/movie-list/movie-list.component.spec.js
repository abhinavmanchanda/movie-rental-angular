'use strict';

describe('movieList', function() {

  beforeEach(module('movieList'));

  // Test the controller
  describe('MovieListController', function() {

    it('should create a `movies` model with 3 movies', inject(function($componentController) {
      var controller = $componentController('movieList');

      expect(controller.movies.length).toBe(3);
    }));

  });

});
