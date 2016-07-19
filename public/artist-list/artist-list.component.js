'use strict';

angular.
  module('artistList').
  component('artistList', {
    templateUrl: 'artist-list/artist-list.template.html',
    controller: ['$http',
      function ArtistListController($http) {
        
        this.artists = {};

        this.searchForMusic = function () {
          var self = this;
          $http.post('music/artist', { artist: this.query }).then(function (response) {
            self.artists = response.data.items;
          });
        };
      }]
  });