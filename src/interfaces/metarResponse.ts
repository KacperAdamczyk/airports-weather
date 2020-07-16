export interface MetarResponse {
  meta: {
    timestamp: string;
    stations_updated: string;
  };
  altimeter: {
    repr: string;
    value: number;
    spoken: string;
  };
  clouds: [
    {
      repr: string;
      type: string;
      altitude: number;
      modifier: null;
      direction: null;
    }
  ];
  flight_rules: string;
  other: [];
  sanitized: string;
  visibility: {
    repr: string;
    value: number;
    spoken: string;
  };
  wind_direction: {
    repr: string;
    value: number;
    spoken: string;
  };
  wind_gust: null;
  wind_speed: {
    repr: string;
    value: number;
    spoken: string;
  };
  wx_codes: string[];
  raw: string;
  station: string;
  time: {
    repr: string;
    dt: string;
  };
  remarks: string;
  dewpoint: {
    repr: string;
    value: number;
    spoken: string;
  };
  remarks_info: {
    dewpoint_decimal: number | null;
    temperature_decimal: number | null;
  };
  runway_visibility: [];
  temperature: {
    repr: string;
    value: number;
    spoken: string;
  };
  wind_variable_direction: [
    {
      repr: string;
      value: number;
      spoken: string;
    },
    {
      repr: string;
      value: number;
      spoken: string;
    }
  ];
  units: {
    altimeter: string;
    altitude: string;
    temperature: string;
    visibility: string;
    wind_speed: string;
  };
}
