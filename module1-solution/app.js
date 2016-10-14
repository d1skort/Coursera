(function () {
  angular.module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

    LunchCheckController.$inject = ["$scope"];
    function LunchCheckController($scope) {
      $scope.items = "";
      $scope.message = "";
      $scope.check = function() {
        if ($scope.items) {
          splited = $scope.items.split(", ");
          console.log(splited);
          if (splited.length <= 3) {
            $scope.message = "Enjoy!";
          } else {
            $scope.message = "Too much!";
          }
        } else {
          $scope.message = "Please enter data first";
        }
      };
    }
})();
