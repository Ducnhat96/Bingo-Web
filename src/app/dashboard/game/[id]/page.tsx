import React from "react";
import {
  IcGameEdit,
  IcGameReward,
  IcGameTrash,
  IcUser,
} from "../../../../../public/icons";
import Image from "next/image";
import { addressShorten } from "../../../../../utils";
import DashboardButton from "@/components/DashboardButton";
import StatusBadge, { EGameStatus } from "@/containers/dashboard/StatusBadge";
import ListOfPlayers from "@/containers/dashboard/ListOfPlayers";

interface GameDetailParams {
  id: string;
}

interface GameDetailProps {
  params: GameDetailParams;
}

const GameDetail: React.FC<GameDetailProps> = async ({ params }) => {
  const { id } = params;

  // Hard code
  const gameStatus = EGameStatus.AWAIT;

  const rewardDetails = [
    { name: "1st ranking", rewards: "1,231", maxwin: "1,231" },
    { name: "2nd ranking", rewards: "1,231", maxwin: "1,231" },
    { name: "3rd ranking", rewards: "1,231", maxwin: "1,231" },
  ];

  const players = [
    {
      id: "#1",
      img: "https://static.ffx.io/images/$width_584/t_resize_width/q_86%2Cf_auto/a76c1590a4ab2ae7219ea36817a6e2dfd6a00c27",
      name: "Luis Dat Lu",
      address: "0x20eE7B720f4E4c4FFcB00C4065cdae55271aECCa",
    },
    {
      id: "#2",
      img: "https://static.ffx.io/images/$width_584/t_resize_width/q_86%2Cf_auto/a76c1590a4ab2ae7219ea36817a6e2dfd6a00c27",
      name: "Luis Dat Lu",
      address: "0x20eE7B720f4E4c4FFcB00C4065cdae55271aECCa",
    },
    {
      id: "#3",
      img: "https://static.ffx.io/images/$width_584/t_resize_width/q_86%2Cf_auto/a76c1590a4ab2ae7219ea36817a6e2dfd6a00c27",
      name: "Luis Dat Lu",
      address: "0x20eE7B720f4E4c4FFcB00C4065cdae55271aECCa",
    },
  ];

  const renderGameInfo = () => (
    <>
      <div className="mb-6 mt-2 flex gap-4">
        <div className="flex items-center gap-2">
          <Image src={IcGameReward} alt="" width={25} height={25} />
          <p className="app-text-body-large text-secondary">Total rewards:</p>
        </div>
        <div className="app-text-headline-medium flex gap-3">
          <p>1231</p>
          <p>SWK</p>
        </div>
      </div>
      <div className="flex w-[80%] justify-between">
        <div className="flex flex-col gap-1">
          <p className="app-text-body-small text-mono-alternate">Network</p>
          <p className="app-text-body-medium text-secondary">Binance</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="app-text-body-small text-mono-alternate">Begin Time</p>
          <p className="app-text-body-medium text-secondary">
            14:00 - 09/31/2024
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="app-text-body-small text-mono-alternate">
            Total Players
          </p>
          <p className="app-text-body-medium text-secondary">241</p>
        </div>
      </div>
    </>
  );

  const renderNftRequirement = () => (
    <div className="mt-6 flex flex-col">
      <p className="app-text-body-large">NFT Requirement</p>
      <div className="mt-3 flex items-center gap-3 rounded-2xl border-1 p-3">
        <div className="h-full max-h-[50px] w-full max-w-[50px]">
          <Image
            src="https://static.ffx.io/images/$width_584/t_resize_width/q_86%2Cf_auto/a76c1590a4ab2ae7219ea36817a6e2dfd6a00c27"
            alt="img"
            className="h-full rounded-[8px] object-cover"
            width={50}
            height={50}
          />
        </div>
        <div className="flex flex-col justify-center gap-2">
          <p
            className="app-text-body-medium"
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "400px",
            }}
          >
            Persistence of Time by Vladmir
          </p>
          <p className="app-text-label-medium text-left text-mono-alternate">
            Contract address:{" "}
            <span className="">
              {addressShorten("0x20eE7B720f4E4c4FFcB00C4065cdae55271aECCa")}
            </span>
          </p>
        </div>
      </div>
    </div>
  );

  const renderRewardDetail = () => (
    <div className="mt-6 flex flex-col">
      <p className="app-text-body-large">Reward Detail</p>
      {rewardDetails.map((detail) => (
        <div
          key={detail.name}
          className="mt-3 flex flex-col items-center gap-3 rounded-2xl border-1 px-4 py-2"
        >
          <h5 className="app-text-title-medium self-start text-primary">
            {detail.name}
          </h5>
          <div className="flex w-full justify-between">
            <div className="flex items-center gap-2">
              <Image src={IcGameReward} alt="" width={15} height={15} />
              <p className="app-text-body-small">Rewards:</p>
              <p className="app-text-body-large">{detail.rewards}</p>
              <p className="app-text-body-large">SWK</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={IcUser} alt="" width={15} height={15} />
              <p className="app-text-body-small">Max Winners:</p>
              <p className="app-text-body-large">{detail.maxwin}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderOptions = () => {
    if (gameStatus === EGameStatus.AWAIT) {
      return (
        <div className="flex items-center">
          <div className="flex flex-1 items-center gap-20">
            <div className="flex items-center gap-2">
              <Image src={IcGameTrash} alt="trash" className="cursor-pointer" />
              Delete
            </div>
            <div className="flex items-center gap-2">
              <Image src={IcGameEdit} alt="edit" className="cursor-pointer" />
              Edit
            </div>
          </div>
          <DashboardButton title="Open The Game" containerClasses="w-fit" />
        </div>
      );
    }

    if (gameStatus === EGameStatus.AWAIT_DISTRIBUTE) {
      return (
        <div className="flex w-full justify-end">
          <DashboardButton
            title="Distribute Rewards"
            containerClasses="w-fit"
          />
        </div>
      );
    }

    return null;
  };

  return (
    <div className="container mx-auto mt-28 flex h-full gap-20 bg-white px-containerDesktop">
      <div className="flex h-[85%] flex-1 flex-col">
        <div className="mb-4 flex flex-1 flex-col">
          <div className="mb-4 flex w-full items-center gap-4">
            <h1 className="app-text-display-small">Cat Lover Bingo</h1>
            <StatusBadge text="Await Start" colorScheme={EGameStatus.AWAIT} />
          </div>
          {renderGameInfo()}
          {renderNftRequirement()}
          {renderRewardDetail()}
        </div>
        {renderOptions()}
      </div>
      <div
        className="h-[90%] flex-1 overflow-auto rounded-2xl border-1 px-8 py-6"
        style={{ height: "calc(100vh - 200px)" }}
      >
        <ListOfPlayers players={players} />
      </div>
    </div>
  );
};

export default GameDetail;
