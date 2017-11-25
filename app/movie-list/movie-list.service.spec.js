'use strict';

describe('movie list service', function(){
  var httpBackend;
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
    }
  ]

  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  beforeEach(module('movieList'));

  beforeEach(inject(function(_$httpBackend_, _movieListService_) {
    httpBackend = _$httpBackend_;
    httpBackend.expectGET('movies/movies.json').respond(stubMovieListData);
    movieListService = _movieListService_;
  }));

  afterEach(function () {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it("should return the list of movies", function(){
    var listOfMovies = movieListService.query();

    expect(listOfMovies).toEqual([]);

    httpBackend.flush();
    expect(listOfMovies).toEqual(stubMovieListData);
  });

});
