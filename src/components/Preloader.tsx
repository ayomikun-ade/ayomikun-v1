"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const bootSequence = [
  "INITIALIZING_KERNEL...",
  "LOADING_MODULES...",
  "VERIFYING_INTEGRITY...",
  "ESTABLISHING_UPLINK...",
  "SYSTEM_ONLINE",
];

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  // const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // setDimensions({
    //   width: window.innerWidth,
    //   height: window.innerHeight,
    // });

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev === 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    const textInterval = setInterval(() => {
      setTextIndex((prev) =>
        prev < bootSequence.length - 1 ? prev + 1 : prev,
      );
    }, 450);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, []);

  useEffect(() => {
    if (count === 100) {
      // Add a small delay after hitting 100% before finishing
      const timeout = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [count, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-9999 bg-black flex items-center justify-center overflow-hidden cursor-wait"
    >
      <div className="w-full max-w-md px-6">
        {/* Progress Bar Container */}
        <div className="mb-4 flex justify-between items-end font-mono text-xs text-gray-500">
          <span>{"<ayomikun/>"}</span>
          <span>{count}%</span>
        </div>

        <div className="h-1 w-full bg-gray-900 overflow-hidden relative">
          <motion.div
            className="h-full bg-accent absolute top-0 left-0"
            style={{ width: `${count}%` }}
          />
          {/* Glitch overlay on bar */}
          <motion.div
            className="absolute inset-0 bg-white/20"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          />
        </div>

        {/* Status Text */}
        <div className="mt-2 h-6 font-mono text-sm text-accent uppercase tracking-widest overflow-hidden">
          {bootSequence[textIndex]}
          <span className="animate-pulse">_</span>
        </div>

        {/* Decorative Grid Lines */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-1/2 left-0 w-full h-px bg-accent/30"></div>
          <div className="absolute left-1/2 top-0 w-px h-full bg-accent/30"></div>
        </div>

        {/* Random Numbers Stream */}
        <div className="absolute bottom-10 right-10 font-mono text-[10px] text-gray-700 text-right opacity-50 hidden sm:block">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i}>
              0x{Math.random().toString(16).slice(2, 8).toUpperCase()}
            </div>
          ))}
        </div>
      </div>

      {/* Curtain Reveal Effect on Exit (Visualized as separate panels if we wanted split, but fade is cleaner for this minimal style) */}
    </motion.div>
  );
}
