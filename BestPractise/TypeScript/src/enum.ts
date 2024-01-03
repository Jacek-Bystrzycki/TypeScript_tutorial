console.log('ENUM log....');

//BAD❌
enum BadState {
  InProgress,
  Success,
  Fail,
}

console.log(BadState.InProgress); // (enum member) State.InProgress = 0
console.log(BadState.Success); // (enum member) State.Success = 1
console.log(BadState.Fail); // (enum member) State.Fail = 2

const badCheckState = (state: BadState): void => {
  console.log(state);
};

badCheckState(0);
badCheckState(1);
badCheckState(2);
// badCheckState(3);

//GOOD 1✅
type GoodState = 'InProgress' | 'Success' | 'Fail';

const goodState1: GoodState = 'InProgress';
const goodState2: GoodState = 'Success';
//const goodState3: GoodState = "Error"//Type '"Error"' is not assignable to type 'GoodState'
console.log(goodState1, goodState2);

//GOOD 2✅
enum GoodState2 {
  InProgress = 'InProgress',
  Success = 'Success',
  Fail = 'Fail',
}

const goodCheckState = (state: GoodState2): void => {
  console.log(state);
};

goodCheckState(GoodState2.InProgress);
goodCheckState(GoodState2.Success);
goodCheckState(GoodState2.Fail);
//goodCheckState(GoodState2.Error);//Property 'Error' does not exist on type 'typeof GoodState2'
