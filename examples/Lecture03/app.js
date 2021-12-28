(function () {
  'use strict';

  angular.module('Msgapp', []).controller('MsgController', MsgController);

  MsgController.$inject = ['$scope'];
  function MsgController($scope) {
    $scope.name = 'Yaakov';
    $scope.sayHello = function () {
      return 'Yaakov love eating healthy snacks at night';
    };
  }
})();
