'use strict';

var express = require('express');

//TODO - use config to switch to real shop data
var controller = require('./shopifydatafake/shopifydatafake.controller.js');

var router = express.Router();

router.get('/orders', controller.fetchOrders);

module.exports = router;
