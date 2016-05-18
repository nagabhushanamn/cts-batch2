/**
 * http://usejsdoc.org/
 */

// using DOM API
// ---------------------
//document.addEventListener('DOMContentLoaded', function(e) {
//
//	console.log('DOM Ready');
//
//	var box = document.querySelector('.jumbotron');
//	var hideBtn = document.querySelector('.btn-danger');
//	var showBtn = document.querySelector('.btn-success');
//	var nextBtn = document.querySelector('.next');
//
//	hideBtn.addEventListener('click', function() {
//		document.querySelector('.jumbotron').style.display = 'none';
//	});
//
//	showBtn.addEventListener('click', function() {
//		document.querySelector('.jumbotron').style.display = 'block';
//	});
//
//	
//	nextBtn.addEventListener('click', function() {
//
//		// using XHR API ( AJAX )
//
//		var xhr = new XMLHttpRequest();
//
//		xhr.open('GET', 'welcome.html', true);
//		xhr.send(null);
//
//		xhr.onreadystatechange = function() {
//			if (xhr.readyState === 4) {
//				document.querySelector('.jumbotron').innerHTML = xhr.responseText;
//			}
//		};
//
//	});
//});
//
//window.onload = function() {
//	console.log('window.onload');
//}



// using jQuery

$(document).ready(function(){
	
	var box=$('.jumbotron');
	var hideBtn=$('.btn-danger');
	var showBtn=$('.btn-success');
	var nextBtn=$('.next');
	
	hideBtn.click(function(e) {
		box.hide();
	});
	showBtn.click(function(e) {
		box.show();
	});
	
	nextBtn.click(function(e) {
		box.load('welcome.html');
	});
	
});







