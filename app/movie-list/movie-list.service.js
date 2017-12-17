'use strict';

angular.
  module('movieList').
  factory('movieListService', function($http) {
   return {
     getMovies: function() {
       return $http.get('https://movie-rental-51a59.firebaseio.com/movies.json').then(function(result) {
         return result.data;
       });
     }
   }
});
