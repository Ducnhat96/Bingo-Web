import React from "react";
import { numbersMap } from "../../../utils/number";
import { Square, Circle } from "@/components";
import { useGameMater } from "@/context/GameMasterProvider";

type ChessBoardProps = {
  rows: number;
  columns: number;
};

const GameBoard: React.FC<ChessBoardProps> = ({ rows, columns }) => {
  const { allActiveNumbers } = useGameMater();
  const squares = Array.from({ length: rows * columns }, (_, index) => ({
    id: index,
    isLight: (Math.floor(index / columns) + index) % 2 === 0,
  }));

  return (
    <section className="flex max-w-full flex-col justify-center rounded-2xl bg-accent px-2 py-3.5">
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
                  />
                </Square>
              ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default GameBoard;
