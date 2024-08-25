"use client";

import React, { createContext, useContext, useState } from "react";

export const allNumbers = Array.from({ length: 75 }, (_, index) => index + 1);

interface GameMater {
  currentNumber: number | null;
  lastFiveNumbers: number[];
  allActiveNumbers: number[];
  getRandomNumber: () => void;
}

interface GameMaterProviderProps {
  children?: React.ReactNode;
}

const GameMaterContext = createContext<GameMater>({
  currentNumber: null,
  lastFiveNumbers: [],
  allActiveNumbers: [],
  getRandomNumber: () => {},
});

export const GameMasterProvider = ({
  children,
}: GameMaterProviderProps): any => {
  const [currentNumber, setCurrentNumber] = useState<number | null>(null);
  const [lastFiveNumbers, setLastFiveNumbers] = useState<number[]>([]);
  const [allActiveNumbers, setAllActiveNumbers] = useState<number[]>([]);

  const getRandomNumber = () => {
    const allInactiveNumbers = allNumbers.filter(
      (num) => !allActiveNumbers.includes(num)
    );
    if (allInactiveNumbers.length) {
      const randomIndex = Math.floor(Math.random() * allInactiveNumbers.length);
      const newNumber = allInactiveNumbers[randomIndex];
      setAllActiveNumbers((prev) => [...prev, newNumber]);
      setCurrentNumber(newNumber);
      setLastFiveNumbers((prev) => [newNumber, ...prev.slice(0, 4)]);
    }
  };

  return (
    <GameMaterContext.Provider
      value={{
        currentNumber,
        lastFiveNumbers,
        allActiveNumbers,
        getRandomNumber,
      }}
    >
      {children}
    </GameMaterContext.Provider>
  );
};

export const useGameMater = (): GameMater =>
  useContext<GameMater>(GameMaterContext);
