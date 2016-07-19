'use strict';

angular.
  module('logged').
  component('logged', {
    // templateUrl: 'logged/logged.template.html',
    controller: ['$routeParams', '$cookies', '$location',
      function LoggedController($routeParams, $cookies, $location) {
        this.token = $routeParams.token;
        $cookies.put('fa.tomadoman.com', $routeParams.token);
        $location.path('/artist-list');
      }]
  });