console.log('UTILITY TYPES log...');

//Partial type
interface Assigment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssigment = (assign: Assigment, propsToUpdate: Partial<Assigment>): Assigment => {
  return { ...assign, ...propsToUpdate };
};

let studentOne: Assigment = {
  studentId: 'first',
  title: 'student',
  grade: 5,
};

console.log(studentOne);
studentOne = updateAssigment(studentOne, { grade: 4 });
console.log(studentOne);
