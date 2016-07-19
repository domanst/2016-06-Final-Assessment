var express = require('express');
var queryString = require('querystring');
var unirest = require('unirest');

var router = express.Router();

var config = {
  client_id: 'dTEjbCA1ggIKvdKt0vVgTDJwvkcm02P3',
  client_secret: 'AL2AloxJYPAsAD31',
  redirect_uri: 'http://www.fa.com:8000/api/oauth',
  authorize_endpoint: 'https://developer.api.autodesk.com/authentication/v1/authorize',
  gettoken_endpoint: 'https://developer.api.autodesk.com/authentication/v1/gettoken',
};

router.get('/auth', function (req, res) {

  var query = {
    client_id: config.client_id,
    redirect_uri: config.redirect_uri,
    response_type: "code",
    scope: "data:read"
  };

  var authorizeUri = config.authorize_endpoint + '?' + queryString.stringify(query);
  res.redirect(authorizeUri);
});

router.get('/oauth', function (req, res) {

  var data = {
    client_id: config.client_id,
    client_secret: config.client_secret,
    redirect_uri: config.redirect_uri,
    grant_type: 'authorization_code',
    code: req.query.code
  };

  unirest.post(config.gettoken_endpoint)
    .headers({ 'Content-Type': 'application/x-www-form-urlencoded' })
    .send(queryString.stringify(data))
    .end(function (response) {
      var token = response.body.access_token;
      res.redirect('/#!/logged/' + token);
    });
});

module.exports = router;