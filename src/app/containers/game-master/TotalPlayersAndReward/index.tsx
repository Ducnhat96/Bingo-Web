"use client";
import React, { type FC } from "react";
import Image from "next/image";
import { BgCountDownTime } from "../../../../../public/images";
import { PlayerCount, RewardValue } from "@/components";

interface TotalPlayersAndRewardProps {
  playerCount: number;
  totalReward: number;
}

const TotalPlayersAndReward: FC<TotalPlayersAndRewardProps> = ({
  playerCount = 0,
  totalReward,
}) => {
  return (
    <div className="flex h-auto w-full items-start justify-center">
      <Image
        src={BgCountDownTime}
        alt="countdown"
        className="w-full min-w-[500px]"
        priority
      />
      <div className="absolute mt-28 flex w-full flex-col items-center justify-start gap-8">
        <p className="app-text-header-large">Cat Lover Bingo</p>
        <div className="flex w-full items-center justify-between">
          <PlayerCount count={playerCount} />
          <RewardValue amount={totalReward} />
        </div>
      </div>
    </div>
  );
};

export default TotalPlayersAndReward;
