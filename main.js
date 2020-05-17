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

/*
function log(a) {
  a();
}

log(function test(){
  console.log("Hello func");
});

*/

// By value (Primitives)
/*
var a = 2;
var b;
b = a;

console.log("b ", b);
console.log("a ", a);
a = 3;

console.log("a ", a);
console.log("b ", b); 

*/

// By reference (Objects)
/* 

var c = { greeting: "hi" };
var d;

d = c;

console.log(d);

d.greeting = "hello";
console.log(c);

var func = function(Obj){
  Obj.greeting = "hola";
}

func(c);
*/

// this always goes back to global environment
/*
function a(){
  // console.log(this);
  var b = function(){
    // console.log(this);
    function c(){
      console.log(this);
    }
    c();
  }
  b();
}
a();
*/
/*
var a = {

  name: "Joe",
  log: function() {
    var self = this;
    self.name = "Joe2";
    console.log(this);
    var b = function(){
      self.name = "Joe3"
    }
    b();
  },
}
a.log();
console.log(this.name);
*/

// Arrays
/*
var arr = [1,
false ,
{
  name: "Joe",
  address: "1st Street"
},
function(name){
  console.log("Hello " + name);
 },
 "The String"
];

arr[3](arr[2].name);
*/
/*
var details = function(firstname, surname, ...other){
  if(arguments.length === 0){
    console.log("There are no parameters!");
  }
  console.log(firstname);
  console.log(surname);
  console.log(arguments);
  console.log("------------");
}

details();
details("Joe");
details("Joe", "Mama");
details("Joe", "Mama", 17);
*/

/*
function greet(firstname, surname, language){
  language = language || "en";
  if(language === "en"){
    console.log("Hello " + firstname);
  } else if(language === "es"){
    console.log("Hola "+ firstname);
  }
}
function greetEn(firstname, surname){
  greet("John", "Doe", "en");
}
function greetEs(firstname, surname){
  greet("Joe", "Mama");
}
greetEn();
greetEs();
*/

// syntax parsers semi colon automatic 
/*
function getPerson(){
  return {
    firstname: "Chad"
  }
}

console.log(getPerson());
*/

// function statement
/*
function greet(name){
  console.log('Hello ' + name);
}
greet('John');

// function expression

var greetFunc = function (name){
  console.log('Hello ' + name)
}

greetFunc('John');

// Immediately invoked function expression (IIFE)
var greeting = function (name){
  return "Hello " + name;
}('John');

console.log(greeting);

// Immediately invoked

3;

"I'm a string";

{
  name: "John"
};

// no errors

// anonymous function (Immediately invoked)

console.log((function (name){
  return "Hello " + name;
})('John')); // adds a new execution context on the stack

// If theres a variable with the same name on global environment and we want to change it inside our new execution context
(function(global, name){
  global.name = name;
  return "Hello " + name;
})(window, 'John');
*/


// Closure 1 (Primitives anf functions always remain in memory (hanging))

function greet(whattosay){
  return function(name){
    console.log(whattosay + " " + name);
  }
}

var sayHi = greet("Hi");
sayHi("Chernell");