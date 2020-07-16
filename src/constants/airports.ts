import { Airport } from 'interfaces';
import { AirportsCollection } from 'classes/AirportsCollection';

export const airports: Airport[] = [
  {
    icao: 'EPBY',
    name: 'Bydgoszcz Ignacy Jan Paderewski Airport',
  },
  {
    icao: 'EPGD',
    name: 'Gdańsk Lech Wałęsa Airport',
  },
  {
    icao: 'EPKK',
    name: 'Kraków John Paul II International Airport',
  },
  {
    icao: 'EPKT',
    name: 'Katowice Airport',
  },
  {
    icao: 'EPLB',
    name: 'Lublin Airport',
  },
  {
    icao: 'EPLL',
    name: 'Łódź Władysław Reymont Airport',
  },
  {
    icao: 'EPMO',
    name: 'Warsaw Modlin Airport',
  },
  {
    icao: 'EPPO',
    name: 'Poznań–Ławica Airport',
  },
  {
    icao: 'EPRA',
    name: 'Radom Airport',
  },
  {
    icao: 'EPRZ',
    name: 'Rzeszów–Jasionka Airport',
  },
  {
    icao: 'EPSC',
    name: 'Solidarity Szczecin–Goleniów Airport',
  },
  {
    icao: 'EPSY',
    name: 'Olsztyn-Mazury Airport',
  },
  {
    icao: 'EPWA',
    name: 'Warsaw Chopin Airport',
  },
  {
    icao: 'EPWR',
    name: 'Copernicus Airport Wrocław',
  },
  {
    icao: 'EPZG',
    name: 'Zielona Góra Airport',
  },
];

export const airportsCollection = new AirportsCollection(airports);
