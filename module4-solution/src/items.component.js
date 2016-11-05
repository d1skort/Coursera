(function() {
  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'templates/items.component.html',
    bindings: {
      'items': '<'
    }
  });
})();
