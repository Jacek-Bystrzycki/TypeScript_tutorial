export interface IntPlayer {
  id: string;
  name: string;
  age: number;
  nation: string;
  salary: number;
}

export default class Player implements IntPlayer {
  constructor(
    private _id: string,
    private _name: string,
    private _age: number,
    private _nation: string = 'NA',
    private _salary: number = 10000
  ) {}

  get id(): string {
    return this._id;
  }
  get name(): string {
    return this._name;
  }
  get age(): number {
    return this._age;
  }
  get nation(): string {
    return this._nation;
  }
  get salary(): number {
    return this._salary;
  }
}
