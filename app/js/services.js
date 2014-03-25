'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.

  
var app = angular.module('myApp.services', ['ngResource']);

app.value('version', '0.1');

app.factory('Basket', function() {

	function Item() {
		this.total = function() {
		return (this.qty * this.unitPrice) || 0;
		}
	}

    var items = [];
    var myBasketService = {};

    myBasketService.addItem = function(pc, up) {
	
			
			var found = false;
			items.forEach(function loop(item, i) { 
				if (item.productCode == pc) {
					item.qty = item.qty+=1;
					found = true;
					loop.stop = true;			
				}						
			});
			
			if (found === false) {
				var item = new Item();
				item.productCode = pc;
				item.qty = 1;
				item.unitPrice = up; 
				
				items.push(item);
			}
			
		
    };
    myBasketService.removeItem = function(item) {
        var index = items.indexOf(item);
        items.splice(index, 1);
    };
    myBasketService.items = function() {
        return items;
    };
	myBasketService.increment = function(item) {
	}
	
    return myBasketService;
});

app.factory('Product', ['$resource',
function($resource){
	return $resource('products/products.json', {}, {
		query: {method:'GET', isArray:true}
});
}]);

app.factory('Checkout', ['$resource',
function($resource){
	return $resource('http://localhost:50520/api/checkout', {}, {
		checkout: {method:'Post'}
});
}]);


