(function () {
  'use strict';

  angular
    .module('ShoppingListApp', [])
    .controller('ShoppingListController', ShoppingListController)
    .provider('ShoppingListService', ShoppingListServiceProvider)
    .config(config);

  config.$inject = ['ShoppingListServiceProvider'];
  function config(ShoppingListServiceProvider) {
    ShoppingListServiceProvider.defaults.maxItems = 2;
  }

  ShoppingListController.$inject = ['ShoppingListService'];
  function ShoppingListController(ShoppingListService) {
    const list = this;
    list.items = ShoppingListService.getItems();

    list.itemName = '';
    list.itemQuantity = null;

    list.addItem = function () {
      try {
        ShoppingListService.addItem(list.itemName, list.itemQuantity);
      } catch (error) {
        list.errorMessage = error.message;
      }
    };

    list.removeItem = function (itemIndex) {
      ShoppingListService.removeItem(itemIndex);
    };
  }

  function ShoppingListService(maxItems) {
    const service = this;
    const items = [];

    service.addItem = function (name, quantity) {
      if (
        maxItems === undefined ||
        (maxItems !== undefined && items.length < maxItems)
      ) {
        const item = {
          name,
          quantity,
        };
        items.push(item);
      } else {
        throw new Error('Max number ( ' + maxItems + ' ) is reached.');
      }
    };

    service.removeItem = function (itemIndex) {
      items.splice(itemIndex, 1);
    };

    service.getItems = function () {
      return items;
    };
  }

  function ShoppingListServiceProvider() {
    const provider = this;

    provider.defaults = {
      maxItems: 10,
    };

    provider.$get = function () {
      const ShoppingList = new ShoppingListService(provider.defaults.maxItems);
      return ShoppingList;
    };
  }
})();
