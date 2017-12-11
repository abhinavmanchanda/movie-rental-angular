'use strict';

describe('MovieListController', function() {

  var movieListController;

  beforeEach(module('movieList'));

  beforeEach(inject(function($componentController) {
    movieListController = $componentController('movieList');
  }));

  it('should create a `movies` model with 6 movies', function() {
    expect(movieListController.movies.length).toBe(6);
    expect(movieListController.movies[4].name).toBe("Tabaahi - The Destroyer");
  });

});
