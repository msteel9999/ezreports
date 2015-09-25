angular.module('ezreportsApp', ['ngResource'])
  .factory('Orders', function($resource) {
    var orders = $resource('/api/data/orders', {
      get:    {method:'GET'}
    });

    return orders;
  })
