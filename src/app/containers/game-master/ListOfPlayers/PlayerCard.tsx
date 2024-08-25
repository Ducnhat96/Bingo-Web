import React from "react";
import Image from "next/image";
import { addressShorten } from "../../../../../utils";

interface PlayerCardProps {
  avatarUrl: string;
  name: string;
  address: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({
  avatarUrl,
  name,
  address,
}) => {
  return (
    <div className="flex w-auto flex-col items-center justify-center gap-1">
      <Image
        loading="lazy"
        src={avatarUrl}
        alt="user"
        width={64}
        height={64}
        className="rounded-full"
      />
      <span className="app-text-title-small">{name}</span>
      <span className="app-text-label-small text-mono-alternate">
        {addressShorten(address)}
      </span>
    </div>
  );
};

export default PlayerCard;
