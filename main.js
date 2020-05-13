/*
function a(){
  function b() {
    console.log(myVar);
  }
  var myVar = 2;
  b();
}

var myVar = 1;
a();
b();
*/


/*
var a = 1 + '2';
console.log(a); */

/* console.log(1 < 2 < 3);*/

/* Objects and the dot
var person = new Object();

person["firstname"] = "John";
person.surname = "Smith";

person.address = new Object();
person.address.street = "14 Cradock Rd";
person["address"]["suburb"] = "Steenberg";
person.address.city = "Cape Town";

console.log(person);

*/

// primative, objects and functions

/*
var person ={ firstname: "John", surname: "Doe"};
// Object literal 

var english = {};
var spanish = {};

english.greet = "Hello";
spanish.greet = "Hola";

console.log(spanish.greet);
*/

// A function is a special function that contains code
/*
function greeting(){
  console.log("Hello");
}

greeting.myName = "Chad";

console.log(greeting.myName);
*/

// function statement
/*
greet(); // looks at memory at its address

function greet(){
  console.log("hi");
}
*/

// Stores code in memory (Hoisting)

// function expression
/*
var anonymousGreet = function() {
  console.log("hi");
} // equal sign expression creates a function object

anonymousGreet(); // returns an object 

*/

function log(a) {
  a();
}

log(function test(){
  console.log("Hello func");
});
