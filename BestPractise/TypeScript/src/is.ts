console.log('IS log....');

type Species = 'cat' | 'dog';

interface Pet {
  species: Species;
}

class Cat implements Pet {
  constructor(public species: Species) {}

  public meow = (): void => {
    console.log('Meow!!!');
  };
  public jump = (): void => {
    console.log('Jumping!!!');
  };
  public walk = (): void => {
    console.log('Walking!!!');
  };
}
class Dog implements Pet {
  constructor(public species: Species) {}

  public run = (): void => {
    console.log('Running!!!');
  };
}

const petIsCat = (pet: Pet): pet is Cat => {
  return pet.species === 'cat';
};
const petIsCatBoolean = (pet: Pet): boolean => {
  return pet.species === 'cat';
};

const myCat: Pet = new Cat('cat');
const myDog: Pet = new Dog('dog');

//BAD ❌
if (petIsCatBoolean(myCat)) {
  //   myCat.meow(); //Property 'meow' does not exist on type 'Pet'
  (myCat as Cat).meow();
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
