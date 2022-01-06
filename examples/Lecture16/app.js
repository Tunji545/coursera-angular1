(function () {
  'use strict';

  angular
    .module('BindingApp', [])
    .controller('BindingController', BindingController);

  BindingController.$inject = ['$scope'];
  function BindingController($scope) {
    // $scope.fullName = '';
    $scope.firstName = 'Yaakov';

    $scope.showNumberOfWatchers = function () {
      console.log('log # of washers: ', $scope.$$watchersCount);
    };

    $scope.setFullName = function () {
      $scope.fullName = $scope.firstName + ' ' + 'Chiakin';
    };

    $scope.logFirstName = function () {
      console.log('First Name: ', $scope.firstName);
    };

    $scope.logFullName = function () {
      console.log('full name: ', $scope.fullName);
    };
  }
})();
