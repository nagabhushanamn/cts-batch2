/**
 * http://usejsdoc.org/
 */

// ------------------------------------------
// why we need 'this' keyword?
// var person = {
// personName : "Nag",
// sayName : function() {
// console.log('im ' + this.personName);
// }
// };
//
//
// //person.sayName(); //
//
// var p=person;
// person={personName:'Ria'};
//
// p.sayName();
// ------------------------------------------
// var a=12;
// a=undefined;
//
// console.log('value-'+a);
// var a=12;
// console.log('value-'+a);
// ------------------------------------------

// var a=12; // global-scope
//
// function f1(){
// //var a;
// console.log(a);
// var a=13;
// }
//
// f1(); // create child-execution context - child-scope
// -------------------------------------------------------
//
// function sayNameForAll(){
// console.log('im '+this.name);
// }
//
//
// //var p1={name:'Nag',sayName:function(){console.log('im '+this.name)}};
// //var p2={name:'Ria',sayName:function(){console.log('im '+this.name)}};
//
// var p1={name:'Nag',sayName:sayNameForAll};
// var p2={name:'Ria',sayName:sayNameForAll};
//
//
// sayNameForAll(); // im "" // execution-context on global -->
// function-invocation ( this --> global-obj )
// p1.sayName(); // im Nag // execution-context on p1 --> method-invocation (
// this --> obj , who initiated EC )
// p2.sayName(); // im Ria // execution-context on p2
// -----------------------------------------------------------

// person(s)
var p1 = {
	name : 'Nag'
};
var p2 = {
	name : 'Ria'
};

// third-party utility obj
var greet = {
	sayName : function(message, from) {
		console.log(message + ' im ' + this.name + " - " + from);
	}
};

// dynamic func binding

// greet.sayName();

// a.eager invocation

// greet.sayName.call(p1,"Hello","Bangalore"); // dynamic func-binding
// invocation ( this --> arg-obj )
// greet.sayName.call(p2,"Hi","Chennai");

// greet.sayName.apply(p1,["Hello","Bangalore"]); // dynamic func-binding
// invocation ( this --> arg-obj )
// greet.sayName.apply(p2,["Hi","Chennai"]);

// b. lazy invocation

// var newF=greet.sayName.bind(p2,"Hi","Chennai");
//
// // on greet-event in p2
// newF();
//

// -----------------------------------------------------------

// i need 1000 similar person objs now...

// way-1

// var p1={name:'Nag'};
// //.//..//..

// way-2 : using constructor-function ( class )

// function Person(name,age){
// this.name=name;
// this.age=age;
// this.sayName=function(){
// console.log('im '+this.name);
// };
// }
//
//
// var p1=new Person('Nag',32); // constructor invocation ( this --> new-obj )
// var p2=new Person('Ria',1);
//
//
// p1.sayName();
// p2.sayName();

// ---------------------------------------------------------

// in JS , we can invoke func kin 4 ways

/*
 * 1. function invocation ( this --> global ) 2. method invocation ( this -->
 * obj , who initiate EC ) 3. dynamic func-binding invocation ( this --> arg-obj )
 * 4. constructor invocation ( this ---> new-obj )
 * 
 * 
 */

// --------------------------------------------------------

// Quiz- 1
// function Person(name, age) {
// this.name = name;
// this.age = age;
// this.sayName = function() {
// console.log('im ' + this.name);
// };
// }
//
// //Person();
// var p=new Person('name',0);

// --------------------------------------------------------

// Quiz- 2
// global context-0

function init() {

	var trainer = {
		trName : 'Nag',
		doTeach : function() {
			
			console.log(this.trName + " teaching JS"); // Nag ...
			
			var self = this;
			
			function learn() {
				console.log(this.name + ' learning JS from ' + self.trName); // ...
			}

			// learn(); // window.learn(); context-3

			var emp = {
				name : 'cts'
			};

			learn.call(emp); // context-3

		}
	};

	trainer.doTeach(); // context-2

}

init(); // window.init(); // context-1

