"use client";
import GameCreationForm from "@/containers/dashboard/GameCreationForm";
import RewardSetting from "@/containers/dashboard/RewardSetting";
import React, { useState } from "react";
import { CloseNewGameScreenBtn } from "@/containers/dashboard/CreateNewGameBtn";
import { Button } from "@nextui-org/react";
import { createNewGameApi } from "@/apis";
import {
  CreateGameParams,
  GameDataType,
  initGameData,
  RewardType,
} from "@/types";
import { toast } from "sonner";
import { mergedDateTime, SWK_ADDRESS } from "../../../../../utils";
import { TotalRewardGame } from "@/components";
import { useAccount, useReadContract } from "wagmi";
import { Address, erc721Abi } from "viem";

const GameCreate: React.FC = () => {
  const { address } = useAccount();
  const [formData, setFormData] = useState<GameDataType>(initGameData);

  const [rewards, setRewards] = useState<RewardType[]>([
    { name: "1st", amount: 0, quantity: 0 },
  ]);
  const totalAmount = rewards.reduce((reward, current) => {
    const amount = parseFloat(String(current.amount));
    return reward + amount;
  }, 0);

  const playerCount = rewards.reduce((reward, current) => {
    const quantity = current.quantity;
    return reward + quantity;
  }, 0);

  const { data: ownerOfTokenERC721 } = useReadContract({
    abi: erc721Abi,
    address: formData.nftContractAddress as Address,
    functionName: "ownerOf",
  });

  const isOwnerOfTokenERC721 = ownerOfTokenERC721 === address;

  const onCreateGame = async () => {
    try {
      const body: CreateGameParams = {
        title: formData?.gameTitle,
        start_at: mergedDateTime(formData.beginDate, formData.beginTime),
        chain_id: Number(Array.from(formData?.network)[0]),
        prize_token_address: SWK_ADDRESS,
        nft_token_address: formData.nftContractAddress,
        prizes: rewards,
      };
      const gameResponse: any = await createNewGameApi(body);
      if (gameResponse) {
        toast.success("This game is created successfully.");
      }
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
            <GameCreationForm
              formData={formData}
              setFormData={setFormData}
              isOwnerOfTokenERC721={isOwnerOfTokenERC721}
            />
          </div>

          <div className="rounded-lg bg-white p-4">
            <RewardSetting rewards={rewards} setRewards={setRewards} />
          </div>
        </div>
        <TotalRewardGame amount={totalAmount} playerCount={playerCount} />

        <Button
          variant="solid"
          color={isOwnerOfTokenERC721 ? "primary" : "default"}
          isDisabled={!isOwnerOfTokenERC721}
          className="fixed bottom-10 mt-4 self-end rounded-3xl px-4 py-2 font-bold"
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
