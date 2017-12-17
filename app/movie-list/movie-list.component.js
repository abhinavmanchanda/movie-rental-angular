'use strict';

angular.
  module('movieList').
  component('movieList', {
    templateUrl: 'app/movie-list/movie-list.template.html',
    controller: function MovieListController(movieListService) {
      var self = this;
      movieListService.getMovies().then(function(movieList){
        self.movies = movieList;

        self.reservedItemCount = function(){
          return self.movies.reduce(function(n, movie){
            return n + (movie.reserved ? 1 : 0);
          },0);
        };
      }, function() {
        self.failed = true;
        console.log("Sorry couldn't fetch movies");
      });
      self.reserveItem = function(currentMovie){
        currentMovie.reserved = !(currentMovie.reserved);
      };

    }
  });
