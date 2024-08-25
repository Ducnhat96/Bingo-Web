import React from "react";
import PlayerCard from "./PlayerCard";
import { getAvatarByWalletAddress } from "../../../../../utils";

interface PlayerListProps {
  players: string[];
}

const PlayerList: React.FC<PlayerListProps> = ({ players }) => {
  return (
    <div className="grid h-fit max-h-full w-full flex-1 grid-cols-3 items-start justify-start gap-6 overflow-y-auto">
      {players.map((player, idx) => (
        <PlayerCard
          key={idx}
          avatarUrl={getAvatarByWalletAddress(player)}
          name="Nhat Pham"
          address={player}
        />
      ))}
    </div>
  );
};

export default PlayerList;
