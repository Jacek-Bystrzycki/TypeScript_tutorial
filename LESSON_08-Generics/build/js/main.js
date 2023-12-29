"use strict";
const stringEcho = (arg) => arg;
const echo = (arg) => arg;
const isObj = (arg) => {
    return typeof arg === 'object' && !Array.isArray(arg) && arg !== null;
};
console.log(isObj(true));
console.log(isObj('Jacek'));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: 'Jacek' }));
console.log(isObj(null));
const isTrue = (arg) => {
    //check if arg is array and is not empty (because empty array = true)
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    //check if arg is object and it is not empty (because empty object = true)
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue(NaN));
console.log(isTrue(0));
console.log(isTrue(-0));
console.log(isTrue(1));
console.log(isTrue(''));
console.log(isTrue('Jacek'));
console.log(isTrue([])); //modified
console.log(isTrue([1, 2]));
console.log(isTrue({})); //modified
console.log(isTrue({ one: 1, two: 2 }));
const checkBoolValue = (arg) => {
    //check if arg is array and is not empty (because empty array = true)
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    //check if arg is object and it is not empty (because empty object = true)
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    //process the user with logic here
    return user;
};
// console.log(processUser({name:"Jacek"}));
console.log(processUser({ name: 'Jacek', id: 1 }));
const getUsersProperty = (users, key) => {
    return users.map((user) => user[key]);
};
const usersArray = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496',
            },
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets',
        },
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618',
            },
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains',
        },
    },
];
console.log(getUsersProperty(usersArray, 'email'));
console.log(getUsersProperty(usersArray, 'username'));
console.log(getUsersProperty(usersArray, 'address'));
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject('Jacek');
console.log(store.state);
// store.state = 12
store.state = 'Aga';
console.log(store.state);
const myState = new StateObject([
    'Jacek',
    37,
    true,
]);
console.log(myState.state);
myState.state = ['Aga', 38];
console.log(myState.state);
