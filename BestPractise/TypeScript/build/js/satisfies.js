"use strict";
console.log('SATISFIES log....');
//So now myInfo and myOtherInfo are the unions
const applicant = {
    myInfo: 'John',
    myOtherInfo: { id: 123, age: 22 },
};
//BAD❌
// applicant.myInfo.toUpperCase();//Property 'toUpperCase' does not exist on type 'personInfo'.Property 'toUpperCase' does not exist on type 'otherDetails'.
//In order to remove this error we need to manually validate a property:
if (typeof applicant.myInfo === 'string') {
    applicant.myInfo.toUpperCase();
}
applicant.myInfo = { id: 122, age: 24 }; // we still can change data as long as it is in personInfo scope
applicant.myInfo = 'Justin';
//GOOD✅
const applicant2 = {
    myInfo: 'Jack',
    myOtherInfo: { id: 124, age: 38 },
};
applicant2.myInfo.toUpperCase();
// applicant2.myInfo = { id: 122, age: 24 }; // we cannot change data to different type than personName
