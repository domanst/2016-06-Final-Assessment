'use strict';

angular.
  module('logged').
  component('logged', {
    templateUrl: 'logged/logged.template.html',
    controller: ['$routeParams', '$cookies', 
      function LoggedController($routeParams, $cookies) {
        this.token = $routeParams.token;
        $cookies.put('fa.tomadoman.com', $routeParams.token);
      }]
  });