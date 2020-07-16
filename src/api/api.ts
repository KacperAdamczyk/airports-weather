import axios from 'axios';

import { MetarResponse } from 'interfaces/metarResponse';
import { TafResponse } from 'interfaces/tafResponse';
import { MetarAdapter } from 'classes/MetarAdapter';
import { Metar } from 'interfaces/metar';
import { TafAdapter } from 'classes/TafAdapter';
import { Taf } from 'interfaces/taf';

// SINGLETON
export class Api {
  private static instance: Api;
  private axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      Authorization: process.env.REACT_APP_API_TOKEN,
    },
  });

  public static getInstance(): Api {
    if (!Api.instance) {
      Api.instance = new Api();
    }

    return Api.instance;
  }

  public async getMetar(icao: string): Promise<Metar> {
    const { data: metarResponse } = await this.axiosInstance.get<MetarResponse>(
      `metar/${icao}`
    );

    return new MetarAdapter(metarResponse).getData();
  }

  public async getTaf(icao: string): Promise<Taf> {
    const { data: tafResponse } = await this.axiosInstance.get<TafResponse>(
      `taf/${icao}`
    );

    return new TafAdapter(tafResponse).getData();
  }
}
