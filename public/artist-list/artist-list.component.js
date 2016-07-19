'use strict';

angular.
  module('artistList').
  component('artistList', {
    templateUrl: 'artist-list/artist-list.template.html',
    controller: ['$http', '$cookies',
      function ArtistListController($http, $cookies) {

        var hasCookie = !!$cookies.get('fa.tomadoman.com');
        this.artists = undefined;

        this.searchForMusic = function () {
          var self = this;
          $http.post('music/artist', { artist: this.query }).then(function (response) {
            self.artists = response.data.items;
          });
        };
      }]
  });