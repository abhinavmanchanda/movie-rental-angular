'use strict';

describe('MovieListController', function() {

  var movieListController;

  beforeEach(module('movieList'));

  beforeEach(inject(function($componentController) {
    movieListController = $componentController('movieList');
  }));

  it('should create a `movies` model with 4 movies', function() {
    expect(movieListController.movies.length).toBe(6);
    expect(movieListController.movies[4].name).toBe("Tabaahi - The Destroyer");
  });

  it('should reserve an item when reserve for that item is called', function(){
    var secondMovie = movieListController.movies[1];
    movieListController.reserveItem(secondMovie);
    expect(secondMovie.reserved).toBe(true);
  });

  it('should unreserve an item when reserve for that item is called, and it is already reserved', function(){
    var secondMovie = movieListController.movies[1];
    movieListController.reserveItem(secondMovie);
    expect(secondMovie.reserved).toBe(true);
    movieListController.reserveItem(secondMovie);
    expect(secondMovie.reserved).toBe(false);
  });

});
