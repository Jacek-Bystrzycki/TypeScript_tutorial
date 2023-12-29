"use strict";
//Partial type
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssigment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const studentOne = {
    studentId: 'first',
    title: 'student',
    grade: 5,
};
console.log(updateAssigment(studentOne, { grade: 4 }));
const assignGraded = updateAssigment(studentOne, { grade: 4 });
console.log(assignGraded);
//Required type
const recordAssigment = (assign) => {
    //send to database, etc.
    return assign;
};
// recordAssigment(studentOne);
recordAssigment(Object.assign(Object.assign({}, studentOne), { verified: true }));
//Readonly type
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// assignVerified.grade = 40 //readonly
//Record type
const hexColorMap = {
    red: 'FF0000',
    green: '00FF00',
    blue: '0000FF',
};
const finalGrades = {
    Sara: 'A',
    Kelly: 'C',
};
const gradedData = {
    Sara: { assign1: 45, assign2: 56 },
    Kelly: { assign1: 64, assign2: 575 },
};
const score = {
    studentId: 'k244',
    grade: 76,
};
const scorePreview = {
    title: 'myTitl',
    verified: false,
};
//ReturnType type
// type NewAssign = {
//   name:string,
//   points:number
// }
// const createNewAssign = (name:string, points:number):NewAssign =>{
//   return {name, points}
// }
const createNewAssign = (name, points) => {
    return { name, points };
};
const tsAssign = createNewAssign('Jacek', 100);
console.log(tsAssign);
const assignArgs = ['Aga', 99];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
        return res.json();
    })
        .catch((err) => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
const startFetch = () => __awaiter(void 0, void 0, void 0, function* () {
    // const users: FetchUsersReturnType = fetchUsers();
    const users = yield fetchUsers();
    console.log(users);
});
startFetch();
