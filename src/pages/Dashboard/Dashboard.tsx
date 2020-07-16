import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container as UIContainer,
  AppBar,
  Typography,
  Toolbar,
  Paper as UIPaper,
} from '@material-ui/core';
import styled from '@emotion/styled';

import { Routing } from 'pages/Routing/Routing';
import { weatherTypes } from 'constants/weatherTypes';

const Container = styled(UIContainer)`
  margin-top: 40px;
`;

const Paper = styled(UIPaper)`
  padding: 20px;
`;

export const Dashboard: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/EPRZ/${weatherTypes.metar}`);
  }, [navigate]);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">Airport Weather</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Paper>
          <Routing />
        </Paper>
      </Container>
    </>
  );
};
