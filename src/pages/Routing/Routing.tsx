import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import { Weather } from 'pages/Weather/Weather';

export const Routing: FC = () => {
  return (
    <Routes>
      <Route path=":airport/:type" element={<Weather />} />
      <Route
        path="*"
        element={<Typography variant="h3">Not found!</Typography>}
      />
    </Routes>
  );
};
