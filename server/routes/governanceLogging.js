const express = require('express');

const api = require('./api');
const proxyHost = api.proxyHost;
const proxy = api.proxy;

const router = express.Router();

router.all('/*', proxyHost('governanceLogging'), proxy);

module.exports = router;

// Try this
// https://blog.javascripting.com/2015/01/17/dont-hassle-with-cors/
