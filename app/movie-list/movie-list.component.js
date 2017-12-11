'use strict';

angular.
  module('movieList').
  component('movieList', {
    templateUrl: 'app/movie-list/movie-list.template.html',
    controller: function MovieListController() {
      var self = this;
      self.movies = [
              {
                "name": "The Shawshank Redemption",
                "imageUrl": "app/movies/shawshankredemption.jpg",
                "snippet": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
              }, {
                "name": "The Godfather",
                "imageUrl": "app/movies/godfather.jpg",
                "snippet": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
              }, {
                "name": "The Godfather: Part II",
                "imageUrl": "app/movies/godfather2.jpg",
                "snippet": "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate."
              },
              {
                "name": "Gunda",
                "imageUrl": "app/movies/gunda.jpg",
                "snippet": "Highest rated movie of all time."
              }, {
                "name": "Tabaahi - The Destroyer",
                "imageUrl": "app/movies/tabaahithedestroyer.jpg",
                "snippet": "Don't awaken his dark side."
              }, {
                "name": "Disco Dancer",
                "imageUrl": "app/movies/discodancer.jpg",
                "snippet": "Too cool for school."
              }
      ];
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
