const foodItem1 = [
  'Donught',
  'Yougut',
  'Cookies',
  'Peanuts',
  'Biscuits',
  'Pismol Bistil',
  'Candy',
  'Fishroll',
];

const foodItem2 = [
  {
    name: 'Cookies',
    quantity: 3,
  },
  {
    name: 'Burgar',
    quantity: 200,
  },
  {
    name: 'Meatpie',
    quantity: 40,
  },
  {
    name: 'Cheese',
    quantity: 100,
  },
];
(function () {
  'use strict';

  angular
    .module('ShoppingListApp', [])

    .controller('ShoppingListController', ShoppingListController);

  ShoppingListController.$inject = ['$scope'];

  function ShoppingListController($scope) {
    $scope.shoppingList1 = foodItem2;
    $scope.newItemName = '';
    $scope.newItemQuantity = null;
    $scope.addItem = function () {
      const item = {
        name: $scope.newItemName,
        quantity: $scope.newItemQuantity,
      };

      $scope.shoppingList1.push(item);
      ($scope.newItemName = ''), ($scope.newItemQuantity = null);
    };
  }
})();
