'use strict';

angular.module('ezreportsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('charts', {
        url: '/',
        templateUrl: 'app/charts/charts.html',
        controller: 'ChartsCtrl'
      });
  });




