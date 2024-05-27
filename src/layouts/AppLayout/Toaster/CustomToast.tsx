import { useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Toast, useToaster } from 'react-hot-toast';
import { toast as baseToast } from 'react-hot-toast';

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
  const { id, visible, message, height } = toast;

  const toastRef = (node: HTMLButtonElement | null) => {
    if (node && !height) {
      const height = node.getBoundingClientRect().height;
      updateHeight(id, height);
    }
  };

  const offset = calculateOffset(toast, {
    reverseOrder: false,
    gutter: 8,
  });

  const isOverLimit = index > 2;

  useEffect(() => {
    if (isOverLimit) baseToast.dismiss(id);
  }, [id, isOverLimit]);

  return (
    <motion.button
      ref={toastRef}
      className="border-main pointer-events-auto absolute bottom-4 right-4 w-96 bg-white px-6 py-4 text-left"
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: -offset,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: 'spring', damping: 15 }}
      onClick={() => baseToast.dismiss(id)}
    >
      {typeof message === 'function' ? message(toast) : message}
    </motion.button>
  );
};
