import Club from './Clubs';

interface IntLigue {
  teams: Club[];
  country: string;
  level: number;
  addTeam(team: Club): void;
  removeTeam(id: string): void;
}

export default class Ligue implements IntLigue {
  constructor(
    private _teams: Club[] = [],
    private _country: string = '',
    private _level: number = 1
  ) {}

  get teams(): Club[] {
    return this._teams;
  }
  get country(): string {
    return this._country;
  }
  get level(): number {
    return this._level;
  }

  addTeam(team: Club): void {
    this._teams.push(team);
  }
  removeTeam(id: string): void {
    this._teams = this._teams.filter((club) => club.id !== id);
  }
}
