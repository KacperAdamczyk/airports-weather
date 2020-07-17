import { Metar } from 'interfaces/metar';
import { MetarResponse } from 'interfaces/metarResponse';

// ADAPTER
interface MetarTarget {
  getData: () => Metar;
}

export class MetarAdapter implements MetarTarget {
  constructor(private metarResponse: MetarResponse) {}

  getData(): Metar {
    const metar = this.metarResponse;

    return {
      raw: metar.raw,
      altimeter: metar.altimeter.value,
      date: metar.time.dt,
      clouds: metar.clouds.map(({ type, altitude }) => ({
        type,
        altitude,
      })),
      visibility: metar.visibility.value,
      windDirection: metar.wind_direction.value,
      windSpeed: metar.wind_speed.value,
      dewpoint: metar.dewpoint.value,
      temperature: metar.temperature.value,
      units: {
        altimeter: metar.units.altimeter,
        altitude: metar.units.altitude,
        temperature: metar.units.temperature,
        visibility: metar.units.visibility,
        windSpeed: metar.units.wind_speed,
      },
    };
  }
}
