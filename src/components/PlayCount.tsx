import React from "react";
import Image from "next/image";
import { IcUser } from "../../public/icons";
import clsx from "clsx";

interface PlayerCountProps {
  count: number;
  containerClasses?: string;
}

const PlayerCount: React.FC<PlayerCountProps> = ({
  count,
  containerClasses,
}) => {
  return (
    <div
      className={clsx(
        "mt-2 flex w-full items-center justify-center gap-1 text-xs font-light leading-none tracking-wide",
        containerClasses
      )}
    >
      <Image loading="lazy" src={IcUser} alt="user" />
      <span className="my-auto text-secondary">
        {count} Player{count !== 1 ? "s" : ""}
      </span>
    </div>
  );
};

export default PlayerCount;
