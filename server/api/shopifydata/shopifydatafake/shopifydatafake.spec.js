var should = require('should');
var shopifydatafakeController = require('./shopifydatafake.controller.js');

describe('GET /shopifydata/orders', function(){
  describe('fetchOrders', function(){
      it('should return the correct number of orders', function(){
        var returnedData = {};
        shopifydatafakeController._getOrdersFromFile(null, function(err, data, returnedData) {
          console.log("data:"+ data);
          returnedData = data;
          console.log(returnedData.length);
        });

        var actualNumberOfOrders = returnedData.length;
        var expectedNumberOfOrders = 2;

        console.log("orders:" + actualNumberOfOrders);
        actualNumberOfOrders.should.equal(expectedNumberOfOrders);
      });
  });
})

