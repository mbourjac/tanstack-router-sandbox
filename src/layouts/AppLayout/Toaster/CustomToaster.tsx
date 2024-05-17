import { AnimatePresence } from 'framer-motion';
import { useToaster } from 'react-hot-toast';
import { CustomToast } from './CustomToast';

export const CustomToaster = () => {
  const { toasts, handlers } = useToaster();
  const { startPause, endPause, calculateOffset, updateHeight } = handlers;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999]"
      onMouseEnter={startPause}
      onMouseLeave={endPause}
    >
      <div className="absolute inset-4 border-8 border-transparent">
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
      <div className="absolute inset-0 z-[10000] border-[1rem] border-white"></div>
    </div>
  );
};
