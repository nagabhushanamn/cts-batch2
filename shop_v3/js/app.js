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
		        ],
        reviews:[
		         {stars:5,author:'nag@gmail.com',comment:'good ...'},
		         {stars:3,author:'indu@gmail.com',comment:'bad ...'}
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
		        ],
		reviews:[
		         {stars:5,author:'nag@gmail.com',comment:'good ...'},
		         {stars:3,author:'indu@gmail.com',comment:'bad ...'}
		         ]        
	} ];
	// --------------------------------------------

	// NG - controller
	
	storeModule.controller('StoreController', function($scope,$filter) {
		console.log($filter('uppercase')('nag'));
		console.log($filter('priceDiscount')(1000,100));
		$scope.items=$filter('orderBy')(items,'price',true);
	});
	
	storeModule.controller('TabsController',function($scope){
		$scope.tab=1;  //  ng-init="tab=1"
		$scope.changeTab=function(tabIndex){
			$scope.tab=tabIndex;
		};
		$scope.isTabSelected=function(tabIndex){
			return $scope.tab===tabIndex;
		};
	});
	
	storeModule.controller('ReviewFormController', function($scope) {
		$scope.newReview={author:'nag@gmail.com'};
		$scope.addNewReview=function(product){
			// send review-form data with product's ID to server-side programs  ( we'll lean in future session )
			
			product.reviews.push($scope.newReview); // will add locally
			$scope.newReview={author:'nag@gmail.com'};
		};
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