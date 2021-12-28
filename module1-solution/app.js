(function () {
  angular
    .module('LunchCheck', [])

    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = [$scope];

  function LunchCheckController($scope, $timeout) {
    $scope.lunch = '';
    $scope.check = function () {
      if (!$scope.lunch) {
        $scope.lunch = 'Please enter data first';
        $scope.effect = {
          border: '2px solid red',
          color: 'red',
        };
      } else {
        let items = $scope.lunch.split(' ');
        if (items.length === 0) {
          $scope.lunch = 'Please enter data first';
          $scope.effect = {
            border: '2px solid red',
            color: 'red',
          };
        } else if (items.length >= 1 && items.length < 4) {
          $scope.lunch = 'Enjoy!';
          $scope.effect = {
            border: '2px solid green',
            color: 'green',
          };
        } else {
          $scope.lunch = 'Too much!';
          $scope.effect = {
            border: '2px solid green',
            color: 'green',
          };
        }
      }
      $timeout(() => {
        $scope.lunch = '';
        $scope.effect = {};
      }, 3000);
    };
  }
})();
