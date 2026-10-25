import React, { useRef, useState, useEffect, useCallback } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  className?: string;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  className = '',
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('translate3d(0px, 0px, 0px)');
  const [transition, setTransition] = useState(inactiveTransition);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const isWithinBounds =
        e.clientX >= rect.left - padding &&
        e.clientX <= rect.right + padding &&
        e.clientY >= rect.top - padding &&
        e.clientY <= rect.bottom + padding;

      if (isWithinBounds) {
        const dx = (e.clientX - centerX) / strength;
        const dy = (e.clientY - centerY) / strength;
        setIsHovered(true);
        setTransition(activeTransition);
        setTransform(`translate3d(${dx}px, ${dy}px, 0px)`);
      } else if (isHovered) {
        setIsHovered(false);
        setTransition(inactiveTransition);
        setTransform('translate3d(0px, 0px, 0px)');
      }
    },
    [padding, strength, activeTransition, inactiveTransition, isHovered]
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div
      ref={containerRef}
      className={`inline-block ${className}`}
      style={{
        transform,
        transition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};
