import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Card as UICard } from '@material-ui/core';
import styled from '@emotion/styled';

import { Metar } from 'interfaces/metar';
import { Taf } from 'interfaces/taf';
import { withWeatherData } from 'hoc/withWeatherData';
import { WeatherDetailsRenderer } from 'classes/WeatherDetailsRenderer';
import { weatherTypes } from 'constants/weatherTypes';
import { RenderMetarStrategy } from 'classes/RenderMetarStrategy';
import { RenderTafStrategy } from 'classes/RenderTafStrategy';

const Card = styled(UICard)`
  margin-top: 20px;
  max-width: 800px;
  min-width: 300px;
`;

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

  return <Card>{details}</Card>;
};

export const WeatherDetails = withWeatherData(WeatherDetailsBase);
