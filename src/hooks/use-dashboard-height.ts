import { useDevice } from './use-device';
import { useMobileNavHeight } from './use-mobile-nav-height';

export const useDashboardHeight: (config?: {
  withPadding?: boolean;
}) => string = (config) => {
  const { isSmallDevice, isMediumDevice } = useDevice();
  const { mobileNavHeight } = useMobileNavHeight();

  return `calc(100vh - 11.5rem - ${config?.withPadding ? 2 : 0}rem - ${
    isSmallDevice ? 5.75 : 0
  }rem - ${isMediumDevice ? mobileNavHeight / 16 : 0}rem)`;
};
