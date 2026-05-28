"use client";

import { motion } from "framer-motion";

interface EvidenceCardProps {
  title: string;
  subtitle: string;
  top: string;
  left: string;
  rotation?: string;
}

export default function EvidenceCard({
  title,
  subtitle,
  top,
  left,
  rotation = "0deg",
}: EvidenceCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        rotate: "0deg",
      }}
      transition={{ duration: 0.3 }}
      className="
        absolute
        w-[220px]
        bg-[#e7dcc1]
        p-4
        shadow-2xl
        border
        border-black
        cursor-pointer
      "
      style={{
        top,
        left,
        rotate: rotation,
      }}
    >
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-black font-bold text-lg">
            {title}
          </h2>

          <p className="text-gray-700 text-sm mt-2">
            {subtitle}
          </p>
        </div>

        <div className="w-3 h-3 bg-red-700 rounded-full" />
      </div>

      <div className="mt-4 h-[120px] bg-[#cbbfa5] border border-black flex items-center justify-center">
        <p className="text-black text-sm tracking-[2px]">
          EVIDENCE
        </p>
      </div>
    </motion.div>
  );
}