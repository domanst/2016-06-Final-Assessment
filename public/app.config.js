'use strict';

angular.
  module('soundWishApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/artists', {
          template: '<artist-list></artist-list>'
        }).
        when('/logged/:token', {
          template: '<logged></logged>'
        }).
        otherwise('/artists');
    }
  ]);