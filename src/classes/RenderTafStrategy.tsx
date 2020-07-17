import React, { Fragment } from 'react';
import { CardContent as UICardContent, Divider } from '@material-ui/core';
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
import cloud from 'images/cloud.png';
import eye from 'images/eye.png';
import wind from 'images/wind.png';

const CardContent = styled(UICardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WideDivider = styled(Divider)`
  margin: 5px 0;
`;

export class RenderTafStrategy implements RenderStrategy {
  render(metar: Metar, taf: Taf) {
    return (
      <>
        <CardContent>
          <strong style={{ fontSize: '12px' }}>{taf.raw}</strong>
          <WeatherPosition>
            <WeatherIcon src={calendar} alt="calendar" span={3} />
            <WeatherText variant="subtitle1">
              Date: {format(new Date(taf.date), 'hh:mm dd/MM/yyyy')}
            </WeatherText>
            <WeatherText variant="subtitle1">
              Start: {format(new Date(taf.startTime), 'hh:mm dd/MM/yyyy')}
            </WeatherText>
            <WeatherText variant="subtitle1">
              End: {format(new Date(taf.endTime), 'hh:mm dd/MM/yyyy')}
            </WeatherText>
          </WeatherPosition>
        </CardContent>
        <WideDivider />
        <WideDivider />
        {taf.forecast.map(
          (
            {
              clouds,
              windDirection,
              windSpeed,
              startTime,
              endTime,
              visibility,
            },
            index
          ) => (
            <Fragment key={index}>
              <CardContent>
                <WeatherPosition>
                  <WeatherIcon src={calendar} alt="calendar" span={2} />

                  <WeatherText variant="subtitle1">
                    Start: {format(new Date(startTime), 'hh:mm dd/MM/yyyy')}
                  </WeatherText>
                  <WeatherText variant="subtitle1">
                    End: {format(new Date(endTime), 'hh:mm dd/MM/yyyy')}
                  </WeatherText>
                </WeatherPosition>
                <WeatherPosition>
                  <WeatherIcon src={wind} alt="wind" span={2} />
                  <WeatherText variant="subtitle1">
                    Wind direction:{' '}
                    {windDirection ? `${windDirection}°` : 'VRB'}
                  </WeatherText>
                  <WeatherText variant="subtitle1">
                    Wind speed:{' '}
                    {windSpeed ? `${windSpeed} ${taf.units.windSpeed}` : '-'}
                  </WeatherText>
                </WeatherPosition>
                {!!clouds.length && (
                  <WeatherPosition>
                    <WeatherIcon src={cloud} alt="cloud" span={clouds.length} />
                    {clouds.map(({ type, altitude }, index) => (
                      <WeatherText variant="subtitle1" key={index}>
                        Type: {type} Altitude: {altitude * 100}{' '}
                        {taf.units.altitude}
                      </WeatherText>
                    ))}
                  </WeatherPosition>
                )}
                {!!visibility && (
                  <WeatherPosition>
                    <WeatherIcon src={eye} alt="eye" span={1} />
                    <WeatherText variant="subtitle1">
                      Visibility: {visibility} {taf.units.visibility}
                    </WeatherText>
                  </WeatherPosition>
                )}
              </CardContent>
              <Divider />
            </Fragment>
          )
        )}
      </>
    );
  }
}
