const utils = require('../helpers/utils');
const siteConfig = require('../config/site.config');
const rp = require('request-promise');

module.exports = {
    proxyHost: function (proxyTag) {
      return function (req, res, next) {
        req.api_host = utils.getProxyTarget(proxyTag, siteConfig);
        next();
      }
    },

    proxy: function(req, res) {
      const host = req.api_host;

      const options = {
          method: req.method,
          uri: host + req.url,
          headers: {
              "Content-Type": "application/json;charset=utf-8"
          },
          transform: function(body, res) {
              res.data = JSON.parse(body);
              return res;
          }
      };

      rp(options)
        .then(response => {
          res.send(response.data);
        }).catch(err => {
          if (!(err && err.statusCode)) {
            err = {
              statusCode: 504,
              error: 'Something went wrong'
            }
          }

          res.status(err.statusCode).send({
            status: 0,
            message: err.error
          });
        });
    }
}
