(function() {
  "use strict";

  angular.module("ShoppingListCheckOff", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  ToBuyController.$inject = ["ShoppingListCheckOffService"];
  function ToBuyController(ShoppingListCheckOffService) {
      this.items = ShoppingListCheckOffService.toBuy;
      
      this.buy = function(index) {
        ShoppingListCheckOffService.buy(index);
      };
  }

  AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    this.items = ShoppingListCheckOffService.bought;
  }

  function ShoppingListCheckOffService() {
    var service = this;

    service.toBuy = [
      {name: "cookies", quantity: 10},
      {name: "juice", quantity: 2},
      {name: "apple", quantity: 1},
      {name: "pineapple", quantity: 1},
      {name: "pen", quantity: 1}
    ];
    service.bought = [];

    service.buy = function(index) {
      service.bought.push(service.toBuy[index]);
      service.toBuy.splice(index, 1);
    };
  }
})();
