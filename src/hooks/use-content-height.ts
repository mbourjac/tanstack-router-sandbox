import { useDevice } from './use-device';
import { useMobileNavHeight } from './use-mobile-nav-height';

export const useContentHeight: (
  content: 'public' | 'protected' | 'fixedDashboard' | 'scrollDashboard',
) => string = (content) => {
  const { isSmallDevice, isMediumDevice } = useDevice();
  const { mobileNavHeight } = useMobileNavHeight();

  const isPublic = content === 'public';
  const isProtected = content === 'protected';

  const isFixedDashboard = content === 'fixedDashboard';
  const isScrollDashboard = content === 'scrollDashboard';

  const isDashboard = isFixedDashboard || isScrollDashboard;

  return `calc(100vh - ${7.75 + (isPublic ? 0 : 3.75)}rem - ${
    isProtected || isFixedDashboard ? 2 : 0
  }rem - ${isDashboard && isSmallDevice ? 5.75 : 0}rem - ${
    isMediumDevice ? mobileNavHeight / 16 : 0
  }rem)`;
};
