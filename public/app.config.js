'use strict';

angular.
  module('soundWishApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/artist', {
          template: '<artist-list></artist-list>'
        }).
        when('/artist/:id', {
          template: '<album-list></album-list>'
        }).
        when('/logged/:token', {
          template: '<logged></logged>'
        }).
        otherwise('/artist');
    }
  ]);