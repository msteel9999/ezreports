var should = require('should');
var shopifydatafakeController = require('./shopifydatafake.controller.js');

describe('GET /shopifydata/orders', function(){
  describe('_getOrdersFromFile', function(){
      it('should return the correct number of orders', function(){
        var actualNumberOfOrders = shopifydatafakeController._getOrdersFromFile();
        var expectedNumberOfOrders = 2;

        actualNumberOfOrders.should.equal(expectedNumberOfOrders);
      });
  });
})
