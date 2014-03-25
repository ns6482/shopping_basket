'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/products', {templateUrl: 'partials/products.html', controller: 'ProductsCtrl'});
  $routeProvider.when('/basket', {templateUrl: 'partials/basket.html', controller: 'BasketCtrl'});
  $routeProvider.otherwise({redirectTo: '/products'});
}]);
