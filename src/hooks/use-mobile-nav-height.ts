import { atom, useAtom } from 'jotai';

const mobileNavHeightAtom = atom(0);

export const useMobileNavHeight = () => {
  const [mobileNavHeight, setMobileNavHeight] = useAtom(mobileNavHeightAtom);

  return {
    mobileNavHeight,
    setMobileNavHeight,
  };
};
