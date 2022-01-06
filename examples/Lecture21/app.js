(function () {
  'use strict';

  angular
    .module('ControllerAsApp', [])
    .controller('ShoppingListController1', ShoppingListController1)
    .controller('ShoppingListController2', ShoppingListController2)
    .factory('ShoppingListFactory', ShoppingListFactory);

  ShoppingListController1.$inject = ['ShoppingListFactory'];
  function ShoppingListController1(ShoppingListFactory) {
    const list1 = this;
    const ShoppingList = ShoppingListFactory();

    list1.items = ShoppingList.getItem();

    list1.itemName = '';
    list1.itemQuantity = null;

    list1.addItem = function () {
      ShoppingList.addItem(list1.itemName, list1.itemQuantity);
    };

    list1.removeItem = function (itemIndex) {
      ShoppingList.removeItem(itemIndex);
    };
  }

  ShoppingListController2.$inject = ['ShoppingListFactory'];
  function ShoppingListController2(ShoppingListFactory) {
    const list2 = this;
    list2.itemName = '';
    list2.itemQuantity = null;

    const ShoppingList = ShoppingListFactory(3);
    list2.items = ShoppingList.getItem();

    list2.addItem = function () {
      try {
        ShoppingList.addItem(list2.itemName, list2.itemQuantity);
      } catch (error) {
        list2.errorMessage = error.message;
      }
    };

    list2.removeItem = function (itemIndex) {
      ShoppingList.removeItem(itemIndex);
    };
  }

  function ShoppingListService(maxItems) {
    const service = this;
    const items = [];

    service.addItem = function (itemName, itemQuantity) {
      if (
        maxItems === undefined ||
        (maxItems !== undefined && items.length < maxItems)
      ) {
        const item = {
          name: itemName,
          quantity: itemQuantity,
        };
        items.push(item);
      } else {
        throw new Error('Maximun Number ' + maxItems + ' is reached');
      }
    };

    service.removeItem = function (itemIndex) {
      items.splice(itemIndex, 1);
    };

    service.getItem = function () {
      return items;
    };
  }

  function ShoppingListFactory() {
    const factory = function (maxItems) {
      return new ShoppingListService(maxItems);
    };
    return factory;
  }
})();
