"use strict";
console.log('ENUM log....');
//BAD❌
var BadState;
(function (BadState) {
    BadState[BadState["InProgress"] = 0] = "InProgress";
    BadState[BadState["Success"] = 1] = "Success";
    BadState[BadState["Fail"] = 2] = "Fail";
})(BadState || (BadState = {}));
console.log(BadState.InProgress); // (enum member) State.InProgress = 0
console.log(BadState.Success); // (enum member) State.Success = 1
console.log(BadState.Fail); // (enum member) State.Fail = 2
const badCheckState = (state) => {
    console.log(state);
};
badCheckState(0);
badCheckState(1);
badCheckState(2);
const goodState1 = 'InProgress';
const goodState2 = 'Success';
//const goodState3: GoodState = "Error"//Type '"Error"' is not assignable to type 'GoodState'
console.log(goodState1, goodState2);
//GOOD 2✅
var GoodState2;
(function (GoodState2) {
    GoodState2["InProgress"] = "InProgress";
    GoodState2["Success"] = "Success";
    GoodState2["Fail"] = "Fail";
})(GoodState2 || (GoodState2 = {}));
const goodCheckState = (state) => {
    console.log(state);
};
goodCheckState(GoodState2.InProgress);
goodCheckState(GoodState2.Success);
goodCheckState(GoodState2.Fail);
//goodCheckState(GoodState2.Error);//Property 'Error' does not exist on type 'typeof GoodState2'
