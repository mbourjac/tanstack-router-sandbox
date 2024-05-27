import { AnimatePresence } from 'framer-motion';
import { useToaster } from 'react-hot-toast';
import { CustomToast } from './CustomToast';

type CustomToasterProps = {
  toastsLimit?: number;
  reverseOrder?: boolean;
  gutter?: number;
};

export const CustomToaster = ({
  toastsLimit = 3,
  reverseOrder = false,
  gutter = 8,
}: CustomToasterProps) => {
  const { toasts, handlers } = useToaster();
  const { startPause, endPause, calculateOffset, updateHeight } = handlers;

  return (
    <div
      className="pointer-events-none fixed inset-4 z-[9999] border-8 border-transparent"
      onMouseEnter={startPause}
      onMouseLeave={endPause}
    >
      <AnimatePresence>
        {toasts.map((toast, index) => (
          <CustomToast
            key={toast.id}
            toast={toast}
            offset={calculateOffset(toast, {
              reverseOrder,
              gutter,
            })}
            isOverLimit={index > toastsLimit - 1}
            updateHeight={updateHeight}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
