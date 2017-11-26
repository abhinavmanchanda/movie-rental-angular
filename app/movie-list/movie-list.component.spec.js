'use strict';

describe('MovieListController', function() {

  var movieListController;
  var movieListService;
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

  beforeEach(module('movieList'));

  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  beforeEach(inject(function($componentController) {
    movieListService = {};
    movieListService.query = function(){
      return stubMovieListData;
    };
    movieListController = $componentController('movieList', {movieListService: movieListService});
  }));

  it('should create a `movies` model with 4 movies', function() {
    expect(movieListController.movies.length).toBe(4);
    expect(movieListController.movies[1].name).toBe("Tabaahi - The Destroyer");
  });

});
