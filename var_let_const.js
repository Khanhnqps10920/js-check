/*
    var: hoisting, function scope
    - default value: undefined
    - access: can access before create

    const, let: hoisting but instead of hoisting to start of the file like var const, let hoisting to TDZ and will throw a reference error
    - access: can't access before create
    `let`: can reassign to another value
    `const`: can not reassign to another value
*/

console.log(a); //undefined

var a = 10;
console.log(a); //10

console.log(b); //reference error
const b = 10;

console.log(c); //reference error
let c = 10;

/*------------------ scope-------------------- */
// var is function scope - can access from start to the end of function
console.log(scopeFunc, "scopeFunc"); // error scopeFunc is not defined
function functionScope() {
  if (true) {
    console.log(scopeFunc); //undefined
  }
  console.log(scopeFunc); //undefined
  var scopeFunc = 10;

  if (true) {
    var varWithBlockScope = 10;
  }

  console.log(varWithBlockScope); // 10
}

functionScope();

// let, const is block scope - can access in a block after declare
if (true) {
  let blockScope = 10;
  console.log(blockScope); // 10

  if (true) {
    let blockInBlockScope = 10;
  }

  console.log(blockInBlockScope); //error;
}

console.log(blockScope); //error
