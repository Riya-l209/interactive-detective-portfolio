"use client";

import WantedPoster from "./WantedPoster";

export default function InvestigationBoard() {
  return (
    <div
      className="
        relative
        w-full
        h-screen
        overflow-hidden
        bg-[#1a1a1a]
        flex
        items-center
        justify-center
      "
    >
      {/* Background texture */}
      <div
        className="
          absolute
          inset-0
          opacity-20
          bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]
        "
      />

      {/* Main Board */}
      <div
        className="
          relative
          w-[1400px]
          h-[850px]
          bg-[#5b4636]
          border-[18px]
          border-[#3a2b20]
          shadow-[0_0_80px_rgba(0,0,0,0.8)]
          overflow-hidden
        "
      >
        {/* Wanted Poster Center */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <WantedPoster />
        </div>

        {/* Red strings */}
        <div className="absolute top-[200px] left-[300px] w-[400px] h-[2px] bg-red-700 rotate-[20deg]" />

        <div className="absolute top-[500px] left-[700px] w-[300px] h-[2px] bg-red-700 rotate-[-30deg]" />
      </div>
    </div>
  );
}