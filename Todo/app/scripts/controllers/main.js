'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description # MainCtrl Controller of the todoApp
 */
angular.module('todoApp').controller('MainCtrl', function($scope,localStorageService,Todo) {

	//var todosInStore = localStorageService.get('todos');
	//$scope.todos = todosInStore || [];
	
	$scope.todos=Todo.query();

	$scope.addTodo = function() {
		//$scope.todos.push($scope.todo);
		var todo=new Todo();
		todo.title=$scope.todo;
		todo.$save(function(t){
			$scope.todos.push(t);
			$scope.todo = '';
		});
		
	};

	$scope.removeTodo = function(index,id) {
		//$scope.todos.splice(index, 1);
		Todo.remove({id:id})
		.$promise
		.then(function(){
			$scope.todos.splice(index, 1);
		});
	};
	
	$scope.$watch('todos', function () {
		 localStorageService.set('todos', $scope.todos);
	},true);

});
