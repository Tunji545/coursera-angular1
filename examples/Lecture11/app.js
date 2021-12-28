(function () {
  angular
    .module('MsgApp', [])

    .controller('MsgController', MsgController);

  MsgController.$inject = [$scope];

  function MsgController($scope) {
    $scope.stateOfBeing = 'hungry';

    $scope.feedYaakov = function () {
      $scope.stateOfBeing = 'fed';
    };
  }
})();
