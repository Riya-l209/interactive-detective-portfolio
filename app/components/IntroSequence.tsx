"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroSequenceProps {
  onComplete: () => void;
}

export default function IntroSequence({
  onComplete,
}: IntroSequenceProps) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1000),
      setTimeout(() => setStep(2), 2500),
      setTimeout(() => setStep(3), 4500),
      setTimeout(() => onComplete(), 6500),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black text-white flex items-center justify-center z-[999]">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.h1
            key="confidential"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-5xl font-bold tracking-[10px]"
          >
            CONFIDENTIAL
          </motion.h1>
        )}

        {step === 1 && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center"
          >
            <p className="text-xl tracking-[4px]">
              ACCESSING INVESTIGATION ARCHIVE...
            </p>

            <p className="mt-4 text-gray-400">
              Loading Evidence...
            </p>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="subject"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold tracking-[8px]">
              SUBJECT IDENTIFIED
            </h2>

            <p className="mt-4 text-gray-400">
              RIYA BHARDWAJ
            </p>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="opening"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1 }}
            className="
              w-[500px]
              h-[300px]
              bg-[#e7dcc1]
              border-8
              border-[#b89f6d]
              flex
              items-center
              justify-center
              text-black
              text-2xl
              font-bold
            "
          >
            OPENING CASE FILE...
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}