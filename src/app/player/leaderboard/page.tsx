import LeaderBoardContainer from "@/components/LeaderBoardContainer";
import Image from "next/image";
import React from "react";
import { ImgPlayerLeaderboard } from "../../../../public/images";

const PlayerLeaderboardScreen = () => {
  const players = [
    {
      id: "1st",
      img: "https://static.ffx.io/images/$width_584/t_resize_width/q_86%2Cf_auto/a76c1590a4ab2ae7219ea36817a6e2dfd6a00c27",
      name: "Luis Dat Lu",
      address: "0x20eE7B720f4E4c4FFcB00C4065cdae55271aECCa",
    },
    {
      id: "2nd",
      img: "https://static.ffx.io/images/$width_584/t_resize_width/q_86%2Cf_auto/a76c1590a4ab2ae7219ea36817a6e2dfd6a00c27",
      name: "Luis Dat Lu",
      address: "0x20eE7B720f4E4c4FFcB00C4065cdae55271aECCa",
    },
    {
      id: "3rd",
      img: "https://static.ffx.io/images/$width_584/t_resize_width/q_86%2Cf_auto/a76c1590a4ab2ae7219ea36817a6e2dfd6a00c27",
      name: "Luis Dat Lu",
      address: "0x20eE7B720f4E4c4FFcB00C4065cdae55271aECCa",
    },
    {
      id: "1st",
      img: "https://static.ffx.io/images/$width_584/t_resize_width/q_86%2Cf_auto/a76c1590a4ab2ae7219ea36817a6e2dfd6a00c27",
      name: "Luis Dat Lu",
      address: "0x20eE7B720f4E4c4FFcB00C4065cdae55271aECCa",
    },
  ];

  return (
    <div className="relative flex h-full min-h-0 w-full flex-col items-center justify-center py-10">
      <Image
        src={ImgPlayerLeaderboard}
        alt="leaderboard"
        className="relative top-[40px] z-0"
      />
      <LeaderBoardContainer
        players={players}
        containerClasses="w-full h-full overflow-auto relative z-10"
        listMainWrapperClasses="mb-0"
        avatarSize={40}
        hideRewardIcon
        headerBlackList={["id"]}
      />
    </div>
  );
};

export default PlayerLeaderboardScreen;
