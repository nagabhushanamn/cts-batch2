/**
 * http://usejsdoc.org/
 */

module.exports = function(app) {

	var User = app.models.User;
	var Role = app.models.Role;

	User.create([ {
		username : 'nag',
		email : 'nag@gmail.com',
		password : 'opensesame'
	} ], function(err, users) {

		Role.create({
			name : 'member'
		}, function(err, role) {
			// Make nag an member
			role.principals.create({
				principalType : 'MEMBER',
				principalId : users[0].id
			}, function(err, principal) {
			});
		});
	});
};