import Player from './Player';

interface IntClub {
  id: string;
  name: string;
  players: Player[];
  town: string;
  addPlayer(player: Player): void;
  removePlayer(id: string): void;
}

export default class Club implements IntClub {
  constructor(
    private _id: string,
    private _name: string,
    private _players: Player[] = [],
    private _town: string
  ) {}

  get id(): string {
    return this._id;
  }
  get name(): string {
    return this._name;
  }
  get players(): Player[] {
    return this._players;
  }
  get town(): string {
    return this._town;
  }

  addPlayer(player: Player): void {
    this._players.push(player);
  }
  removePlayer(id: string): void {
    this._players = this._players.filter((player) => id !== player.id);
  }
}
