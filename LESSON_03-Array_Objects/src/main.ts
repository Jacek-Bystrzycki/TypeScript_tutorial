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
let bands: string[] = [];
bands.push('Hello');
// bands.unshift(42);

//Tuple
let myTuple: [string, number, boolean] = ['Jacek', 37, true];
let mixed = ['Aga', 38, false];
myTuple[1] = 39;
// myTuple[0] = true;

mixed = myTuple;
// myTuple = mixed

//OBJECTS
let myObj: object;
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

type Guitarist = {
  name: string;
  active?: boolean;
  albums: (string | number)[];
};
interface Guitarist2 {
  name?: string;
  active: boolean;
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: 'Jacek',
  // active: false,
  albums: ['First Album', 25],
};

let jb: Guitarist = {
  name: 'Aga',
  active: true,
  albums: ['Second Album', 37],
};

evh.active = false;
// jb.year = 40;

evh = jb;
console.log(evh);

const greetGuitarist = (guitarist: Guitarist): string => {
  return `Hello ${guitarist.name}!`;
};
console.log(greetGuitarist(jb));

let aga: Guitarist2 = {
  name: 'Aga',
  active: true,
  albums: ['Second Album', 37],
};

const greetGuitarist2 = (guitarist: Guitarist2): string => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}!`;
  }
  return 'Hello';
  // return `Hello ${guitarist.name?.toUpperCase()}!`;
};
console.log(greetGuitarist2(aga));

// ENUMS

enum Grade {
  U = 2,
  D = 4,
  C = 8,
  B,
  A,
}

console.log(Grade.U);
console.log(Grade.D);
console.log(Grade.C);
console.log(Grade.B);
console.log(Grade.A);
