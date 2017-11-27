'use strict';

describe('Movie Rental Application', function() {

  beforeEach(function() {
    browser.get('index.html');
  });

  it("should display the list of movies", function(){
    var movieList = element.all(by.repeater('movie in $ctrl.movies'));
    expect(movieList.count()).toBe(6);

    var thirdMovieName = element(by.repeater('movie in $ctrl.movies').row(2).column('movie.name')).getText();
    expect(thirdMovieName).toEqual('The Godfather: Part II')
  });

});
