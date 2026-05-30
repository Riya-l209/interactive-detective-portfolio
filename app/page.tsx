"use client";

import { useState } from "react";

import InvestigationBoard from "./components/InvestigationBoard";
import IntroSequence from "./components/IntroSequence";

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <>
      {!introFinished && (
        <IntroSequence
          onComplete={() => setIntroFinished(true)}
        />
      )}

      <InvestigationBoard />
    </>
  );
}