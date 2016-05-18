/**
 * http://usejsdoc.org/
 */

(function() {

	var storeModule = angular.module('store', []);

	// ...

	// --------------------------------------------

	// Model ( load from server )

	var item = {
		name : 'Laptop',
		price : 198000,
		description : 'New Mac Pro'
	};

	// --------------------------------------------

	// with plain-js

	// document.querySelector('h3').innerHTML=item.name;
	// document.querySelector('h4').innerHTML=item.price;
	// document.querySelector('p').innerHTML=item.description;
	//	

	// --------------------------------------------

	// with jQuery
	//	
	// $(function(){
	// $('h3').text(item.name);
	// $('h4').text(item.price);
	// $('p').text(item.description);
	// });

	// --------------------------------------------

	// NG - controller

	storeModule.controller('StoreController', function() {
		// load model ( data ) from server
		this.product=item;
	});
	
	

})();