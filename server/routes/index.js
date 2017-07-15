const express = require('express');
const router = express.Router();
const restOne = require('./rest-one');
const governance = require('./governance');
const governanceLogging = require('./governanceLogging');

router.use('/rest-one-proxy', restOne);
router.use('/governance', governance);
router.use('/governanceLogging', governanceLogging);

module.exports = router;
