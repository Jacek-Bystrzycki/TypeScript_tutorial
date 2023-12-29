//Partial type

interface Assigment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssigment = (
  assign: Assigment,
  propsToUpdate: Partial<Assigment>
): Assigment => {
  return { ...assign, ...propsToUpdate };
};

const studentOne: Assigment = {
  studentId: 'first',
  title: 'student',
  grade: 5,
};

console.log(updateAssigment(studentOne, { grade: 4 }));
const assignGraded: Assigment = updateAssigment(studentOne, { grade: 4 });
console.log(assignGraded);

//Required type
const recordAssigment = (assign: Required<Assigment>): Assigment => {
  //send to database, etc.
  return assign;
};
// recordAssigment(studentOne);
recordAssigment({ ...studentOne, verified: true });

//Readonly type
const assignVerified: Readonly<Assigment> = { ...assignGraded, verified: true };
// assignVerified.grade = 40 //readonly

//Record type
const hexColorMap: Record<string, string> = {
  red: 'FF0000',
  green: '00FF00',
  blue: '0000FF',
};

type Students = 'Sara' | 'Kelly';
type LetterGrades = 'A' | 'B' | 'C' | 'D' | 'U';
const finalGrades: Record<Students, LetterGrades> = {
  Sara: 'A',
  Kelly: 'C',
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradedData: Record<Students, Grades> = {
  Sara: { assign1: 45, assign2: 56 },
  Kelly: { assign1: 64, assign2: 575 },
};

//Pick and Omit types
type AssignResult = Pick<Assigment, 'studentId' | 'grade'>;

const score: AssignResult = {
  studentId: 'k244',
  grade: 76,
};

type AssignPreview = Omit<Assigment, 'studentId' | 'grade'>;

const scorePreview: AssignPreview = {
  title: 'myTitl',
  verified: false,
};

//Extract and Exclude types
type HighGrade = Extract<LetterGrades, 'A' | 'B'>;
type AdjustGrade = Exclude<LetterGrades, 'U'>;

//Nonnullable type
type AllPossibleGrades = 'Jacek' | 'Aga' | null | undefined;
type NamesOnly = NonNullable<AllPossibleGrades>;

//ReturnType type

// type NewAssign = {
//   name:string,
//   points:number
// }
// const createNewAssign = (name:string, points:number):NewAssign =>{
//   return {name, points}
// }

const createNewAssign = (name: string, points: number) => {
  return { name, points };
};
type NewAssign = ReturnType<typeof createNewAssign>;
const tsAssign: NewAssign = createNewAssign('Jacek', 100);
console.log(tsAssign);

//Parameters Type
type AssignParams = Parameters<typeof createNewAssign>;
const assignArgs: AssignParams = ['Aga', 99];
const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

// Awaited - helps us with the ReturnType of a Promise

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

// type FetchUsersReturnType = ReturnType<typeof fetchUsers>; //ReturnType gives a Promise
type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>; //Awaited gives resolved promise

const startFetch = async () => {
  // const users: FetchUsersReturnType = fetchUsers();
  const users: FetchUsersReturnType = await fetchUsers();
  console.log(users);
};
startFetch();
