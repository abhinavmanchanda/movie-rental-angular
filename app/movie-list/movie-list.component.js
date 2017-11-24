'use strict';

angular.
  module('movieList').
  component('movieList', {
    templateUrl: 'movie-list/movie-list.template.html',
    controller: function MovieListController() {
      this.movies = [
        {
          name: 'The Shawshank Redemption',
          snippet: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'
        }, {
          name: 'The Godfather',
          snippet: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.'
        }, {
          name: 'The Godfather: Part II',
          snippet: 'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.'
        }
      ];
    }
  });
