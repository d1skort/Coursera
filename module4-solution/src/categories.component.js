(function() {
  angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'templates/categories.component.html',
    bindings: {
      'categories': '<'
    }
  });
})();
