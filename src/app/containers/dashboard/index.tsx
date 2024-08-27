import React, { type FC } from "react";
import ConnectScreen from "./ConnectScreen";
import BingoList from "./BingoList";
import DashboardButton from "@/components/DashboardButton";
import { IcPlus } from "../../../../public/icons";
import { EGameStatus } from "./StatusBadge";

const DashboardContainer: FC = () => {
  const user = true;

  const games = [
    {
      id: 1,
      title: "Cat Lover Bingo",
      nftRequirement: {
        title: "Persistence of Time bla bla bla bla",
        image:
          "https://static.ffx.io/images/$width_584/t_resize_width/q_86%2Cf_auto/a76c1590a4ab2ae7219ea36817a6e2dfd6a00c27",
        address: "0x20eE7B720f4E4c4FFcB00C4065cdae55271aECCa",
      },
      beginTime: "14:00 09/31/2024",
      totalPlayers: 242,
      totalRewards: "1.213 SWK",
      status: "Await Start",
      colorScheme: EGameStatus.AWAIT,
    },
    {
      id: 2,
      title: "Cat Lover Bingo",
      nftRequirement: {
        title: "Persistence of Time bla bla bla bla",
        image:
          "https://static.ffx.io/images/$width_584/t_resize_width/q_86%2Cf_auto/a76c1590a4ab2ae7219ea36817a6e2dfd6a00c27",
        address: "0x20eE7B720f4E4c4FFcB00C4065cdae55271aECCa",
      },
      beginTime: "14:00 09/31/2024",
      totalPlayers: 241,
      totalRewards: "1.213 SWK",
      status: "Await Distribute",
      colorScheme: EGameStatus.AWAIT_DISTRIBUTE,
    },
    {
      id: 3,
      title: "Cat Lover Bingo",
      nftRequirement: {
        title: "Persistence of Time bla bla bla bla",
        image:
          "https://static.ffx.io/images/$width_584/t_resize_width/q_86%2Cf_auto/a76c1590a4ab2ae7219ea36817a6e2dfd6a00c27",
        address: "0x20eE7B720f4E4c4FFcB00C4065cdae55271aECCa",
      },
      beginTime: "14:00 09/31/2024",
      totalPlayers: 241,
      totalRewards: "1.213 SWK",
      status: "Finished",
      colorScheme: EGameStatus.FINISHED,
    },
  ];

  if (!user) {
    return <ConnectScreen />;
  }

  return (
    <div className="container mx-auto mt-28 h-full px-containerDesktop">
      <div className="mb-4 flex">
        <div className="flex flex-1 items-end gap-4">
          <h1 className="app-text-display-small text-center">
            List Of Bingo Game
          </h1>
          <p className="app-text-label-large text-mono-alternate">
            Total:{" "}
            <span className="app-text-body-large text-secondary">8 Games</span>
          </p>
        </div>
        <DashboardButton
          title="Create New Game"
          icon={IcPlus}
          iconAlt="create"
          containerClasses="h-fit"
        />
      </div>
      <BingoList games={games} />
    </div>
  );
};

export default DashboardContainer;
