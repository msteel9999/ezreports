'use strict';

angular.module('ezreportsApp').controller('LineChartCtrl', function ($scope) {
  $scope.dataset = [{ data: [[1,14], [2,15], [3,18], [4,16], [5,19], [6,17], [7,15], [8,16], [9,20], [10,16], [11,18]] }];
  $scope.options = {
    series: {
      lines: {
        show: true,
        lineWidth: 1,
        fill: 0.25
      },

      color: 'rgba(255,255,255,0.7)',
      shadowSize: 0,
      points: {
        show: true
      }
    },

    yaxis: {
      min: 10,
      max: 22,
      tickColor: 'rgba(255,255,255,0.15)',
      tickDecimals: 0,
      font :{
        lineHeight: 13,
        style: "normal",
        color: "rgba(255,255,255,0.8)"
      },
      shadowSize: 0
    },
    xaxis: {
      tickColor: 'rgba(255,255,255,0)',
      tickDecimals: 0,
      font :{
        lineHeight: 13,
        style: "normal",
        color: "rgba(255,255,255,0.8)"
      }
    },
    grid: {
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,0.25)',
      labelMargin:10,
      hoverable: true,
      clickable: true,
      mouseActiveRadius:6
    },
    legend: {
      show: false
    }
  };
});
