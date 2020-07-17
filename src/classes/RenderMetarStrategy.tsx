import React from 'react';
import { CardContent as UICardContent } from '@material-ui/core';
import { format } from 'date-fns';
import styled from '@emotion/styled';

import { RenderStrategy } from 'interfaces/RenderStrategy';
import { Metar } from 'interfaces/metar';
import { Taf } from 'interfaces/taf';
import {
  WeatherPosition,
  WeatherIcon,
  WeatherText,
} from 'components/WeatherPosition/WeatherPosition';

import calendar from 'images/calendar.png';
import pressure from 'images/pressure.png';
import cloud from 'images/cloud.png';
import eye from 'images/eye.png';
import temperature from 'images/temperature.png';
import wind from 'images/wind.png';

const CardContent = styled(UICardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export class RenderMetarStrategy implements RenderStrategy {
  render(metar: Metar, taf: Taf) {
    return (
      <CardContent>
        <strong style={{ fontSize: '12px' }}>{metar.raw}</strong>
        <WeatherPosition>
          <WeatherIcon src={calendar} alt="calendar" span={2} />
          <WeatherText variant="subtitle1">
            Time: {format(new Date(metar.date), 'hh:mm')}
          </WeatherText>
          <WeatherText variant="subtitle1">
            Date: {format(new Date(metar.date), 'dd/MM/yyyy')}
          </WeatherText>
        </WeatherPosition>
        <WeatherPosition>
          <WeatherIcon src={pressure} alt="pressure" span={1} />
          <WeatherText variant="subtitle1">
            Altimeter: {metar.altimeter} {metar.units.altimeter}
          </WeatherText>
        </WeatherPosition>
        <WeatherPosition>
          <WeatherIcon src={temperature} alt="temperature" span={2} />
          <WeatherText variant="subtitle1">
            Temperature: {metar.temperature} °{metar.units.temperature}
          </WeatherText>
          <WeatherText variant="subtitle1">
            Dewpoint: {metar.dewpoint} °{metar.units.temperature}
          </WeatherText>
        </WeatherPosition>
        <WeatherPosition>
          <WeatherIcon src={wind} alt="wind" span={2} />
          <WeatherText variant="subtitle1">
            Wind direction: {metar.windDirection}°
          </WeatherText>
          <WeatherText variant="subtitle1">
            Wind speed: {metar.windSpeed} {metar.units.windSpeed}
          </WeatherText>
        </WeatherPosition>
        <WeatherPosition>
          <WeatherIcon src={cloud} alt="cloud" span={metar.clouds.length} />
          {metar.clouds.map(({ type, altitude }, index) => (
            <WeatherText variant="subtitle1" key={index}>
              Type: {type} Altitude: {altitude * 100} {metar.units.altitude}
            </WeatherText>
          ))}
        </WeatherPosition>
        <WeatherPosition>
          <WeatherIcon src={eye} alt="eye" span={1} />
          <WeatherText variant="subtitle1">
            Visibility: {metar.visibility} {metar.units.visibility}
          </WeatherText>
        </WeatherPosition>
      </CardContent>
    );
  }
}

/*
  windDirection: number;
  windSpeed: number;
*/
