import { Circle, LastFiveNumbers } from "@/components";
import React from "react";
import CallAction from "./CallAction";
import EndGameAction from "./EndGameAction";
import LeaderBoardAction from "./LeaderBoardAction";
import { numbersMap } from "../../../../utils/number";
import { useGameMater } from "@/context/GameMasterProvider";

type ChessBoardProps = {};

const GameControl: React.FC<ChessBoardProps> = ({}) => {
  const { currentNumber } = useGameMater();
  return (
    <section className="flex w-full min-w-[520px] max-w-full flex-col justify-center rounded-2xl bg-accent px-2 py-3.5">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-accent bg-table px-4 py-10 max-md:max-w-full">
        <div className="h-[140px] w-[140px]">
          <Circle
            size={140}
            img={currentNumber ? numbersMap[currentNumber] : null}
            isShow={!!currentNumber}
          />
        </div>
        <LastFiveNumbers />
        <CallAction />
        <div className="flex w-full items-center justify-between gap-4">
          <LeaderBoardAction />
          <EndGameAction />
        </div>
      </div>
    </section>
  );
};

export default GameControl;
