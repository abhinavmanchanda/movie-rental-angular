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

  it('should reserve an item when reserve for that item is called', function(){
    var secondMovie = movieListController.movies[1];
    movieListController.toggleItemState(secondMovie);
    expect(secondMovie.reserved).toBe(true);
  });

  it('should unreserve an item when reserve for that item is called, and it is already reserved', function(){
    var secondMovie = movieListController.movies[1];
    movieListController.toggleItemState(secondMovie);
    expect(secondMovie.reserved).toBe(true);
    movieListController.toggleItemState(secondMovie);
    expect(secondMovie.reserved).toBe(false);
  });

  it('should display the count of selected movies', function(){
    var secondMovie = movieListController.movies[1];
    var fifthMovie = movieListController.movies[4];
    movieListController.toggleItemState(secondMovie);
    expect(movieListController.reservedItemCount()).toBe(1);
    movieListController.toggleItemState(fifthMovie);
    expect(movieListController.reservedItemCount()).toBe(2);
  })
});
