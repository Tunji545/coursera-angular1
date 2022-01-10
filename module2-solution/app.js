(function () {
  'use strict';

  angular
    .module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    const list1 = this;
    list1.items = ShoppingListCheckOffService.getItem();
    list1.name = '';
    list1.quantity = null;
    list1.message = 'Everything is bought!';

    list1.addItem = function () {
      ShoppingListCheckOffService.addItem(list1.name, list1.quantity);
    };
    list1.removeItem = function (itemIndex) {
      ShoppingListCheckOffService.removeItem(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    const list2 = this;
    list2.addItem2 = ShoppingListCheckOffService.addItem2();
    list2.message2 = 'Nothing bought yet';
  }

  function ShoppingListCheckOffService() {
    const service = this;
    const to_buy = [
      {
        name: 'chips',
        quantity: 7,
      },
      {
        name: 'cookies',
        quantity: 10,
      },
      {
        name: 'sugary drinks',
        quantity: 5,
      },
      {
        name: 'pepto bismol',
        quantity: 2,
      },
      {
        name: 'peanut',
        quantity: 40,
      },
    ];

    const bought = [];

    service.addItem = function (name, quantity) {
      const item = {
        name,
        quantity,
      };
      to_buy.push(item);
    };

    service.getItem = function () {
      return to_buy;
    };

    service.removeItem = function (index) {
      let i = 0;
      while (i < to_buy.length) {
        let item = to_buy[i];
        if (item === to_buy[index]) {
          to_buy.splice(index, 1);
          bought.push(item);
        } else i++;
      }
    };

    service.addItem2 = function () {
      return bought;
    };
  }
})();
