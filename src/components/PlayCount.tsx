import React from "react";
import Image from "next/image";
import { IcUser } from "../../public/icons";

interface PlayerCountProps {
  count: number;
}

const PlayerCount: React.FC<PlayerCountProps> = ({ count }) => {
  return (
    <div className="mt-2 flex w-full items-center justify-center gap-1 text-xs font-light leading-none tracking-wide">
      <Image loading="lazy" src={IcUser} alt="user" />
      <span className="my-auto text-secondary">
        {count} Player{count !== 1 ? "s" : ""}
      </span>
    </div>
  );
};

export default PlayerCount;
