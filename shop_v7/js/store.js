/**
 * http://usejsdoc.org/
 */

(function() {

	var storeModule = angular.module('store', [ 'store-service' ]);

	// --------------------------------------------

	// NG - controller

	storeModule.controller('StoreController', function($scope, Product,Review) {
		$scope.items = Product.query();
	});

	storeModule.controller('TabsController', function($scope,Review) {
		$scope.tab = 1; // ng-init="tab=1"
		$scope.changeTab = function(tabIndex,product) {
			$scope.tab = tabIndex;
			product.reviews=Review.query({id:product.id});
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
	storeModule.directive('productReviewForm', function(Review) {
		return {
			restrict : "AE",
			scope : true,
			templateUrl : "templates/product-review-form.html",
			controller : function($scope) {
				$scope.newReview = {
					author : 'nag@gmail.com'
				};
				$scope.addNewReview = function(product) {

					var $review = new Review();
					angular.extend($review, $scope.newReview);
					$review.id = product.id;
					$review.$save(function(review) {
						product.reviews.push(review); // will add locally
						$scope.newReview = {
							author : 'nag@gmail.com'
						};
					});

				};
			}
		};
	});

})();