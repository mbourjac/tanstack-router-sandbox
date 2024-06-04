import { useEffect, useRef, type KeyboardEvent } from 'react';
import type { ReactNode } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { cn } from '../../lib/tailwind.utils';

type ModalProps = {
  className?: string;
  handleCloseModal?: () => void;
  children: ReactNode;
};

export const Modal = ({
  className,
  handleCloseModal,
  children,
}: ModalProps) => {
  const backdropRef = useRef<HTMLDivElement>(null);

  const handleKeyDown =
    handleCloseModal ?
      (event: KeyboardEvent) => {
        if (event.key === 'Escape') handleCloseModal();
      }
    : undefined;

  useEffect(() => {
    const backdrop = backdropRef.current;

    if (!backdrop) {
      throw new Error('backdropRef is not assigned');
    }

    const { body } = document;

    backdrop.focus();

    // prevent body scrolling
    body.style.overflow = 'hidden';
    body.style.height = '100vh';

    return () => {
      // restore body scrolling
      body.style.overflow = 'auto';
      body.style.height = 'auto';
    };
  }, []);

  return (
    <div
      ref={backdropRef}
      onClick={handleCloseModal} // close modal on backdrop click
      onKeyDown={handleKeyDown}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(255,255,255,0.8)]"
      role="button"
      tabIndex={0}
    >
      <motion.dialog
        open
        // prevent closing modal on click
        onClick={
          handleCloseModal ? (event) => event.stopPropagation() : undefined
        }
        className={cn(
          'border-main relative h-1/2 w-1/2 cursor-default overflow-hidden bg-white',
          className,
        )}
        initial={{ scale: 0.925 }}
        animate={{ scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 175,
          damping: 25,
        }}
      >
        {children}
      </motion.dialog>
    </div>
  );
};
