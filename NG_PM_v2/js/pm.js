/**
 * http://usejsdoc.org/
 */

(function() {

	var pmMod = angular.module('pm', ['ui.router','ui.grid']);

	pmMod.config(function($stateProvider,$urlRouterProvider) {

		$urlRouterProvider.otherwise("/");
		
		$stateProvider
		.state('home', {
			url : "/",
			templateUrl : "templates/pm-home.html"
		}).state('all', {
			url : "/view-all",
			resolve:{
				prop1:function(){
					//...
					return "something";
				}
			},
			templateUrl : "templates/pm-grid.html",
			controller : 'ViewAllController'
			
			
		}).state('new', {
			url : "/add-new",
			templateUrl : "templates/pm-product-form.html",
			controller : 'AddNewController'
		})
		.state('all.edit', {
			url : "/edit-product/:pid",
			views:{
				view1:{
					templateUrl : "templates/pm-product-view.html",
					controller : 'ViewAndUpdateController'
				},
				view2:{
					templateUrl : "templates/pm-product-form.html",
					controller : 'ViewAndUpdateController'
				}
			}
			
		}).state('all.view', {
			url : "/view-product/:pid",
			views:{
				view1:{
					templateUrl : "templates/pm-product-view.html",
					controller : 'ViewAndUpdateController'
				}
			}
		});
		
	});
	
	//------------------------------------------------------
	
	
	pmMod.controller('ViewAllController', function($scope,pmService,$state,prop1) {
		
		console.log(prop1);
		
		pmService.loadAll()
		.then(function(items){
			$scope.products=items;
		});
		
		$scope.remove=function(id){
			pmService.remove(id)
			.then(function(){
				$state.reload();
			});
		};
		
	});
	

	pmMod.controller('AddNewController', function($scope,pmService,$state) {
		$scope.product={};
		$scope.save=function(){
			// validate..
			pmService.save($scope.product)
			.then(function(item){
				//console.log('New product saved...');
				//console.dir(item);
				$scope.product={};
				$state.go('all');
			});
		};
	});
	
	
	pmMod.controller('ViewAndUpdateController', function($scope,pmService,$location,$stateParams) {
		
		if($stateParams.pid){
			pmService.load($stateParams.pid)
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