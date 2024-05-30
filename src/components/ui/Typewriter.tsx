import { useEffect, useState } from 'react';

type TypewriterProps = {
  text: string;
  delay?: number;
  className?: string;
};

export const Typewriter = ({
  text,
  delay = 100,
  className,
}: TypewriterProps) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const updatedText = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(updatedText);
    }
  }, [currentIndex, delay, text]);

  return <span className={className}>{currentText}</span>;
};
