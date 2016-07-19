var express = require('express');
var queryString = require('querystring');
var unirest = require('unirest');

var config = {
  searchEndpoint: "https://api.spotify.com/v1/search"
};

var router = express.Router();

router.post('/artist', function (req, res) {

  var data = {
    q: req.body.artist,
    type: "artist"
  };

  var uri = config.searchEndpoint + "?" + queryString.stringify(data);

  unirest.get(uri)
    .end(function (response) {
      if (response.code === 200) {
        res.status(200).send(response.body.artists);
      } else {
        res.status(response.code).end();
      }
    });
});

module.exports = router;