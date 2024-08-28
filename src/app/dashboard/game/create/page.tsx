"use client";
import GameCreationForm from "@/containers/dashboard/GameCreationForm";
import RewardSetting from "@/containers/dashboard/RewardSetting";
import React, { useState } from "react";
import { CloseNewGameScreenBtn } from "@/containers/dashboard/CreateNewGameBtn";
import { Button } from "@nextui-org/react";
import { createNewGameApi } from "@/apis";
import { CreateGameParams, GameDataType, initGameData } from "@/types";
import { toast } from "sonner";
import { mergedDateTime } from "../../../../../utils";

const GameCreate: React.FC = () => {
  const [formData, setFormData] = useState<GameDataType>(initGameData);

  const onCreateGame = async () => {
    try {
      const body: CreateGameParams = {
        title: formData?.gameTitle,
        start_at: mergedDateTime(formData.beginDate, formData.beginTime),
        chain_id: Number(Array.from(formData?.network)[0]),
        prize_token_address: formData.prizeToken,
        nft_token_address: formData.nftContractAddress,
        prizes: [],
      };
      const gameResponse: any = await createNewGameApi(body);
    } catch (e: any) {
      toast.error(e.message);
    }
  };
  return (
    <div className="container mx-auto mt-28 h-full bg-white px-containerDesktop">
      <div className="mb-4 flex">
        <div className="mb-4 flex w-full justify-between">
          <h1 className="app-text-display-small">Create New Game</h1>
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
            void onCreateGame();
          }}
        >
          Create New Game
        </Button>
      </div>
    </div>
  );
};

export default GameCreate;
