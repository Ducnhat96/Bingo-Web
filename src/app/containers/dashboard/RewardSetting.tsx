"use client";

import { Input } from "@/components";
import React, { useState } from "react";

const RewardSetting = () => {
  const [rewards, setRewards] = useState([
    { id: 1, name: "1st", amount: 10, numOfWinners: 0 },
    { id: 2, name: "2nd", amount: 40, numOfWinners: 0 },
    { id: 3, name: "3rd", amount: 1, numOfWinners: 0 },
  ]);

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="app-text-headline-medium text-2xl font-semibold">
          Reward Setting
        </h2>
        <button className="flex h-fit items-center gap-1 rounded px-4 py-2 text-primary">
          <span className="app-text-headline-small mb-[2px]">+</span> Create New
          Reward
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {rewards &&
          rewards.map((reward) => (
            <div
              key={reward.id}
              className="flex flex-col gap-2 rounded-2xl p-6 shadow-lg"
            >
              <h1 className="app-text-headline-small">{reward.name}</h1>
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
