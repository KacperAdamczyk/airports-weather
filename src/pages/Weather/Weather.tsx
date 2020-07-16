import React, { useEffect, FC } from 'react';
import { useSetRecoilState } from 'recoil';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';

import { AirportSelector } from 'components/AirportSelector/AirportSelector';
import { TypeTabs } from 'components/TypeTabs/TypeTabs';
import { Api } from 'api/api';
import { metarAtom } from 'atoms/metar';
import { tafAtom } from 'atoms/taf';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Weather: FC = () => {
  const { airport } = useParams();
  const setMetar = useSetRecoilState(metarAtom);
  const setTaf = useSetRecoilState(tafAtom);

  // SINGLETON
  useEffect(() => {
    const api = new Api();

    (async () => {
      const metar = await api.getMetar(airport);
      const taf = await api.getTaf(airport);

      setMetar(metar);
      setTaf(taf);
    })();
  }, [airport, setMetar, setTaf]);

  return (
    <Container>
      <AirportSelector />
      <TypeTabs />
    </Container>
  );
};
