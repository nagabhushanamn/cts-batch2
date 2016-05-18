/**
 * http://usejsdoc.org/
 */

function teach() {

	console.log('teach - start');
	var name = "Nag";  // this will move to heap

	setTimeout(function() {

		try {

			console.log('after timeout..');
			// throw new Error("oops");

			console.log(name + " back to session");

		} catch (e) {
			console.log('i caught ' + e.message);
		}

	}, 5000);

	console.log('teach end..');

}

teach();