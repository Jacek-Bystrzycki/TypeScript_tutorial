type One = string;
type Two = string | number;
type Three = 'hello';

//convert to more or less specific
let a: One = 'hello';
let b = a as Two; //less specific
console.log(b);

let c = a as Three; //more specific
console.log(c);

//bracket syntax
let d = <One>'hello world';
let e = <string | number>'hello world';

const addOrConcat = (
  a: number,
  b: number,
  c: 'add' | 'concat'
): number | string => {
  if (c === 'add') return a + b;
  return '' + a + b;
};

let myVal: string = addOrConcat(1, 2, 'concat') as string;
//be carefull because TS see no problem with that but string is returned
let myVal1: number = addOrConcat(1, 2, 'concat') as number;
let myVal2: number = addOrConcat(1, 2, 'add') as number;

console.log(myVal);
console.log(myVal1);
console.log(myVal2);

// 10 as string
//double casting
10 as unknown as string;

//The DOM
const img = document.querySelector('img') as HTMLImageElement;
const img2 = document.querySelector('img')!;
const myImg = document.getElementById('img') as HTMLImageElement;
const myImg2 = document.getElementById('img')! as HTMLImageElement;
const myImg3 = <HTMLImageElement>document.getElementById('img');

img.src;
img2.src;
myImg.src;
myImg2.src;
myImg3.src;
