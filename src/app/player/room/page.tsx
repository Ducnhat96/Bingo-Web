"use client";

import CountDownBoard from "@/components/CountDownBoard";
import ListOfPlayers from "@/containers/game-master/ListOfPlayers";
import WaitingRoom from "@/containers/player/WaitingRoom";
import Countdown from "react-countdown";

export default function WaitingRoomScreen() {
  const isWaitingForPlayer = false;

  if (!isWaitingForPlayer) {
    return <WaitingRoom />;
  }

  return (
    <div className="relative flex h-full w-full flex-col">
      <CountDownBoard
        containerClasses="w-full absolute top-0 left-0 h-fit"
        boardClasses="min-w-[0px]"
      >
        <div className="absolute left-1/2 top-2/3 flex w-full -translate-x-1/2 -translate-y-2/3 transform flex-col items-center justify-start gap-4">
          <p className="app-text-body-medium text-secondary">
            The game will begin in
          </p>
          <Countdown
            date={Date.now() + 62000000}
            renderer={({ hours, minutes, seconds }) => {
              return (
                <span className="app-text-display-medium leading-[60px] tracking-[0.06em] text-primary">
                  {hours}:{minutes}:{seconds}
                </span>
              );
            }}
          />
        </div>
      </CountDownBoard>
      <ListOfPlayers
        playerCount={200}
        totalRewards={1000}
        sectionClasses="mb-8 mt-[220px] min-h-0 w-full"
      />
    </div>
  );
}
