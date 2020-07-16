import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import { Metar } from 'interfaces/metar';
import { Taf } from 'interfaces/taf';
import { withWeatherData } from 'hoc/withWeatherData';
import { WeatherDetailsRenderer } from 'classes/WeatherDetailsRenderer';
import { weatherTypes } from 'constants/weatherTypes';
import { RenderMetarStrategy } from 'classes/RenderMetarStrategy';
import { RenderTafStrategy } from 'classes/RenderTafStrategy';

interface Props {
  metar: Metar;
  taf: Taf;
}

export const WeatherDetailsBase: FC<Props> = ({ metar, taf }) => {
  const { type } = useParams();

  const renderer = new WeatherDetailsRenderer();

  if (type === weatherTypes.metar) {
    renderer.setStrategy(new RenderMetarStrategy());
  }

  if (type === weatherTypes.taf) {
    renderer.setStrategy(new RenderTafStrategy());
  }

  const details = renderer.executeStrategy(metar, taf);

  return <div>{details}</div>;
};

export const WeatherDetails = withWeatherData(WeatherDetailsBase);
