/**
 * http://usejsdoc.org/
 */

(function() {

	var serviceModue = angular.module('store-service', [ 'ngResource' ]);

	// services
	serviceModue.factory('Product', function($resource) {
		var url = "http://localhost:3000/api/products/:id";
		return $resource(url, {
			id : "@id"
		});
	});
	serviceModue.factory('Review', function($resource) {
		var url = "http://localhost:3000/api/products/:id/reviews";
		return $resource(url, {
			id : "@id"
		});
	});

})();