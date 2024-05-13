import { useEffect } from 'react';
import type { Toast, useToaster } from 'react-hot-toast';
import { toast as baseToast } from 'react-hot-toast';
import { motion } from 'framer-motion';

type UseToasterHandlers = ReturnType<typeof useToaster>['handlers'];

type CustomToastProps = {
  toast: Toast;
  index: number;
  calculateOffset: UseToasterHandlers['calculateOffset'];
  updateHeight: UseToasterHandlers['updateHeight'];
};

export const CustomToast = ({
  toast,
  index,
  calculateOffset,
  updateHeight,
}: CustomToastProps) => {
  const ref = (element: HTMLButtonElement) => {
    if (element && typeof toast.height !== 'number') {
      const height = element.getBoundingClientRect().height;
      updateHeight(toast.id, height);
    }
  };

  const offset = calculateOffset(toast, {
    reverseOrder: false,
    gutter: 8,
  });

  const isOverLimit = index > 2;

  useEffect(() => {
    if (isOverLimit) {
      baseToast.dismiss(toast.id);
    }
  }, [toast, isOverLimit]);

  return (
    <motion.button
      ref={ref}
      className="border-main pointer-events-auto absolute bottom-4 right-4 w-96 bg-white px-6 py-4 text-left"
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: -offset,
        opacity: toast.visible ? 1 : 0,
      }}
      transition={{ type: 'spring', damping: 15 }}
      onClick={() => baseToast.dismiss(toast.id)}
    >
      {typeof toast.message === 'function' ?
        toast.message(toast)
      : toast.message}
    </motion.button>
  );
};
