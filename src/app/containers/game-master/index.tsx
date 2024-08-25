"use client";
import React, { type FC } from "react";
// import QRJoinGame from "./QRJoinGame";
// import GameTimeCountdown from "./GameTimeCountdown";
// import ListOfPlayers from "./ListOfPlayers";
import GameBoard from "../game-board";
import TotalPlayersAndReward from "./TotalPlayersAndReward";
import GameControl from "../game-control";
import RewardRound from "./RewardRound";

const GameMasterContainer: FC = () => {
  return (
    <div className="min-w-screen-xl relative grid h-full w-full max-w-screen-2xl grid-flow-col grid-cols-3 gap-6">
      <div className="col-span-2 flex h-full w-full items-center justify-center">
        {/* <QRJoinGame /> */}
        <GameBoard rows={8} columns={10} />
      </div>
      <div className="absolute right-0 top-0 flex h-full flex-col gap-4 pb-12">
        <div className="col-span-1 flex h-auto items-start justify-center">
          {/* <GameTimeCountdown /> */}
          <TotalPlayersAndReward playerCount={210} totalReward={1000} />
        </div>
        <div className="flew-1 col-span-1 flex h-auto w-full overflow-hidden">
          {/* <ListOfPlayers playerCount={200} totalRewards={1000} /> */}
          <GameControl />
        </div>
        <div className="h-[200px]">
          <RewardRound amount={122.23} />
        </div>
      </div>
    </div>
  );
};

export default GameMasterContainer;
