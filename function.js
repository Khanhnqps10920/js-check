/* common function */

// declare function
declareFunc();
function declareFunc() {
  console.log(arguments);
}
declareFunc("1", "2", "3");

// function expression
expressionFunc();
var expressionFunc = function () {
  console.log("expressionFunc");
};

expressionFunc();

// anonymous function
(function () {
  console.log("anonymous");
})();

/*
 - common function will have:
    - this
    - except anonymous function, DECLARE FUNCTION can access before declare (hoisting), expression function have to declare before use
    - arguments 
    - prototype
*/

/*------------------------------------------- */
/* arrow  function */

(() => {})();

const arrowFunction = () => {};
/*
- no this
- no argument object
- no prototype

this will be parent
*/

/* curry function */
// FUNCTION return a function
const multiply = (number) => {
  return (val) => {
    return val * number;
  };
};

const double = multiply(2);
console.log(double(10)); //20

const triple = multiply(3);
console.log(triple(10)); //30

/* high order function */
// take function as a param or return a function as a result
// map, filter, reduce is a high order function
