import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharItemProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character: React.FC<CharItemProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none" aria-hidden="true">
        {char}
      </span>
      <motion.span style={{ opacity }} className="absolute inset-0 select-text">
        {char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  // Calculate words and character index mappings
  const { wordsData } = useMemo(() => {
    const words = text.split(' ');
    const totalChars = text.length;
    let globalCharIndex = 0;

    const data = words.map((word) => {
      const chars = word.split('').map((char) => {
        const start = globalCharIndex / totalChars;
        const end = Math.min(1, (globalCharIndex + 1) / totalChars);
        globalCharIndex += 1;
        return { char, range: [start, end] as [number, number] };
      });
      // Account for the space between words
      globalCharIndex += 1;
      return chars;
    });

    return { wordsData: data };
  }, [text]);

  return (
    <p ref={containerRef} className={className}>
      {wordsData.map((wordChars, wordIdx) => (
        <span key={wordIdx} className="inline-block whitespace-nowrap">
          {wordChars.map((item, charIdx) => (
            <Character
              key={charIdx}
              char={item.char}
              progress={scrollYProgress}
              range={item.range}
            />
          ))}
          {wordIdx < wordsData.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </p>
  );
};
