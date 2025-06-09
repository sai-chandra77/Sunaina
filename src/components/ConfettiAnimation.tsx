
import React, { useEffect, useState } from 'react';

const ConfettiAnimation = () => {
  const [confetti, setConfetti] = useState<Array<{ id: number; color: string; left: number; delay: number }>>([]);

  useEffect(() => {
    const colors = [
      '#8b45be', // violet
      '#7c3aed', // deep violet
      '#9333ea', // purple
      '#a855f7', // light purple
      '#c084fc', // lavender
      '#d8b4fe', // light lavender
      '#ff6b9d', // pink
      '#ffd93d', // yellow
      '#6bcf7f', // green
      '#ff8c42', // orange
      '#00d4ff', // cyan
      '#ff3838'  // red
    ];
    const newConfetti = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      color: colors[Math.floor(Math.random() * colors.length)],
      left: Math.random() * 100,
      delay: Math.random() * 3
    }));
    setConfetti(newConfetti);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-2 h-2 animate-confetti"
          style={{
            backgroundColor: piece.color,
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            borderRadius: '2px'
          }}
        />
      ))}
    </div>
  );
};

export default ConfettiAnimation;
