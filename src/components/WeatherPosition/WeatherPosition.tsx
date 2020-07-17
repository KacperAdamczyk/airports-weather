import { Typography } from '@material-ui/core';

import styled from '@emotion/styled';

export const WeatherPosition = styled.div`
  margin: 8px 0;
  display: grid;
  grid-template-columns: 100px minmax(200px, max-content);
  grid-gap: 0 5px;
  align-items: center;
`;
interface WeatherIconProps {
  span: number;
}
export const WeatherIcon = styled.img<WeatherIconProps>`
  grid-column: 1 / 2;
  grid-row: 1 / span ${({ span }) => span};
`;

export const WeatherText = styled(Typography)`
  grid-column: 2 / auto;
`;
