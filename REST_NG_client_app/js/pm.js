/**
 * http://usejsdoc.org/
 */

(function() {

	var pmMod = angular.module('pm', [ 'ui.router', 'ngResource', 'ui.grid' ]);

	pmMod.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/");

		$stateProvider.state('home', {
			url : "/",
			templateUrl : "templates/pm-home.html"
		}).state('all', {
			url : "/view-all",
			templateUrl : "templates/pm-grid.html",
			controller : 'ViewAllController'
		}).state('new', {
			url : "/add-new",
			templateUrl : "templates/pm-product-form.html",
			controller : 'AddNewController'
		}).state('all.edit', {
			url : "/edit-product/:pid",
			views : {
				view1 : {
					templateUrl : "templates/pm-product-view.html",
					controller : 'ViewAndUpdateController'
				},
				view2 : {
					templateUrl : "templates/pm-product-form.html",
					controller : 'ViewAndUpdateController'
				}
			}

		}).state('all.view', {
			url : "/view-product/:pid",
			views : {
				view1 : {
					templateUrl : "templates/pm-product-view.html",
					controller : 'ViewAndUpdateController'
				}
			}
		});

	});

	// ------------------------------------------------------

	pmMod.factory('Product', function($resource) {
		var url = "http://localhost:3000/api/products/:id";
		var Product = $resource(url, {
			id : '@id'
		}, {
			'update' : {
				method : 'PUT'
			}
		});
		return Product;
	});

	// ------------------------------------------------------

	pmMod.controller('ViewAllController', function($scope, $state, Product) {

		$scope.products = Product.query();

		$scope.remove = function(pid) {
			Product.remove({
				id : pid
			}).$promise.then(function() {
				$state.reload();
			});
		};

	});

	pmMod.controller('AddNewController', function($scope, Product, $state) {
		$scope.product = {};
		$scope.save = function() {
			var $product = new Product(); // empty resource object
			angular.extend($product, $scope.product); // 
			$product.make = Date.now();
			$product.$save(function() {
				$state.go('all');
			});
		};
	});

	pmMod.controller('ViewAndUpdateController', function($scope, Product,$state, $stateParams) {
		$scope.product = Product.get({
			id : $stateParams.pid
		});
		$scope.save = function() {
			// Product.update($scope.product).$promise.then(function(){
			// $state.go('all');
			// });
			$scope.product.$update(function() {
				$state.go('all');
			});
		};
	});

})();