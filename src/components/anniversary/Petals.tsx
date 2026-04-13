'use client';

import { useMemo } from "react";

const PETALS = ["🌸", "🌺", "🌷", "💮", "🏵️"];

export default function Petals({ count = 12 }: { count?: number }) {
  const petals = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      emoji: PETALS[i % PETALS.length],
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      duration: `${8 + Math.random() * 10}s`,
      size: `${0.8 + Math.random() * 1}rem`,
    }));
  }, [count]);

  return (
    <>
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal select-none"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            fontSize: p.size,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </>
  );
}
