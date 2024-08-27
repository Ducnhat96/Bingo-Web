import React from "react";
import Image from "next/image";
import { addressShorten } from "../../utils";
import clsx from "clsx";

interface PlayerCardHorizontalProps {
  avatarUrl: string;
  name: string;
  address: string;
  isBordered?: boolean;
}

const PlayerCardHorizontal: React.FC<PlayerCardHorizontalProps> = ({
  avatarUrl,
  name,
  address,
  isBordered = false,
}) => {
  return (
    <div
      className={clsx(
        "flex w-auto flex-row items-center justify-center gap-4 rounded-2xl px-4 py-3",
        isBordered ? "border border-primary" : ""
      )}
    >
      <Image
        loading="lazy"
        src={avatarUrl}
        alt="user"
        width={64}
        height={64}
        className="rounded-full"
      />
      <div className="flex flex-col gap-2">
        <span className="app-text-title-small">{name}</span>
        <span className="app-text-label-small text-mono-alternate">
          {addressShorten(address)}
        </span>
      </div>
    </div>
  );
};

export default PlayerCardHorizontal;
