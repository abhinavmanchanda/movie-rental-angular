'use strict';

angular.
  module('movieList').
  component('movieList', {
    templateUrl: 'app/movie-list/movie-list.template.html',
    controller: function MovieListController(movieListService) {
      var self = this;
      self.movies = movieListService.query();
      self.toggleItemState = function(currentMovie){
        currentMovie.reserved = !(currentMovie.reserved);
      };
      self.reservedItemCount = function(){
        return self.movies.reduce(function(n, movie){
          return n + (movie.reserved ? 1 : 0);
        },0);
      };
    }
  });
