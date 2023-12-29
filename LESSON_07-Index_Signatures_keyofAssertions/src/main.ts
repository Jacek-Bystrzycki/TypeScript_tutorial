//index signatures - can be "index" or "key" keywords

// interface TransactionObj {
//   //index signature:
//   readonly [index: string]: number;
// }
interface TransactionObj {
  readonly [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

const todaysTransaction: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
};

console.log(todaysTransaction.Pizza);
console.log(todaysTransaction['Pizza']);

let prop: string = 'Pizza';
console.log(todaysTransaction[prop]);

const todaysNet = (transactions: TransactionObj): number => {
  let total: number = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};

console.log(todaysNet(todaysTransaction));

// todaysTransaction.Pizza = 40; // read only when "readonly [index: string]: number;"

console.log(todaysTransaction['Jacek']); //undefined because prop dosent exist

//===========class from interface and then object from classes

interface Bike {
  [index: string]: number | string;
  name: string;
  weight: number;
}

class classBike implements Bike {
  [index: string]: number | string;
  constructor(public name: string, public weight: number) {
    this.name = name;
    this.weight = weight;
  }
}

const canyon = new classBike('Canyon', 8);
for (const item in canyon) {
  console.log(`${item}: ${canyon[item]}`);
}

//=====================================

interface Student {
  [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: 'Doug',
  GPA: 3.5,
  classes: [100, 200],
};

console.log(student.test); //prop dosent exist but TS dosent know because index signature is also undefined, undefined must be if on of the prop is optional: classes?:number[]

for (const key in student) {
  console.log(`${key}: ${student[key]}`);
}

////////keyof assortion

//keyof create template literals string with props name therefore prop name can be used dynamically for example in loop

interface Student2 {
  // [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student2: Student2 = {
  name: 'Jacek',
  GPA: 13.2,
  classes: [300, 400],
};

for (const key in student2) {
  //keyof Student2 = `name`, `GPA`, `classes`
  console.log(`${key}: ${student2[key as keyof Student2]}`);
}

Object.keys(student2).map((key) =>
  console.log(
    `${key as keyof typeof student2}: ${student2[key as keyof typeof student2]}`
  )
);

const logStudentKey = (student: Student2, key: keyof typeof student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student2, 'classes');
logStudentKey(student2, 'GPA');
logStudentKey(student2, 'name');

//==============================================

// interface Incomes {
//   [key: 'salary' | 'bonus' | 'sidehistle']: number;
// }

// type Incoms = Record<'salary' | 'bonus' | 'sidehistle', number>;

type Streams = 'salary' | 'bonus' | 'sidehustle';

//props salary, bouns and sidehustle can be a type a number or string
type Incoms = Record<Streams, number | string>;

const monthlyincomes: Incoms = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
};

for (const revenue in monthlyincomes) {
  console.log(`${monthlyincomes[revenue as keyof Incoms]}`);
}
