"use strict";
//Type aliases
// interface postId = stringOrNumber
//Literal types
let myName;
// myName = "Aga"
let userName;
userName = 'Aga';
userName = 'Jacek';
//Function
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello');
logMsg(add(2, 3));
// logMsg(add('a', 3));
let subtract = function (c, d) {
    return c - d;
};
logMsg(subtract(10, 7));
function multiply(e, f) {
    return e * f;
}
logMsg(multiply(5, 5));
let multiply2 = (g, h) => {
    return g * h;
};
logMsg(multiply2(5, 4));
//optional params
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
//default params
const sumAll = (a, b, c = 3) => {
    return a + b + c;
};
logMsg(addAll(1, 2, 3));
logMsg(addAll(1, 2));
logMsg(sumAll(1, 2));
logMsg(sumAll(1, 2, 4));
const sumAll2 = (a = 10, b, c) => {
    return a + b + c;
};
logMsg(sumAll2(undefined, 2, 3));
//Rest params
const total = (a, ...nums) => {
    return (a +
        nums.reduce((acu, cur) => {
            return acu + cur;
        }, 0));
};
logMsg(total(1, 2, 3, 4, 5, 6));
//Never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let a = 1;
    while (true) {
        a++;
    }
};
const infinite2 = () => {
    let a = 1;
    while (true) {
        a++;
        if (a > 100)
            break;
    }
};
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (typeof value === 'number')
        return 'number';
    return createError('This should never happed!');
};
//custom type guard function
const isNumber = (value) => {
    return typeof value === 'number';
};
const numberOrString2 = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happed!');
};
