import React from "react";
import Image from "next/image";
import { IcGift, IcSWK } from "../../public/icons";

interface RewardValueProps {
  amount: number;
  fontSize?: number;
  imgSize?: number;
  color?: string;
  hideRewardIcon?: boolean;
}

const RewardValue: React.FC<RewardValueProps> = ({
  amount,
  fontSize = 14,
  color = "#45493F",
  imgSize = 24,
  hideRewardIcon = false,
}) => {
  return (
    <div className="flex w-full items-center justify-center gap-2">
      {!hideRewardIcon && (
        <Image
          loading="lazy"
          src={IcGift}
          alt="Gift"
          width={imgSize}
          height={imgSize}
        />
      )}
      <span
        style={{
          fontSize,
          color,
        }}
      >
        {amount.toLocaleString()}
      </span>
      <Image
        loading="lazy"
        src={IcSWK}
        alt="SWK"
        width={imgSize}
        height={imgSize}
      />
      <span
        style={{
          fontSize,
          color,
        }}
      >
        SWK
      </span>
    </div>
  );
};

export default RewardValue;
