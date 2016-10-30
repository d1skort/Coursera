(function() {
  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective);

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {

    this.getMatchedMenuItems = function(searchTerm) {
      return $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
      }).then(function(response) {
        var foundItems = [];
        var items = response['data']['menu_items'];
        for (var i = 0; i < items.length; ++i) {
          if (items[i]['description'].indexOf(searchTerm) !== -1) {
            foundItems.push(items[i]);
          }
        }
        return foundItems;
      });
    }
  };

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var ctrl = this;

    ctrl.loadItems = function() {
      if (this.searchTerm !== "") {
        MenuSearchService.getMatchedMenuItems(this.searchTerm).then(function(response) {
          ctrl.items = response;
        });
      } else {
        ctrl.items = [];
      }
    };

    ctrl.onRemove = function(index) {
      ctrl.items.splice(index, 1);
    };
  };

  function FoundItemsDirective() {
    return {
      restrict: 'E',
      scope: {
        'foundItems': '<',
        'onRemove': '&'
      },
      templateUrl: 'itemsList.html'
    };
  };

})();
