import { CloseNewGameScreenBtn } from "@/containers/dashboard/CreateNewGameBtn";
import GameCreationForm from "@/containers/dashboard/GameCreationForm";
import RewardSetting from "@/containers/dashboard/RewardSetting";
import { GameDataType, initGameData } from "@/types";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";

const GameEdit: React.FC = async () => {
  const [formData, setFormData] = useState<GameDataType>(initGameData);
  const onUpdateGame = async () => {};
  return (
    <div className="container mx-auto mt-28 h-full bg-white px-containerDesktop">
      <div className="mb-4 flex">
        <div className="mb-4 flex w-full justify-between">
          <h1 className="app-text-display-small">Edit Game</h1>
          <CloseNewGameScreenBtn />
        </div>
      </div>
      <div className="container mx-auto flex flex-col pb-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white">
            <h2 className="app-text-headline-medium mb-4 text-2xl font-semibold">
              Game Information
            </h2>
            <GameCreationForm formData={formData} setFormData={setFormData} />
          </div>
          <div className="rounded-lg bg-white p-4">
            <RewardSetting />
          </div>
        </div>

        <Button
          variant="solid"
          color="primary"
          className="fixed bottom-10 mt-4 self-end rounded-3xl px-4 py-2 font-bold text-white"
          onClick={() => {
            void onUpdateGame();
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default GameEdit;
