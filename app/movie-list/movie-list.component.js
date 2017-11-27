'use strict';

angular.
  module('movieList').
  component('movieList', {
    templateUrl: 'movie-list/movie-list.template.html',
    controller: function MovieListController(movieListService) {
      var self = this;
      self.movies = movieListService.query();
      self.reserveItem = function(currentMovie){
        currentMovie.reserved = !(currentMovie.reserved);
      };
    }
  });
