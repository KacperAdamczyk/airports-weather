import { atom } from 'recoil';

import { Metar } from 'interfaces/metar';

export const metarAtom = atom<Metar | null>({
  key: 'metar',
  default: null,
});
