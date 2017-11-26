'use strict';

angular.
  module('movieList').
  component('movieList', {
    templateUrl: 'movie-list/movie-list.template.html',
    controller: function MovieListController(movieListService) {
      this.movies = movieListService.query();
    }
  });
