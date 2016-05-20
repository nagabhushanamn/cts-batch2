/**
 * http://usejsdoc.org/
 */

(function() {

	var storeModule = angular.module('store', []);

	// --------------------------------------------
	// Model ( load from server ) ( data-model )
	var items = [ {
		name : 'Laptop',
		price : 198000, // number
		description : 'New Mac Pro',
		canBuy : true,
		notAvailable : false,
		date : Date.now(), // timestamp
		discount : 10000,
		images:[
		        {thumb:'images/Laptop.png',full:''},
		        {thumb:'images/Laptop.png',full:''}
		        ]
	}, {
		name : 'Mobile',
		price : 8000,
		description : 'New model',
		canBuy : true,
		notAvailable : false,
		date : Date.now(),
		images:[
		        {thumb:'images/Mobile.png',full:''},
		        {thumb:'images/Mobile.png',full:''}
		        ]
	} ];
	// --------------------------------------------

	// NG - controller
	storeModule.controller('StoreController', function($scope,$filter) {
		// $scope.product = item; // $scope --> ViewModel
		
		//$scope.items = items;
		
		console.log($filter('uppercase')('nag'));
		console.log($filter('priceDiscount')(1000,100));
		
		$scope.items=$filter('orderBy')(items,'price',true);
		
		
	});

	// --------------------------------------------

	// Filter
	storeModule.filter('priceDiscount', function() {
		return function(originalPrice, discount) {
			if (discount) {
				return originalPrice - discount;
			} else {
				return originalPrice - 1;
			}
		};
	});
	
	// --------------------------------------------


})();