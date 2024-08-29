"use client";

import { ButtonCommon, Circle, LastFiveNumbers } from "@/components";
import {
  NotSelfBingoModal,
  PlayerEndGameModal,
  SelfBingoModal,
} from "@/components/modal";
import GameBoard from "@/containers/game-board";
import React, { useEffect, useState } from "react";

const PlayerGameScreen = () => {
  const [isEndGameModalOpen, setIsEndGameModalOpen] = useState(false);
  const [isSelfBingoModalOpen, setIsSelfBingoModalOpen] = useState(false);
  const [isNotSelfBingoModalOpen, setIsNotSelfBingoModalOpen] = useState(true);
  const [circleSize, setCircleSize] = useState<number>(40);
  const NUM_OF_COLS = 5;
  const NUM_OF_ROWS = 5;

  useEffect(() => {
    const handleResize = () => {
      const containerWidth = window.innerWidth;
      setCircleSize(containerWidth / NUM_OF_COLS - 35);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [NUM_OF_COLS]);

  return (
    <div className="relative flex h-full w-full flex-col items-center overflow-auto pb-10">
      <PlayerEndGameModal isOpen={isEndGameModalOpen} onCloseModal={() => {}} />
      <SelfBingoModal isOpen={isSelfBingoModalOpen} onCloseModal={() => {}} />
      <NotSelfBingoModal
        isOpen={isNotSelfBingoModalOpen}
        onCloseModal={() => {}}
      />

      <div className="mt-4 h-[75px] w-[75px]">
        <Circle size={75} />
      </div>
      <LastFiveNumbers
        showTitle={false}
        circleContainerClasses={"min-h-[50px] w-[65vw] mb-4"}
      />
      <GameBoard
        rows={NUM_OF_ROWS}
        columns={NUM_OF_COLS}
        circleSize={circleSize}
        containerClasses="relative pb-14 w-full"
        customBtn={
          <ButtonCommon
            title="Bingo"
            btnClass="w-[60%] mx-auto mt-3 bg-[linear-gradient(51deg,#FFC600_0%,#E6C75B_99.94%)] absolute left-1/2 -translate-x-1/2 -bottom-10"
          />
        }
      />
      <section className="mt-16 flex w-full flex-col items-center justify-center rounded-2xl bg-accent px-2 py-3.5">
        <div className="flex w-full flex-grow flex-col items-center justify-start gap-4 overflow-auto rounded-2xl border border-accent bg-table p-4 max-md:max-w-full">
          <p className="app-text-body-small">The reward for current round</p>
          <h1 className="app-text-title-large text-primary">122.23 SWK</h1>
        </div>
      </section>
    </div>
  );
};

export default PlayerGameScreen;
