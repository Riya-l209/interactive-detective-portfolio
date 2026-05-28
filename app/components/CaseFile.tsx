"use client";

import { motion } from "framer-motion";

interface CaseFileProps {
  title: string;
  description: string;
  onClose: () => void;
}

export default function CaseFile({
  title,
  description,
  onClose,
}: CaseFileProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="
        fixed
        inset-0
        bg-black/70
        backdrop-blur-sm
        flex
        items-center
        justify-center
        z-50
      "
    >
      <motion.div
        initial={{ scale: 0.7, rotate: -2 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.4 }}
        className="
          relative
          w-[700px]
          bg-[#e7dcc1]
          text-black
          p-8
          border-[10px]
          border-[#b89f6d]
          shadow-[0_0_80px_rgba(0,0,0,0.9)]
        "
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="
            absolute
            top-4
            right-4
            text-black
            text-2xl
            font-bold
            cursor-pointer
          "
        >
          ✕
        </button>

        <h1 className="text-4xl font-extrabold tracking-[4px]">
          {title}
        </h1>

        <p className="mt-6 leading-8 text-lg text-gray-800">
          {description}
        </p>

        {/* Fake Evidence Image */}
        <div className="mt-8 w-full h-[250px] bg-[#cbbfa5] border border-black flex items-center justify-center">
          <p className="tracking-[4px]">
            EVIDENCE IMAGE
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}