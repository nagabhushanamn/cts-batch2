/**
 * http://usejsdoc.org/
 */

// using DOM API
// ---------------------
document.addEventListener('DOMContentLoaded', function(e) {

	console.log('DOM Ready');

	var box = document.querySelector('.jumbotron');
	var hideBtn = document.querySelector('.btn-danger');
	var showBtn = document.querySelector('.btn-success');

	hideBtn.addEventListener('click', function() {
		document.querySelector('.jumbotron').style.display = 'none';
	});

	showBtn.addEventListener('click', function() {
		document.querySelector('.jumbotron').style.display = 'block';
	});

});

window.onload = function() {
	console.log('window.onload');
}
