import Ligue from './Ligues';
import Club from './Clubs';
import Player from './Player';
import { IntPlayer } from './Player';

const harryKane = new Player('1', 'Harry Kane', 29, 'England', 15000);
const arronLenon = new Player('2', 'Aaron Lenon', 42, 'England', 9000);
const erlingHaaland = new Player('1', 'ErlingHaaland', 22, 'Norway', 27000);
const kunAguero = new Player('2', 'Kun Auguero', 42, 'Argentina', 13000);

const newPlayer: IntPlayer = {
  id: '28',
  name: 'Jacek Bystrzycki',
  age: 38,
  nation: 'Polska',
  salary: 999999,
};
const jacekByst = new Player(
  '3',
  newPlayer.name,
  newPlayer.age,
  newPlayer.nation
);

const tottenham = new Club('1', 'Tottenham Hotspur', undefined, 'London');
tottenham.addPlayer(harryKane);
tottenham.addPlayer(arronLenon);
tottenham.addPlayer(jacekByst);
const manCity = new Club('2', 'Manchester City', undefined, 'Manchester');
manCity.addPlayer(erlingHaaland);
manCity.addPlayer(kunAguero);

const premierLeague = new Ligue(undefined, 'England', 1);
premierLeague.addTeam(tottenham);
premierLeague.addTeam(manCity);
console.log(premierLeague.teams);
