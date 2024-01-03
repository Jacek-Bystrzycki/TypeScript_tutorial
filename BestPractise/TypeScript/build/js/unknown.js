"use strict";
console.log('UNKNOWN log...');
let userAny; ///< ❌ Simply means turn of the Typescript "type-checks"
let userUnkown; ///< ✅ The right one to use
function isRegularUser(object) {
    if (object !== null && typeof object === 'object') {
        return !('token' in object);
    }
    return false;
}
function isAdminUser(object) {
    if (object !== null && typeof object === 'object') {
        return 'token' in object;
    }
    return false;
}
const normalUser = {
    id: 1,
    firstName: 'aga',
    lastName: 'byst',
    gender: 'female',
    image: 'image-url2',
    age: 38,
};
const adminUser = {
    id: 2,
    firstName: 'jacek',
    lastName: 'byst',
    gender: 'male',
    image: 'image-url',
    age: 38,
    token: '1234567890',
    addNewUser: () => void {},
};
//example best suits for fetching data when we are not sure what we receive
//BAD❌
const badNewNormalUser = normalUser;
const badNewAdminUser = adminUser;
//GOOD✅
const goodNewNormalUser = normalUser;
const goodNewAdminUser = adminUser;
if (isRegularUser(goodNewNormalUser)) {
    console.log(goodNewNormalUser.firstName);
    //   console.log(goodNewNormalUser.token); //Property 'token' does not exist on type 'User'
}
if (isRegularUser(goodNewAdminUser)) {
    console.log(goodNewAdminUser.firstName);
}
if (isAdminUser(goodNewAdminUser)) {
    console.log(goodNewAdminUser.token);
    console.log(goodNewAdminUser.firstName);
}
