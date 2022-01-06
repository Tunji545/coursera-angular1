(function () {
  'use strict';

  angular
    .module('ShoppingListApp', [])
    .controller('ShoppingListAddController', ShoppingListAddController)
    .controller('ShoppingListShowController', ShoppingListShowController)
    .service('ServiceListItem', ServiceListItem);

  ShoppingListAddController.$inject = ['ServiceListItem'];

  function ShoppingListAddController(ServiceListItem) {
    const itemAdder = this;

    itemAdder.itemName = '';
    itemAdder.itemQuantity = null;
    itemAdder.addItem = function () {
      ServiceListItem.addItem(itemAdder.itemName, itemAdder.itemQuantity);
    };
  }

  ShoppingListShowController.$inject = ['ServiceListItem'];

  function ShoppingListShowController(ServiceListItem) {
    const showList = this;
    showList.items = ServiceListItem.getItems();
    showList.removeItem = function (itemIndex) {
      ServiceListItem.removeItem(itemIndex);
    };
  }

  function ServiceListItem() {
    const service = this;

    const items = [];

    service.addItem = function (name, quantity) {
      const item = {
        name,
        quantity,
      };

      items.push(item);
    };

    service.getItems = function () {
      return items;
    };

    service.removeItem = function (itemIndex) {
      items.splice(itemIndex, 1);
    };
  }
})();
