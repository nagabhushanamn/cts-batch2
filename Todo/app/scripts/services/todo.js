/**
 * http://usejsdoc.org/
 */

angular.module('todoApp')
.factory('Todo',function($resource){
	var uri="http://0.0.0.0:3000/api/Todos/:id";
	return $resource(uri,{id:'@id'});
});