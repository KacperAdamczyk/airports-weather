export interface TafResponse {
  meta: {
    timestamp: string;
    stations_updated: string;
  };
  raw: string;
  station: string;
  time: {
    repr: string;
    dt: string;
  };
  remarks: string;
  forecast: {
    altimeter: string;
    clouds: [
      {
        repr: string;
        type: string;
        altitude: number;
        modifier: string | null;
        direction: string | null;
      }
    ];
    flight_rules: string;
    other: string[];
    sanitized: string;
    visibility: {
      repr: string;
      value: number;
      spoken: string;
    };
    wind_direction: {
      repr: string;
      value: 280;
      spoken: string;
    };
    wind_gust: string | null;
    wind_speed: {
      repr: string;
      value: number;
      spoken: string;
    };
    wx_codes: string[];
    end_time: {
      repr: string;
      dt: string;
    };
    icing: string[];
    probability: string | null;
    raw: string;
    start_time: {
      repr: string;
      dt: string;
    };
    transition_start: string | null;
    turbulence: string[];
    type: string;
    wind_shear: string | null;
  }[];
  start_time: {
    repr: string;
    dt: string;
  };
  end_time: {
    repr: string;
    dt: string;
  };
  max_temp: string;
  min_temp: string;
  alts: string | null;
  temps: string | null;
  units: {
    altimeter: string;
    altitude: string;
    temperature: string;
    visibility: string;
    wind_speed: string;
  };
}
