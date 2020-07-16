import React, { FC, useCallback, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

import { airportsCollection } from 'constants/airports';

export const AirportSelector: FC = () => {
  const { airport, type } = useParams();
  const navigate = useNavigate();

  const onChange = useCallback(
    ({ target: { value } }) => {
      navigate(`/${value}/${type}`);
    },
    [navigate, type]
  );

  // ITERATOR
  const airportsItems = useMemo(() => {
    const airportsIterator = airportsCollection.createIterator();
    const items = [];

    while (airportsIterator.hasMore()) {
      const { icao, name } = airportsIterator.getNext();
      items.push(
        <MenuItem value={icao} key={icao}>
          {name}
        </MenuItem>
      );
    }

    return items;
  }, []);

  return (
    <FormControl variant="outlined">
      <InputLabel id="airport-selector">Airport</InputLabel>
      <Select
        labelId="airport-selector"
        value={airport}
        onChange={onChange}
        label="Airport"
      >
        {airportsItems}
      </Select>
    </FormControl>
  );
};
