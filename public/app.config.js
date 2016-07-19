'use strict';

angular.
  module('soundWishApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/authenticate', {
          template: '<authenticate></authenticate>'
        }).
        otherwise('/authenticate');
    }
  ]);