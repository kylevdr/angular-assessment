angular.module('assessment').service('mainService', function($http) {

  this.getProducts = function() {
    return $http.get('http://practiceapi.devmounta.in/products');
  };

  this.getProduct = function(id) {
    console.log(id);
    return $http({
      method: 'GET',
      url: 'http://practiceapi.devmounta.in/products/' + id
    });
  }

});
