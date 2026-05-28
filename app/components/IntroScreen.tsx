"use client";

import { motion } from "framer-motion";

export default function IntroScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="text-center"
    >
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-white text-6xl font-bold tracking-[10px]"
      >
        CASE FILE: RIYA
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="text-gray-400 mt-5 tracking-[4px]"
      >
        ACCESSING CONFIDENTIAL FILES...
      </motion.p>
    </motion.div>
  );
}