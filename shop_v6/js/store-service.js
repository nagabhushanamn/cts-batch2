/**
 * http://usejsdoc.org/
 */

(function() {

	var serviceModue = angular.module('store-service', []);

	// services
	serviceModue.factory('itemsService', function($q, $http) {

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

})();