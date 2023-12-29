//Type aliases

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type userId = stringOrNumber;
// interface postId = stringOrNumber

//Literal types

let myName: 'Jacek';
// myName = "Aga"

let userName: 'Jacek' | 'Aga';
userName = 'Aga';
userName = 'Jacek';

//Function
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg('Hello');
logMsg(add(2, 3));
// logMsg(add('a', 3));

let subtract = function (c: number, d: number): number {
  return c - d;
};
logMsg(subtract(10, 7));

function multiply(e: number, f: number): number {
  return e * f;
}
logMsg(multiply(5, 5));

type mathFunction = (a: number, b: number) => number;

let multiply2: mathFunction = (g, h) => {
  return g * h;
};
logMsg(multiply2(5, 4));

interface mathFunction2 {
  (a: number, b: number): number;
}

//optional params
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== 'undefined') {
    return a + b + c;
  }
  return a + b;
};

//default params
const sumAll = (a: number, b: number, c: number = 3): number => {
  return a + b + c;
};

logMsg(addAll(1, 2, 3));
logMsg(addAll(1, 2));
logMsg(sumAll(1, 2));
logMsg(sumAll(1, 2, 4));

const sumAll2 = (a: number = 10, b: number, c: number): number => {
  return a + b + c;
};

logMsg(sumAll2(undefined, 2, 3));

//Rest params
const total = (a: number, ...nums: number[]): number => {
  return (
    a +
    nums.reduce((acu, cur) => {
      return acu + cur;
    }, 0)
  );
};

logMsg(total(1, 2, 3, 4, 5, 6));

//Never type

const createError = (errMsg: string) => {
  throw new Error(errMsg);
};

const infinite = () => {
  let a: number = 1;
  while (true) {
    a++;
  }
};
const infinite2 = () => {
  let a: number = 1;
  while (true) {
    a++;
    if (a > 100) break;
  }
};

const numberOrString = (value: number | string): string => {
  if (typeof value === 'string') return 'string';
  if (typeof value === 'number') return 'number';
  return createError('This should never happed!');
};

//custom type guard function
const isNumber = (value: any): boolean => {
  return typeof value === 'number';
};

const numberOrString2 = (value: number | string): string => {
  if (typeof value === 'string') return 'string';
  if (isNumber(value)) return 'number';
  return createError('This should never happed!');
};
