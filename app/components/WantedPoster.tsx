"use client";

import { motion } from "framer-motion";

export default function WantedPoster() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="
        relative
        w-[320px]
        bg-[#d9c7a3]
        text-black
        p-6
        shadow-2xl
        border-[12px]
        border-[#b89f6d]
        rotate-[-2deg]
      "
    >
      <div className="text-center">
        <h1 className="text-5xl font-extrabold tracking-[6px]">
          WANTED
        </h1>

        <p className="mt-2 text-sm tracking-[3px]">
          CASE FILE #209
        </p>
      </div>

      <div className="mt-6 flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800"
          alt="Riya"
          className="
            w-[220px]
            h-[260px]
            object-cover
            border-4
            border-black
            grayscale
          "
        />
      </div>

      <div className="mt-6 text-center">
        <h2 className="text-3xl font-bold tracking-[3px]">
          RIYA BHARDWAJ
        </h2>

        <p className="mt-3 text-sm leading-6">
          AI Explorer • Data Scientist •
          Creative Technologist
        </p>
      </div>

      <div className="absolute top-4 left-4 w-4 h-4 rounded-full bg-red-700" />
      <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-red-700" />
    </motion.div>
  );
}