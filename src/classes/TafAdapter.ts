import { Taf } from 'interfaces/taf';
import { TafResponse } from 'interfaces/tafResponse';

// ADAPTER
interface TafTarget {
  getData: () => Taf;
}

export class TafAdapter implements TafTarget {
  constructor(private tafResponse: TafResponse) {}

  getData(): Taf {
    const taf = this.tafResponse;

    return {
      raw: this.tafResponse.raw,
      date: taf.time.dt,
      startTime: taf.start_time.dt,
      endTime: taf.end_time.dt,
      forecast: taf.forecast.map(
        ({
          clouds,
          visibility,
          wind_direction,
          wind_speed,
          start_time,
          end_time,
        }) => ({
          clouds: clouds.map(({ type, altitude }) => ({
            type,
            altitude,
          })),
          visibility: visibility?.value,
          windDirection: wind_direction?.value,
          windSpeed: wind_speed?.value,
          startTime: start_time.dt,
          endTime: end_time.dt,
        })
      ),
      units: {
        altimeter: taf.units.altimeter,
        altitude: taf.units.altitude,
        temperature: taf.units.temperature,
        visibility: taf.units.visibility,
        windSpeed: taf.units.wind_speed,
      },
    };
  }
}
