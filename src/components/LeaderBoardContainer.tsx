import ListOfLeaderBoard from "@/containers/game-master/ListOfLeaderBoard";
import clsx from "clsx";
import React from "react";

const LeaderBoardContainer = ({
  players,
  containerClasses,
  listMainWrapperClasses,
  avatarSize,
  hideRewardIcon = false,
  headerBlackList = [],
}: {
  players: {
    id: string;
    img: string;
    name: string;
    address: string;
  }[];
  containerClasses?: string;
  listMainWrapperClasses?: string;
  avatarSize?: number;
  hideRewardIcon?: boolean;
  headerBlackList?: string[];
}) => {
  return (
    <section
      className={clsx(
        "flex w-[600px] flex-col justify-center rounded-2xl bg-accent px-2 py-3.5",
        containerClasses
      )}
    >
      <p className="app-text-headline-large text-center">Leaderboard</p>
      <div
        className={clsx(
          "mb-16 mt-6 flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-accent bg-table pt-4 max-md:max-w-full",
          listMainWrapperClasses
        )}
      >
        <div className="w-full flex-1 overflow-auto border-b border-accent">
          <ListOfLeaderBoard
            players={players}
            avatarSize={avatarSize}
            hideRewardIcon={hideRewardIcon}
            headerBlackList={headerBlackList}
          />
        </div>
      </div>
    </section>
  );
};

export default LeaderBoardContainer;
