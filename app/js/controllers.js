'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('ProductsCtrl', ['$scope', 'Basket', 'Product',  function($scope,Basket, Product) {
  
		//$http.get('products/products.json').success(function(data) {
			//$scope.products = data;
		//});
		$scope.products = Product.query();

		$scope.basket = Basket;
		
  }])
  
  .controller('BasketCtrl', ['$scope', 'Basket', 'Checkout', function($scope, Basket, Checkout) {
		$scope.basket = Basket.items();
		$scope.basketUtility = Basket;
		
		$scope.$watch('basket', function() {
			var basketTotal = 0;
    
			$scope.basket.forEach(function(item) {
				basketTotal += item.total();
			});
    
			$scope.basketTotal = basketTotal;
		}, true);
		
		var post_link = "<MY LINK>";
		//http post here
  }]);