'use strict';

angular.
  module('authenticate').
  component('authenticate', {
    templateUrl: 'authenticate/authenticate.template.html',
    controller: ['$http', '$cookies',
      function AuthenticateController($http, $cookies) {

        this.token = $cookies.get('fa.tomadoman.com');
        this.hasCookie = !!this.token;

        this.signout = function () {
          $cookies.remove('fa.tomadoman.com');
          this.token = null;
          this.hasCookie = false;
        }
      }]
  });