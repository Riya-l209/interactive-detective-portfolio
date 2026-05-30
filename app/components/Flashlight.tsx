"use client";

import { useEffect, useState } from "react";

export default function Flashlight() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMove
      );
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-40"
      style={{
        background: `
          radial-gradient(
            circle 220px at ${position.x}px ${position.y}px,
            transparent,
            rgba(0,0,0,0.85)
          )
        `,
      }}
    />
  );
}