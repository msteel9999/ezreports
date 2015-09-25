var fakeDataPath = "../../fakedata";

var getOrdersFromFile = function(){
  $.getJSON(fakeDataPath + '/orders.json', function(data) {
    return data;
  };
}

exports._getOrdersFromFile = getOrdersFromFile;
