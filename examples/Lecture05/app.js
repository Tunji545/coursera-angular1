(function () {
  'use strict';

  angular
    .module('CountertApp', [])
    .controller('CounterController', CounterController);
  CounterController.$inject = ['$scope', '$timeout'];

  function CounterController($scope, $timeout) {
    $scope.counter = 0;

    $scope.upCounter = function () {
      $timeout(function () {
        $scope.counter++;
        console.log('counter increamented');
      }, 2000);
    };
  }
})();
