const str1 = "Hello";
const str2 = "World";
const greeting = "greeting";
const separator = "separator";
const emphasis = "emphasis";
const name = "vincent";

const greet = str1 => (greet2 = str2 => `${str1}, ${str2}!`);

console.log(greet(str1)(str2));

// https://www.sitepoint.com/currying-in-functional-javascript/
var greetCurried = function(greeting) {
  return function(name) {
    console.log(greeting + ", " + name);
  };
};

var greetHello = greetCurried("Hello");

greetHello("Heidi");
greetHello("Eddie");
greetCurried("Hi there")("Howard");

var greetDeeplyCurried = function(greeting) {
  console.log(1);
  return function(separator) {
    console.log(2);
    return function(emphasis) {
      console.log(3);
      return function(name) {
        console.log(4);
        console.log(`${greeting} ${separator} ${name} ${emphasis}`);
      };
    };
  };
};

greetDeeplyCurried(greeting)(separator)(emphasis)(name);


var greetDeeplyCurried2 = function(greeting) {
    return function(separator) {
      return function(emphasis) {
        return function(name) {
          console.log(greeting + separator + name + emphasis);
        };
      };
    };
  };
  
  var greetAwkwardly = greetDeeplyCurried2("Hello")("...")("?");
  greetAwkwardly("Heidi");
  
  var sayHello = greetDeeplyCurried2("Hello")(", ");
  sayHello(".")("Heidi");
  
  var askHello = sayHello("?");
  askHello("Heidi");