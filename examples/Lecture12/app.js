(function () {
  'use strict';

  angular
    .module('MsgApp', [])
    .controller('MsgController', MsgController)
    .filter('love', LovesFilter)
    .filter('truth', Truth);

  MsgController.$inject = ['$scope', '$filter', 'loveFilter'];
  function MsgController($scope, $filter, loveFilter) {
    $scope.name = 'Yaakov';
    $scope.stateOfBeing = 'hungry';
    $scope.cookieCost = 0.45;

    $scope.sayMessage = function () {
      var msg = 'Yaakov likes to eat healthy snacks at night!';
      var output = $filter('uppercase')(msg);
      return output;
    };

    $scope.sayLoveMessage = function () {
      var msg = 'Yaakov likes to eat healthy snacks at night!';
      msg = loveFilter(msg);
      return msg;
    };

    $scope.feedYaakov = function () {
      $scope.stateOfBeing = 'fed';
    };
  }

  function LovesFilter() {
    return function (input) {
      input = input || '';
      input = input.replace('likes', 'loves');
      return input;
    };
  }

  function Truth() {
    return function (input, target, replace) {
      input = input || '';
      input = input.replace(target, replace);
      return input;
    };
  }
})();
