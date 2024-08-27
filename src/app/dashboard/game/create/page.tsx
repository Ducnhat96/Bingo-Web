import GameCreationForm from "@/app/containers/dashboard/GameCreationForm";
import RewardSetting from "@/app/containers/dashboard/RewardSetting";
import React from "react";
import { IcGameCreateClose } from "../../../../../public/icons";
import Image from "next/image";

const GameCreate: React.FC = async () => {
  return (
    <div className="container mx-auto mt-28 h-full px-containerDesktop bg-white">
      <div className="mb-4 flex">
        <div className="mb-4 flex justify-between w-full">
          <h1 className="app-text-display-small">Create New Game</h1>
          <Image src={IcGameCreateClose} alt="close" />
        </div>
      </div>
      <div className="container mx-auto flex flex-col py-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white">
            <h2 className="app-text-headline-medium mb-4 text-2xl font-semibold">
              Game Setting
            </h2>
            <GameCreationForm />
          </div>

          <div className="rounded-lg bg-white p-4">
            <RewardSetting />
          </div>
        </div>

        <button className="mt-4 self-end rounded-3xl bg-alternate px-4 py-2 font-bold text-white">
          Create New Game
        </button>
      </div>
    </div>
  );
};

export default GameCreate;
