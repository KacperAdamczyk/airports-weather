export interface Taf {
  raw: string;
  date: string;
  startTime: string;
  endTime: string;
  units: {
    altimeter: string;
    altitude: string;
    temperature: string;
    visibility: string;
    windSpeed: string;
  };
  forecast: {
    clouds: {
      type: string;
      altitude: number;
    }[];
    visibility?: number;
    windDirection?: number;
    windSpeed?: number;
    startTime: string;
    endTime: string;
  }[];
}
