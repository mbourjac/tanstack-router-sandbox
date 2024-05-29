import defaultTheme from 'tailwindcss/defaultTheme';
import { useMediaQuery } from './use-media-query';

export const useIsMobile = () =>
  useMediaQuery(`(max-width: ${defaultTheme.screens.lg})`);
