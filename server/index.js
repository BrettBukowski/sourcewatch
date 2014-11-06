"use strict";

var request = require('request');
var queryString = require('querystring');

module.exports = function (app, options) {
  app.use('/redirect', function (req, res, next) {
    if (req.query.state === 'STATE' && req.query.code) {
        request.post('https://github.com/login/oauth/access_token', {
          form: {
            client_id: 'c9dd00604e926b24dc9c',
            client_secret: 'X',
            code: req.query.code,
            redirect_uri: 'http://localhost:4200/redirect'
          }
        }, function (err, httpResponse) {
          if (err) {
              throw err;
          }

          var response = httpResponse.toJSON(),
              payload;

          if (response.statusCode === 200) {
            payload = queryString.parse(response.body);
            // Torii is hard-coded to look for a 'code' url param.
            res.redirect('/redirect?code=' + payload.access_token);
          }
        });
    }
    else {
      next();
    }
  });
};
