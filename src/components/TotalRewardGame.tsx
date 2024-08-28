import React from "react";
import Image from "next/image";
import { IcSWK } from "../../public/icons";

interface TotalRewardGameProps {
  amount: number;
  playerCount: number;
}

const TotalRewardGame: React.FC<TotalRewardGameProps> = ({
  amount = 0,
  playerCount = 1,
}) => {
  return (
    <div className="fixed bottom-10 mt-8 flex w-fit flex-col gap-2 rounded-2xl border-2 border-primary px-4 py-2">
      <p className="app-text-body-medium">Total rewards of this game is </p>
      <div className="flex w-full items-center justify-start gap-2">
        <span className="app-text-headline-medium text-primary">
          {amount.toLocaleString()}
        </span>
        <Image loading="lazy" src={IcSWK} alt="SWK" width={36} height={36} />
        <span className="app-text-headline-medium text-primary">SWK</span>
        <span className="app-text-body-large">({playerCount} winners)</span>
      </div>
    </div>
  );
};

export default TotalRewardGame;
