export interface Metar {
  raw: string;
  altimeter: number;
  date: string;
  units: {
    altimeter: string;
    altitude: string;
    temperature: string;
    visibility: string;
    windSpeed: string;
  };
  clouds: {
    type: string;
    altitude: number;
  }[];
  visibility: number;
  windDirection: number;
  windSpeed: number;
  dewpoint: number;
  temperature: number;
}
