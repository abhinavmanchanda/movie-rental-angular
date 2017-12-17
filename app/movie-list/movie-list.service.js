'use strict';

angular.
  module('movieList').
  factory('movieListService', ['$resource',
    function($resource) {
      return $resource('app/movies/movies.json', {}, {
        query: {
          method: 'GET',
          isArray: true
        }
      });
    }
  ]);
