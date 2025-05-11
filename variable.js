/*
    variable have 2 type mutable and immutable
    mutable: object (array, oject)
    immutable: number, string, truethy, falsy, symbol, bigint
*/

// immutable
let numberVar = 1;
let stringVar = "abcd";
let nullVar = null;
let underfinedVar;
let symbolVar = Symbol();
let bigIntVar = BigInt();

// if want to change value of immutable var we have to reassign it a new value, can't change it directly
stringVar[0] = "A"; // error
stringVar = "Abcd"; // correct

// mutable
const objectVar = {
  string: "abcd",
};

objectVar.string = "Abcd";

const arrVar = [0, 1, 2, 3, 4, 5];
arrVar[0] = 1;

// object/arr storage as a reference
const objectVarB = objectVar;
objectVar2.name = "DCCD";

console.log(objectVar.name); // DCCD

const objectVarC = { ...objectVar };
objectVarC.name = "CCCC";

console.log(objectVar.name); // DCCD
