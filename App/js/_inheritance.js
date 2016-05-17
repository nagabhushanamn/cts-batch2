/**
 * http://usejsdoc.org/
 */


// without inheritance

// function Person(name, age) {
//	this.name = name;
//	this.age = age;
//	this.sayName = function() {
//		console.log('im ' + this.name);
//	};
//}
//
//
// var p1=new Person('Nag',32); 
// var p2=new Person('Ria',1);
//


// with Inheritance

// function Person(name, age) {
//	this.name = name;
//	this.age = age;
//}
//
// Person.prototype.sayName = function() {
//	console.log('im ' + this.name);
//};
//
// var p1=new Person('Nag',32); 
// var p2=new Person('Ria',1);


//------------------------------------

//ES6


"use strict";

class Person{
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	sayName(){
		console.log('im '+this.name);
	}
}

//var p1=new Person('Nag',32); 
//var p2=new Person('Ria',1);



class Employee extends Person{
	doWork(){
		console.log(this.name+" working....");
	}
	sayName(){
		console.log('hey im'+this.name);
	}
}


var e1=new Employee('Nag',32);







