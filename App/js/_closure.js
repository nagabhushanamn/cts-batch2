/**
 * http://usejsdoc.org/
 */

/*
 * A closure is a function having access to the parent scope,
 * even after the parent function has closed.
 * 
 * 
 *  where to use closure ?
 *  
 *  
 *  --> to abstract public behav of any module.
 *  --> to access to parent-scopes , when executing callback func asyc.
 * 
 */


//
//function tng() {
//
//	console.log("tng - start");
//
//	var notes = 'JS notes';
//
//	function learn() {
//		console.log('learning with ' + notes);
//	}
//
//	// learn();
//
//	console.log('tng - finished');
//
//	return learn;
//}
//
//var learnFunc = tng(); // execution context started..
//
//
//learnFunc();


//------------------------------------------------------------


// module - counter

//function init(){
//	
//	var count=0;  // private  ( encapsulated  )
//	
//	// public  ( abstracted )
//	return{
//		doCount:function(){
//			count++;
//		},
//		getCount:function(){
//			return count;
//		}
//	};
//	
//}
//
//var counter=init();


//-------------------------------------------

// pattern : IIFE or self executable func

var counter=(function(){
	
	var count=0;  // private  ( encapsulated  )
	
	// public  ( abstracted )
	return{
		doCount:function(){
			count++;
		},
		getCount:function(){
			return count;
		}
	};
	
	
})();



//---------------------------------------------

// use counter-module


//counter.doCount();
//counter.doCount();
//
//console.log(counter.getCount());

//-----------------------------------------------


//function teach(){
//	var name='Nag';
//	console.log('scheduling some work after 5s');
//	setTimeout(function() {
//		console.log("after 5s"+name);
//	}, 5000);
//	console.log('teach finished....');
//}
//
//teach();


//-----------------------------------------------










