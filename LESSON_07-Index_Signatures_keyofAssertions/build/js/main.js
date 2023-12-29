"use strict";
//index signatures - can be "index" or "key" keywords
const todaysTransaction = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
console.log(todaysTransaction.Pizza);
console.log(todaysTransaction['Pizza']);
let prop = 'Pizza';
console.log(todaysTransaction[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransaction));
// todaysTransaction.Pizza = 40; // read only when "readonly [index: string]: number;"
console.log(todaysTransaction['Jacek']); //undefined because prop dosent exist
class classBike {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
        this.name = name;
        this.weight = weight;
    }
}
const canyon = new classBike('Canyon', 8);
for (const item in canyon) {
    console.log(`${item}: ${canyon[item]}`);
}
const student = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 200],
};
console.log(student.test); //prop dosent exist but TS dosent know because index signature is also undefined, undefined must be if on of the prop is optional: classes?:number[]
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
const student2 = {
    name: 'Jacek',
    GPA: 13.2,
    classes: [300, 400],
};
for (const key in student2) {
    //keyof Student2 = `name`, `GPA`, `classes`
    console.log(`${key}: ${student2[key]}`);
}
Object.keys(student2).map((key) => console.log(`${key}: ${student2[key]}`));
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student2, 'classes');
logStudentKey(student2, 'GPA');
logStudentKey(student2, 'name');
const monthlyincomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
for (const revenue in monthlyincomes) {
    console.log(`${monthlyincomes[revenue]}`);
}
