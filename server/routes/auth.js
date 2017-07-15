const express = require('express');
const rp = require('request-promise');
const utils = require('../helpers/utils');
const siteConfig = require('../config/site.config');

const router = express.Router();

router.post('/login', function(req, res) {
    console.log('Hey login called', req);
  const permissions = req.app.locals.permissions;
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
