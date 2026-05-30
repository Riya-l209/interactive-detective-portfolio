"use client";

import { useState } from "react";

import WantedPoster from "./WantedPoster";
import EvidenceCard from "./EvidenceCard";
import CaseFile from "./CaseFile";
import Flashlight from "./Flashlight";

import { cases } from "../data/cases";

export default function InvestigationBoard() {
  const [activeCase, setActiveCase] = useState<string | null>(null);

  const selectedCase = cases.find(
    (item) => item.id === activeCase
  );

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
      <Flashlight />
      {/* Background Texture */}
      <div
        className="
          absolute
          inset-0
          opacity-20
          bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]
        "
      />

      {/* Investigation Board */}
      <div
        className="
          relative
          w-[1600px]
          h-[950px]
          bg-[#5b4636]
          border-[18px]
          border-[#3a2b20]
          shadow-[0_0_100px_rgba(0,0,0,0.8)]
          overflow-hidden
        "
      >
        {/* Wanted Poster */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <WantedPoster />
        </div>

        {/* Dynamic Evidence Cards */}
        {cases.map((item) => (
          <EvidenceCard
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            top={item.top}
            left={item.left}
            rotation={item.rotation}
            onClick={() => setActiveCase(item.id)}
          />
        ))}
      </div>

      {/* Dynamic Popup */}
      {selectedCase && (
        <CaseFile
          title={selectedCase.title}
          description={selectedCase.description}
          image={selectedCase.image}
          onClose={() => setActiveCase(null)}
        />
      )}
    </div>
  );
}