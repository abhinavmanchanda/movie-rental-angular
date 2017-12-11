'use strict';

describe('MovieListController', function() {

  var movieListController;
  var movieListService;

  beforeEach(module('movieList'));

  beforeEach(inject(function($componentController) {
    var stubMovieListData = [
      {
        name: 'Gunda',
        snippet: 'Highest rated movie of all time.'
      }, {
        name: 'Tabaahi - The Destroyer',
        snippet: 'Don\'t awaken his dark side.'
      }, {
        name: 'Disco Dancer',
        snippet: 'Too cool for school.'
      },  {
        name: 'The Godfather: Part II',
        snippet: 'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.'
      }
    ]
    movieListService = {};
    movieListService.query = function(){
      return stubMovieListData;
    };
    movieListController = $componentController('movieList', {movieListService: movieListService});
  }));

  it('should create a `movies` model with 4 movies', function() {
    expect(movieListController.movies.length).toBe(4);
    expect(movieListController.movies[3].name).toBe("The Godfather: Part II");
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
    var fourthMovie = movieListController.movies[3];
    movieListController.toggleItemState(secondMovie);
    expect(movieListController.reservedItemCount()).toBe(1);
    movieListController.toggleItemState(fourthMovie);
    expect(movieListController.reservedItemCount()).toBe(2);
  })
});
