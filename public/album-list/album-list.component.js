'use strict';

angular.
  module('albumList').
  component('albumList', {
    templateUrl: 'album-list/album-list.template.html',
    controller: ['$http','$routeParams',
      function ArtistListController($http, $routeParams) {
        
        this.artistid = $routeParams.id;

        // this.searchForMusic = function () {
        //   var self = this;
        //   $http.post('music/artist', { artist: this.query }).then(function (response) {
        //     self.artists = response.data.items;
        //   });
        // };
      }]
  });