/**
 * http://usejsdoc.org/
 */

(function() {

	var pmMod = angular.module('pm', [ 'ngRoute' ]);

	pmMod.config(function($routeProvider) {

		$routeProvider
		.when('/', {templateUrl: "templates/pm-home.html"})
		.when('/view-all', {templateUrl: "templates/pm-grid.html",controller: "ViewAllController"})
		.when('/add-new', {templateUrl: "templates/pm-product-form.html",controller: "AddNewController"})
		.when('/edit-product/:pid', {templateUrl: "templates/pm-product-form.html",controller: "ViewAndUpdateController"})
		.when('/view-product/:pid', {templateUrl: "templates/pm-product-view.html",controller: "ViewAndUpdateController"});
		
		$routeProvider.otherwise({redirectTo:'/'});
		
	});
	
	//------------------------------------------------------
	
	
	pmMod.controller('ViewAllController', function($scope,pmService,$route) {
		
		pmService.loadAll()
		.then(function(items){
			$scope.products=items;
		});
		
		$scope.remove=function(id){
			pmService.remove(id)
			.then(function(){
				$route.reload();
			});
		};
		
	});
	

	pmMod.controller('AddNewController', function($scope,pmService,$location) {
		$scope.product={};
		$scope.save=function(){
			// validate..
			pmService.save($scope.product)
			.then(function(item){
				//console.log('New product saved...');
				//console.dir(item);
				$scope.product={};
				$location.path('view-all');
			});
		};
	});
	
	
	pmMod.controller('ViewAndUpdateController', function($scope,pmService,$location,$routeParams) {
		
		if($routeParams.pid){
			pmService.load($routeParams.pid)
			.then(function(item){
				$scope.product=item;
			});
		}
		
		$scope.save=function(){
			// validate..
			pmService.update($scope.product)
			.then(function(item){
				//console.log('New product saved...');
				//console.dir(item);
				$scope.product={};
				$location.path('view-all');
			});
		};
	});
	
	//------------------------------------------------------
	
	
	pmMod.factory('pmService',function($q,$http){
		var url="http://localhost:3000/api/products";
		var service={
				loadAll:function(){
					var defer=$q.defer();
					$http.get(url)
					.then(function(resp) {
						defer.resolve(resp.data);
					});
					return defer.promise;
				},
				load:function(id){
					var defer=$q.defer();
					$http.get(url+"/"+id)
					.then(function(resp) {
						defer.resolve(resp.data);
					});
					return defer.promise;
				},
				save:function(newProduct){
					var defer=$q.defer();
					newProduct.make=Date.now();
					$http.post(url,newProduct)
					.then(function(resp) {
						defer.resolve(resp.data);
					});
					return defer.promise;
				},
				update:function(product){
					var defer=$q.defer();
					$http.put(url,product)
					.then(function(resp) {
						defer.resolve(resp.data);
					});
					return defer.promise;
				},
				remove:function(id){
					var defer=$q.defer();
					$http['delete'](url+"/"+id)
					.then(function(resp) {
						defer.resolve(resp.data);
					});
					return defer.promise;
				},
		};
		return service;
	});
	
	
	

})();