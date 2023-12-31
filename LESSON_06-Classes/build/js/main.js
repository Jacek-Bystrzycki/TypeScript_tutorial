"use strict";
class Coder {
    constructor(name, music, age, lang) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
}
//Visibility modifiers
class Coder2 {
    constructor(name, music, age, lang = 'TypeScript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        // this.name = name; //this is unneccessary since "public" is provided in constructor and this cause double assignation in output js file
        // this.music = music;
        // this.age = age;
        // this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age} years old`;
    }
}
const jacek = new Coder2('Jacek', 'Funky', 37);
console.log(jacek);
// console.log(jacek.age);
// console.log(jacek.lang);
console.log(jacek.getAge());
class WebDev extends Coder2 {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        // this.computer = computer; //this is unneccessary since "public" is provided in constructor and this cause double assignation in output js file
    }
    getLang() {
        return `I write in ${this.lang} language`;
    }
}
const aga = new WebDev('MyPC', 'Aga', 'Hardcore', 38);
console.log(aga.getAge());
console.log(aga.getLang());
class Guitarist {
    constructor(_name, instrument) {
        this._name = _name;
        this.instrument = instrument;
        // this.name = name;
        // this.instrument = instrument; //this is unneccessary since "public" is provided in constructor and this cause double assignation in output js file
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
    //when we want a prop to be private in constructor, there must setup getter and/or setter on this attribute when class implements interface
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
const newUser = new Guitarist('Stefan', 'piano');
console.log(newUser.play('play'));
///===========================================================
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        // this.name = name; //this is unneccessary since "public" is provided in constructor and this cause double assignation in output js file
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const john = new Peeps('John');
const steve = new Peeps('Steve');
const ana = new Peeps('Ana');
console.log(ana.id);
console.log(steve.id);
console.log(john.id);
console.log(Peeps.count);
//=====================================
class Bands {
    constructor() {
        this.dataState = [];
    }
    //getter method
    get data() {
        return this.dataState;
    }
    //setter method
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === 'string')) {
            this.dataState = value;
        }
        else {
            throw new Error('Param is not an array of strings');
        }
    }
}
const myBands = new Bands();
myBands.data = ['Neil Young', 'Led Zep'];
console.log(myBands.data);
// myBands.data = 'ZZ Top';
myBands.data = [...myBands.data, 'ZZ Top'];
console.log(myBands.data);
