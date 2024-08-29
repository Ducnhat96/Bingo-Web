import React from "react";
import { numbersMap } from "../../../utils/number";
import { Square, Circle } from "@/components";
import { useGameMater } from "@/context/GameMasterProvider";
import clsx from "clsx";

type ChessBoardProps = {
  rows: number;
  columns: number;
  circleSize?: number;
  containerClasses?: string;
  customBtn?: React.ReactNode;
};

const GameBoard: React.FC<ChessBoardProps> = ({
  rows,
  columns,
  circleSize,
  containerClasses,
  customBtn,
}) => {
  const { allActiveNumbers } = useGameMater();
  const squares = Array.from({ length: rows * columns }, (_, index) => {
    const row = Math.floor(index / columns);
    const col = index % columns;

    // Check if rows * cols value is odd number
    const isOdd = (rows * columns) % 2 !== 0;
    const isLight = isOdd ? (row + col) % 2 !== 0 : (row + col) % 2 === 0;

    return {
      id: index,
      isLight,
    };
  });

  return (
    <section
      className={clsx(
        "flex max-w-full flex-col justify-center rounded-2xl bg-accent px-2 py-3.5",
        containerClasses
      )}
    >
      <div className="flex w-full flex-1 flex-col overflow-hidden rounded-2xl border border-accent max-md:max-w-full">
        {Array.from({ length: rows }, (_, rowIndex) => (
          <div
            key={rowIndex}
            className="flex size-full flex-1 flex-wrap max-md:max-w-full"
          >
            {squares
              .slice(rowIndex * columns, (rowIndex + 1) * columns)
              .map((square) => (
                <Square isLight={square.isLight} key={square.id}>
                  <Circle
                    key={square.id}
                    isShow={allActiveNumbers.includes(square.id + 1)}
                    img={numbersMap[square.id + 1]}
                    size={circleSize}
                  />
                </Square>
              ))}
          </div>
        ))}
      </div>
      {customBtn}
    </section>
  );
};

export default GameBoard;
