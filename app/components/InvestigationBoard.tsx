"use client";

import WantedPoster from "./WantedPoster";
import EvidenceCard from "./EvidenceCard";

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

        {/* Tata Motors */}
<EvidenceCard
  title="TATA MOTORS"
  subtitle="Road Extraction Mission"
  top="80px"
  left="120px"
  rotation="-8deg"
/>

{/* Tata Steel */}
<EvidenceCard
  title="TATA STEEL"
  subtitle="Industrial Data Investigation"
  top="500px"
  left="180px"
  rotation="6deg"
/>

{/* AI Project */}
<EvidenceCard
  title="MISSION 03"
  subtitle="AI Captioning System"
  top="120px"
  left="980px"
  rotation="8deg"
/>

{/* Forecasting */}
<EvidenceCard
  title="MISSION 04"
  subtitle="Stock Forecasting Engine"
  top="520px"
  left="980px"
  rotation="-6deg"
/>

        {/* Red strings */}
        <div className="absolute top-[200px] left-[300px] w-[400px] h-[2px] bg-red-700 rotate-[20deg]" />

        <div className="absolute top-[500px] left-[700px] w-[300px] h-[2px] bg-red-700 rotate-[-30deg]" />
      </div>
    </div>
  );
}