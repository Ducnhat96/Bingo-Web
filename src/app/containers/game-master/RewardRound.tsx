import { RewardValue } from "@/components";
import React from "react";

interface RewardRoundProps {
  amount: number;
}
const RewardRound: React.FC<RewardRoundProps> = ({ amount }) => {
  return (
    <section className="flex h-[150px] max-w-full flex-col justify-center rounded-2xl bg-accent px-2 py-3.5">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-accent bg-table px-4 max-md:max-w-full">
        <p className="app-text-title-medium text-mono-alternate">
          The reward for current round
        </p>
        <RewardValue amount={amount} fontSize={28} color="#71a504" />
      </div>
    </section>
  );
};

export default RewardRound;
