"use strict";
//convert to more or less specific
let a = 'hello';
let b = a; //less specific
console.log(b);
let c = a; //more specific
console.log(c);
//bracket syntax
let d = 'hello world';
let e = 'hello world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(1, 2, 'concat');
//be carefull because TS see no problem with that but string is returned
let myVal1 = addOrConcat(1, 2, 'concat');
let myVal2 = addOrConcat(1, 2, 'add');
console.log(myVal);
console.log(myVal1);
console.log(myVal2);
// 10 as string
//double casting
10;
//The DOM
const img = document.querySelector('img');
const img2 = document.querySelector('img');
const myImg = document.getElementById('img');
const myImg2 = document.getElementById('img');
const myImg3 = document.getElementById('img');
img.src;
img2.src;
myImg.src;
myImg2.src;
myImg3.src;
