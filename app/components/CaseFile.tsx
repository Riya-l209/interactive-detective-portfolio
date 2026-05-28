"use client";

import { motion } from "framer-motion";

interface CaseFileProps {
  title: string;
  description: string;
  image: string;
  onClose: () => void;
}

export default function CaseFile({
  title,
  description,
  image,
  onClose,
}: CaseFileProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="
        fixed
        inset-0
        bg-black/80
        backdrop-blur-sm
        flex
        items-center
        justify-center
        z-50
        p-6
      "
    >
      {/* Main File */}
      <motion.div
        initial={{ scale: 0.7, rotate: -2 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.4 }}
        className="
          relative
          w-[850px]
          bg-[#e7dcc1]
          text-black
          p-8
          border-[12px]
          border-[#b89f6d]
          shadow-[0_0_100px_rgba(0,0,0,0.9)]
        "
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="
            absolute
            top-4
            right-5
            text-3xl
            font-bold
            cursor-pointer
          "
        >
          ✕
        </button>

        {/* Top Stamp */}
        <div className="absolute top-5 left-5 rotate-[-12deg] border-4 border-red-700 px-4 py-2 text-red-700 font-bold tracking-[3px]">
          CLASSIFIED
        </div>

        {/* Title */}
        <h1 className="text-5xl font-extrabold tracking-[5px] mt-10">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-gray-700 tracking-[3px]">
          INVESTIGATION REPORT
        </p>

        {/* Content Layout */}
        <div className="mt-10 grid grid-cols-2 gap-8">
          {/* Left */}
          <div>
            <img
              src={image}
              alt={title}
              className="
                w-full
                h-[320px]
                object-cover
                border-4
                border-black
                shadow-xl
              "
            />

            <div className="mt-5 bg-[#d8ccb0] p-4 border border-black">
              <p className="text-sm tracking-[2px] leading-7">
                EVIDENCE LOG #04
              </p>

              <p className="mt-3 text-sm text-gray-700">
                Verified industrial investigation records.
              </p>
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="bg-[#d8ccb0] border border-black p-5">
              <h2 className="text-2xl font-bold tracking-[3px]">
                CASE SUMMARY
              </h2>

              <p className="mt-5 leading-8 text-gray-800">
                {description}
              </p>
            </div>

            {/* Fake Notes */}
            <div className="mt-6 bg-[#d8ccb0] border border-black p-5 rotate-[-2deg]">
              <h3 className="font-bold tracking-[2px]">
                DETECTIVE NOTES
              </h3>

              <ul className="mt-4 space-y-3 text-sm">
                <li>• AI-powered workflow analysis</li>
                <li>• Real-world industrial exposure</li>
                <li>• Built scalable systems</li>
                <li>• Performance validated</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}