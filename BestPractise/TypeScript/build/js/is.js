"use strict";
console.log('IS log....');
class Cat {
    species;
    constructor(species) {
        this.species = species;
    }
    meow = () => {
        console.log('Meow!!!');
    };
    jump = () => {
        console.log('Jumping!!!');
    };
    walk = () => {
        console.log('Walking!!!');
    };
}
class Dog {
    species;
    constructor(species) {
        this.species = species;
    }
    run = () => {
        console.log('Running!!!');
    };
}
const petIsCat = (pet) => {
    return pet.species === 'cat';
};
const petIsCatBoolean = (pet) => {
    return pet.species === 'cat';
};
const myCat = new Cat('cat');
const myDog = new Dog('dog');
//BAD ❌
if (petIsCatBoolean(myCat)) {
    //   myCat.meow(); //Property 'meow' does not exist on type 'Pet'
    myCat.meow();
}
if (petIsCatBoolean(myDog)) {
    //   myCat.meow(); //Property 'meow' does not exist on type 'Pet'
    //   myDog.run(); //Property 'run' does not exist on type 'Pet'
}
//GOOD✅
if (petIsCat(myCat)) {
    myCat.meow();
}
if (petIsCat(myDog)) {
    // myDog.run() //Property 'run' does not exist on type 'Cat'
}
