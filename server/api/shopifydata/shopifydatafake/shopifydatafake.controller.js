var fs = require('fs');
var fakeDataPath = "../../fakedata";
var path = require('path');

var readContent = function (path, res, callback) {
  fs.readFile(path, function (err, data) {
    if (err) return callback(err);

    var objects = JSON.parse(data);

    if(objects) {
      callback(null, objects["orders"], res);
      return;
    }

    callback(null, null, res);
  })
}

var getOrdersFromFile = function(res, callback){
  readContent(path.join(__dirname, fakeDataPath + '/orders.json'), res, callback); //The file is being read, but the count is being returned.
}

exports._getOrdersFromFile = getOrdersFromFile;

exports.fetchOrders = function(req, res) {
  console.log("fetching orders");

  return getOrdersFromFile(res, function(err, data, res) {
      res.json(data);
    }
  );
}
