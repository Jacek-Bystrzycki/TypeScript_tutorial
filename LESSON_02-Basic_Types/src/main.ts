let myName = 'Jacek';
let myLastName: string = 'Byst';
let postCode: string;

// myName = 42;
postCode = '40-750';

let isLoading: boolean;
isLoading = true;
// isLoading - 42;

let album: any;

album = true;
album = false;
album = 42;
album = 'myString';

const sum = (a: number, b: number): number => {
  return a + b;
};

let zipCode: string | number;
zipCode = '40-750';
zipCode = 40750;
// zipCode = true;

let isActive: number | boolean | string;

let re: RegExp = /\w+/g;
