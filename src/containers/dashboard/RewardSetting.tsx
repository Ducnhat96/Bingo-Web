"use client";

import { Input } from "@/components";
import React, { FC } from "react";
import { getRewardNameByIndex } from "../../../utils/common";
import { RewardType } from "@/types";

interface RewardSettingProps {
  rewards: any;
  setRewards: (rewards: any) => any;
}

const RewardSetting: FC<RewardSettingProps> = ({ rewards, setRewards }) => {
  const addReward = () => {
    const newIndex = rewards.length > 0 ? rewards.length : 0;
    setRewards((prevRewards: RewardType[]) => [
      ...prevRewards,
      {
        name: getRewardNameByIndex(newIndex),
        amount: 0,
        quantity: 0,
      },
    ]);
  };

  const removeReward = (index: number) => {
    setRewards((prevRewards: RewardType[]) =>
      prevRewards.filter((_, i) => i !== index)
    );
  };

  const handleAmountChange = (index: number, value: number) => {
    setRewards((prevRewards: RewardType[]) =>
      prevRewards.map((reward, i) => {
        if (i === index) {
          return { ...reward, amount: value };
        }
        return reward;
      })
    );
  };

  const handleNumOfWinnersChange = (index: number, value: number) => {
    setRewards((prevRewards: RewardType[]) =>
      prevRewards.map((reward, i) => {
        if (i === index) {
          return { ...reward, quantity: value };
        }
        return reward;
      })
    );
  };

  return (
    <>
      <div className="mb-4 flex items-center justify-between px-6">
        <h2 className="app-text-headline-medium text-2xl font-semibold">
          Reward Setting
        </h2>
        <button
          className="flex h-fit items-center gap-1 rounded px-4 py-2 text-primary"
          onClick={addReward}
        >
          <span className="app-text-headline-small mb-[2px]">+</span> Create New
          Reward
        </button>
      </div>
      <div className="flex max-h-[60vh] flex-col gap-6 overflow-y-auto p-6">
        {rewards &&
          rewards.map((reward: RewardType, index: number) => (
            <div
              key={index}
              className="flex flex-col gap-2 rounded-2xl p-6 shadow-card"
            >
              <div className="flex justify-between">
                <h1 className="app-text-headline-small">{reward.name}</h1>
                {rewards.length > 1 && index === rewards.length - 1 && (
                  <button
                    className="text-dangerous"
                    onClick={() => removeReward(index)}
                  >
                    Delete
                  </button>
                )}
              </div>
              <div className="flex gap-6">
                <div className="flex-1">
                  <div className="app-text-body-1">Amount per win</div>
                  <Input
                    type="text"
                    placeholder="Token amount"
                    value={reward.amount.toString()}
                    onChange={(e: any) => {
                      handleAmountChange(index, e.target.value);
                    }}
                    endContent="SWK"
                  />
                </div>
                <div className="flex-1">
                  <div className="app-text-body-1">Number of winners</div>
                  <Input
                    type="number"
                    placeholder="Choose number of winners"
                    value={reward.quantity.toString()}
                    onChange={(e: any) => {
                      const formatNumber = Number(e.target.value);
                      handleNumOfWinnersChange(index, formatNumber);
                    }}
                    endContent="winner(s)"
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default RewardSetting;
