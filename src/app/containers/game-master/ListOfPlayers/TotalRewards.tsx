import Image from "next/image";
import React from "react";
import { ImgNumberRandom } from "../../../../../public/images";
import { RewardValue } from "@/components";

interface TotalRewardsProps {
  amount: number;
}

const TotalRewards: React.FC<TotalRewardsProps> = ({ amount }) => {
  return (
    <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-3">
      <p className="text-center text-base tracking-normal text-stone-700">
        Total Rewards of this game
      </p>
      <RewardValue amount={amount} fontSize={36} color="#080C01" imgSize={32} />
      <Image
        loading="lazy"
        src={ImgNumberRandom}
        alt="number list"
        className="absolute bottom-0 left-0 z-20 h-auto w-full"
      />
    </div>
  );
};

export default TotalRewards;
