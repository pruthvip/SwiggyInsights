const express = require('express');

const api = require('./api');
const proxyHost = api.proxyHost;
const proxy = api.proxy;

const router = express.Router();

const rp = require('request-promise');
const utils = require('../helpers/utils');
const siteConfig = require('../config/site.config');

router.post('/login', function(req, res) {
    console.log('Hey login called', req);
  const body = JSON.stringify({ 'authType': "Google", 'properties': req.body.properties });

  const restOneConfig = siteConfig.api.rest_one;
  const protocol = restOneConfig.https_enabled ? 'https': 'http';
  const apiHost = protocol + '://' + restOneConfig.host;

  const options = {
    method: 'POST',
    uri: apiHost + '/rest-one/login',
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: body,
    transform: function(body, res){
        res.data = JSON.parse(body);
        return res;
    }
  };

  rp(options)
    .then(response => {
      res.header({
        sessionId: response.headers.sessionid,
        userId: response.headers.userid
      });

      res.send(response.data);
    }).catch(err => {
    res.status(err.statusCode).send({status: 0, message: err.error});
  });
});


module.exports = router;

// Try this
// https://blog.javascripting.com/2015/01/17/dont-hassle-with-cors/
