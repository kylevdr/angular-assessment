angular.module('assessment').directive('product', function() {

  return {
      restrict: 'AE',
      templateUrl: '../views/product-tmpl.html',
      scope: {
        productItem: "=",
      },
      link: function(scope, element, attributes) {
        scope.toggleHideImage = function() {
          scope.hideImage = !scope.hideImage;
        }
      }
  };

});
