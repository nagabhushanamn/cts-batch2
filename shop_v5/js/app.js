/**
 * http://usejsdoc.org/
 */

(function() {

	var storeModule = angular.module('store', []);

	// --------------------------------------------

	// services
	storeModule.factory('storeService', function($q, $http) {

		var url = "http://localhost:3000/api/products";

		var service = {
			loadAllItems : function() {

				var defer = $q.defer();

				var promise = $http.get(url);
				promise.then(function(resp) {
					defer.resolve(resp.data);
				}, function(reason) {
					defer.reject(reason);
				});

				return defer.promise;

			}
		};

		return service;

	});

	// --------------------------------------------

	// NG - controller

	storeModule.controller('StoreController', function($scope, storeService) {
		var promise = storeService.loadAllItems();
		promise.then(function(items) {
			$scope.items = items;
		}, function(reason) {
			$scope.message = reason;
		}, function(progress) {
			$scope.message = progress;
		});

	});

	storeModule.controller('TabsController', function($scope) {
		$scope.tab = 1; // ng-init="tab=1"
		$scope.changeTab = function(tabIndex) {
			$scope.tab = tabIndex;
		};
		$scope.isTabSelected = function(tabIndex) {
			return $scope.tab === tabIndex;
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

	// Directives

	storeModule.directive('productTitle', function() {
		return {
			restrict : "AE",
			replace : true,
			scope : false,
			templateUrl : "templates/product-title.html",
			link : function(scope, iElelement, iAttrs) {
				iElelement.find('#pic').on('mouseenter', function(e) {
					iElelement.find('#pic').css('background-color', '#def');
				});
				iElelement.find('#pic').on('mouseleave', function(e) {
					iElelement.find('#pic').css('background-color', '#fff');
				});
			}
		};
	});

	storeModule.directive('productTabs', function() {
		return {
			restrict : "AE",
			scope : true,
			templateUrl : "templates/product-tabs.html",
			controller : 'TabsController' // ng-controller="TabsController"
		};
	});
	storeModule.directive('productReviewForm', function() {
		return {
			restrict : "AE",
			scope : true,
			templateUrl : "templates/product-review-form.html",
			controller : function($scope) {
				$scope.newReview = {
					author : 'nag@gmail.com'
				};
				$scope.addNewReview = function(product) {
					// send review-form data with product's ID to server-side
					// programs ( we'll lean in future session )
					product.reviews.push($scope.newReview); // will add locally
					$scope.newReview = {
						author : 'nag@gmail.com'
					};
				};
			}
		};
	});

})();