import { useEffect } from 'react';

export const useFixedBody = () => {
  const { body } = document;

  useEffect(() => {
    body.style.overflow = 'hidden';
    body.style.height = '100vh';

    return () => {
      body.style.overflow = 'auto';
      body.style.height = 'auto';
    };
  }, [body]);
};
