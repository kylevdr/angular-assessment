angular.module('assessment').controller('mainCtrl', function($scope, mainService, $stateParams) {

  $scope.getProducts = function() {
    mainService.getProducts().then(function(result) {
      $scope.products = result.data;
    });
  }();

  $scope.getProduct = function() {
    mainService.getProduct($stateParams.id).then(function(result) {
      $scope.product = result.data;
      console.dir($scope.product);
    });
  };

  if ($stateParams.id) {
    $scope.getProduct();
  }

});
