"use strict";
console.log('UTILITY TYPES log...');
const updateAssigment = (assign, propsToUpdate) => {
    return { ...assign, ...propsToUpdate };
};
let studentOne = {
    studentId: 'first',
    title: 'student',
    grade: 5,
};
console.log(studentOne);
studentOne = updateAssigment(studentOne, { grade: 4 });
console.log(studentOne);
