import defaultTheme from 'tailwindcss/defaultTheme';
import { useMediaQuery } from './use-media-query';

export const useDevice = () => ({
  isSmallDevice: useMediaQuery(`(max-width: ${defaultTheme.screens.md})`),
  isMediumDevice: useMediaQuery(`(max-width: ${defaultTheme.screens.lg})`),
});
