import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { LinearProgress } from '@material-ui/core';

import { Metar } from 'interfaces/metar';
import { Taf } from 'interfaces/taf';
import { metarAtom } from 'atoms/metar';
import { tafAtom } from 'atoms/taf';

// DECORATOR
interface DataProps {
  metar: Metar;
  taf: Taf;
}

export const withWeatherData: (Component: FC<DataProps>) => FC = (
  Component
) => () => {
  const metar = useRecoilValue(metarAtom);
  const taf = useRecoilValue(tafAtom);

  return !!metar && !!taf ? (
    <Component metar={metar} taf={taf} />
  ) : (
    <LinearProgress />
  );
};
