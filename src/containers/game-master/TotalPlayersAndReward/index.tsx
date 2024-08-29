"use client";
import React, { type FC } from "react";
import Image from "next/image";
import { BgCountDownTime } from "../../../../public/images";
import { PlayerCount, RewardValue } from "@/components";
import CountDownBoard from "@/components/CountDownBoard";

interface TotalPlayersAndRewardProps {
  playerCount: number;
  totalReward?: number;
}

const TotalPlayersAndReward: FC<TotalPlayersAndRewardProps> = ({
  playerCount = 0,
  totalReward,
}) => {
  return (
    <CountDownBoard boardClasses="min-w-[500px]">
      <div className="absolute mt-28 flex w-full flex-col items-center justify-start gap-8">
        <p className="app-text-header-large">Cat Lover Bingo</p>
        <div className="flex w-full items-center justify-between">
          <PlayerCount count={playerCount} />
          {totalReward && <RewardValue amount={totalReward} />}
        </div>
      </div>
    </CountDownBoard>
  );
};

export default TotalPlayersAndReward;
