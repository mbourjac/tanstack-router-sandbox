import { AnimatePresence } from 'framer-motion';
import { useToaster } from 'react-hot-toast';
import { CustomToast } from './CustomToast';

export const CustomToaster = () => {
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
            index={index}
            updateHeight={updateHeight}
            calculateOffset={calculateOffset}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
