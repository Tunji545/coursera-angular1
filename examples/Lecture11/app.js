(function () {
  angular
    .module('MsgApp', [])

    .controller('MsgController', MsgController);

  MsgController.$inject = ['$scope', '$filter'];

  function MsgController($scope, $filter) {
    $scope.stateOfBeing = 'hungry';
    $scope.name = 'Yaakov';
    let info = 'Yaakov loves to eat healthy snacks at night';
    const upper = $filter('uppercase')(info);
    $scope.msg = upper;
    $scope.cost = 0.45;
    $scope.feedYaakov = function () {
      $scope.stateOfBeing = 'fed';
    };
  }
})();
