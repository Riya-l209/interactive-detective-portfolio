"use client";

import { motion } from "framer-motion";

interface EvidenceCardProps {
  title: string;
  subtitle: string;
  image: string;
  top: string;
  left: string;
  rotation?: string;
  onClick?: () => void;
}

export default function EvidenceCard({
  title,
  subtitle,
  image,
  top,
  left,
  rotation = "0deg",
  onClick,
}: EvidenceCardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{
        scale: 1.05,
        rotate: "0deg",
        y: -5,
      }}
      transition={{ duration: 0.3 }}
      className="
        absolute
        w-[230px]
        bg-[#efe4c9]
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

      <div className="mt-4 overflow-hidden border border-black">
        <img
          src={image}
          alt={title}
          className="
            w-full
            h-[130px]
            object-cover
            grayscale
            hover:grayscale-0
            transition-all
            duration-500
          "
        />
      </div>

      <div className="mt-3 text-xs tracking-[3px] text-gray-700">
        CLASSIFIED
      </div>
    </motion.div>
  );
}