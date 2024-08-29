import React from "react";
import Circle from "./Circle";
import { numbersMap } from "../../utils/number";
import { useGameMater } from "@/context/GameMasterProvider";
import clsx from "clsx";

interface LastFiveNumbersProps {
  showTitle?: boolean;
  circleContainerClasses?: string;
}

const LastFiveNumbers: React.FC<LastFiveNumbersProps> = ({
  showTitle = true,
  circleContainerClasses,
}) => {
  const { lastFiveNumbers } = useGameMater();
  return (
    <div className="flex w-full flex-col items-center justify-center">
      {showTitle && (
        <p className="app-text-title-medium text-mono-alternate">
          Last 5 numbers
        </p>
      )}

      <div className="flex w-full flex-1 shrink basis-0 flex-col items-center justify-center px-2 py-3">
        <div
          className={clsx(
            "flex min-h-[80px] w-full gap-2 rounded-full bg-mono-alternate p-2 shadow-number",
            circleContainerClasses
          )}
        >
          {lastFiveNumbers.map((number) => (
            <Circle key={number} isShow={true} img={numbersMap[number]} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LastFiveNumbers;
