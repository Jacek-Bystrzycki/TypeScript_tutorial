class Coder {
  name: string;
  music: string;
  age: number;
  lang: string;
  constructor(name: string, music: string, age: number, lang: string) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
}

//Visibility modifiers
class Coder2 {
  secondLang!: string;
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = 'TypeScript'
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, I'm ${this.age} years old`;
  }
}

const jacek = new Coder2('Jacek', 'Funky', 37);
console.log(jacek);
// console.log(jacek.age);
// console.log(jacek.lang);
console.log(jacek.getAge());

class WebDev extends Coder2 {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }
  public getLang() {
    return `I write in ${this.lang} language`;
  }
}

const aga = new WebDev('MyPC', 'Aga', 'Hardcore', 38);
console.log(aga.getAge());
console.log(aga.getLang());

/////////=================================================================

interface Musican {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musican {
  constructor(private _name: string, public instrument: string) {
    // this.name = name;
    this.instrument = instrument;
  }
  public play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }

  //when we want a prop to be private in constructor, there must setup getter and/or setter on this attribute when class implements interface
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
}

const newUser = new Guitarist('Stefan', 'piano');
console.log(newUser.play('play'));

///===========================================================

class Peeps {
  static count: number = 0;
  static getCount(): number {
    return Peeps.count;
  }

  public id: number;
  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const john = new Peeps('John');
const steve = new Peeps('Steve');
const ana = new Peeps('Ana');

console.log(ana.id);
console.log(steve.id);
console.log(john.id);

console.log(Peeps.count);

//=====================================

class Bands {
  private dataState: string[];
  constructor() {
    this.dataState = [];
  }
  //getter method
  public get data(): string[] {
    return this.dataState;
  }

  //setter method
  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === 'string')) {
      this.dataState = value;
    } else {
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
