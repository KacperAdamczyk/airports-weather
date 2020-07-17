import React, { FC, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Tabs, Tab } from '@material-ui/core';
import styled from '@emotion/styled';

import { weatherTypes, weatherTypesNames } from 'constants/weatherTypes';
import { WeatherDetails } from 'components/WeatherDetails/WeatherDetails';

const Container = styled.div`
  margin-top: 20px;
`;

interface TabPanelProps {
  value: string;
  type: string;
}

const TabPanel: FC<TabPanelProps> = ({ children, value, type }) => {
  const visible = value === type;

  return (
    <div role="tabpanel" hidden={!visible}>
      {visible && children}
    </div>
  );
};

export const TypeTabs: FC = () => {
  const { airport, type } = useParams();
  const navigate = useNavigate();

  const onChange = useCallback(
    (event, index) => {
      navigate(`/${airport}/${weatherTypesNames[index]}`);
    },
    [navigate, airport]
  );

  const index = weatherTypesNames.indexOf(type);

  return (
    <Container>
      <Tabs value={index} onChange={onChange} centered>
        <Tab label={weatherTypes.metar} />
        <Tab label={weatherTypes.taf} />
      </Tabs>
      <TabPanel value={type} type={weatherTypes.metar}>
        <WeatherDetails />
      </TabPanel>
      <TabPanel value={type} type={weatherTypes.taf}>
        <WeatherDetails />
      </TabPanel>
    </Container>
  );
};
