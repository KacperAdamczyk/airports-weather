import { atom } from 'recoil';

import { Taf } from 'interfaces/taf';

export const tafAtom = atom<Taf | null>({
  key: 'taf',
  default: null,
});
