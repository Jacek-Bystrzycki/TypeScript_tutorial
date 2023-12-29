"use strict";
//ARRAYS
let stringArr = ['one', 'two', 'three'];
let guiters = ['Strat', 'Les Paul', 5150];
let mixedArr = ['EVH', true, 1876];
stringArr[0] = 'Jacek';
// stringArr.push(42)
stringArr.push('hey');
guiters[0] = 1984;
//  guiters[0]= true
// stringArr = guiters
guiters = stringArr;
mixedArr = guiters;
let test = [];
let bands = [];
bands.push('Hello');
// bands.unshift(42);
//Tuple
let myTuple = ['Jacek', 37, true];
let mixed = ['Aga', 38, false];
myTuple[1] = 39;
// myTuple[0] = true;
mixed = myTuple;
// myTuple = mixed
//OBJECTS
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Jacek',
    prop2: true,
};
// exampleObj.prop2=42
exampleObj.prop2 = false;
let evh = {
    name: 'Jacek',
    // active: false,
    albums: ['First Album', 25],
};
let jb = {
    name: 'Aga',
    active: true,
    albums: ['Second Album', 37],
};
evh.active = false;
// jb.year = 40;
evh = jb;
console.log(evh);
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}!`;
};
console.log(greetGuitarist(jb));
let aga = {
    name: 'Aga',
    active: true,
    albums: ['Second Album', 37],
};
const greetGuitarist2 = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return 'Hello';
    // return `Hello ${guitarist.name?.toUpperCase()}!`;
};
console.log(greetGuitarist2(aga));
// ENUMS
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 2] = "U";
    Grade[Grade["D"] = 4] = "D";
    Grade[Grade["C"] = 8] = "C";
    Grade[Grade["B"] = 9] = "B";
    Grade[Grade["A"] = 10] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
console.log(Grade.D);
console.log(Grade.C);
console.log(Grade.B);
console.log(Grade.A);
