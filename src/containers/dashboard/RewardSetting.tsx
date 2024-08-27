"use client";

import { Input } from "@/components";
import React, { useState } from "react";
import { getRewardNameByIndex } from "../../../utils/common";

const RewardSetting = () => {
  const [rewards, setRewards] = useState([
    { name: "1st", amount: 10, numOfWinners: 0 },
  ]);

  const addReward = () => {
    const newIndex = rewards.length > 0 ? rewards.length : 0;
    setRewards((prevRewards) => [
      ...prevRewards,
      {
        name: getRewardNameByIndex(newIndex),
        amount: 0,
        numOfWinners: 0,
      },
    ]);
  };

  const removeReward = (index: number) => {
    setRewards((prevRewards) => prevRewards.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
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
      <div className="flex flex-col gap-4">
        {rewards &&
          rewards.map((reward, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 rounded-2xl p-6 shadow-lg"
            >
              <div className="flex justify-between">
                <h1 className="app-text-headline-small">{reward.name}</h1>
                {rewards.length > 1 && index === rewards.length - 1 && (
                  <div
                    className="text-dangerous"
                    onClick={() => removeReward(index)}
                  >
                    Delete
                  </div>
                )}
              </div>
              <div className="flex gap-6">
                <div className="flex-1">
                  <div className="app-text-body-1">Amount per win</div>
                  <Input
                    placeholder="Token amount"
                    value={reward.amount.toString()}
                    endContent="SWK"
                  />
                </div>
                <div className="flex-1">
                  <div className="app-text-body-1">Number of winners</div>
                  <Input
                    placeholder="Choose Time"
                    value={reward.numOfWinners.toString()}
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
