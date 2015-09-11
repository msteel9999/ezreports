'use strict';

var express = require('express');
var controller = require('./login.controller');

var router = express.Router();

//router.get('/', controller.test);
router.get('/auth', controller.authenticateShopify);
router.get('/auth/callback', [controller.authenticateShopifyCallbackCheckForErrors,
  controller.authenticateShopifyCallbackSuccess]);

//TODO - Add token fetch handler

module.exports = router;
