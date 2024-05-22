import { type RefObject, useState, useEffect } from 'react';

export const useBoundingBox = <T extends HTMLElement>({
  elementRef,
  isRoundedUp = true,
}: {
  elementRef: RefObject<T>;
  isRoundedUp?: boolean;
}) => {
  const [boundingBox, setBoundingBox] = useState<{
    top: number;
    left: number;
    width: number;
    height: number;
  }>({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      throw new Error('elementRef is not assigned');
    }

    const updateBoundingBox = async () => {
      await document.fonts.ready;

      const boundingBox = element.getBoundingClientRect();
      const { top, left, width, height } = boundingBox;
      const roundedUpBoundingBox = {
        top,
        left,
        width: Math.ceil(width),
        height: Math.ceil(height),
      };

      setBoundingBox(isRoundedUp ? roundedUpBoundingBox : boundingBox);
    };

    void updateBoundingBox();

    const handleResize = () => void updateBoundingBox();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [elementRef, isRoundedUp]);

  return boundingBox;
};
