import React from "react";
import TotalRewards from "./TotalRewards";
import PlayerList from "./PlayerList";
import { PlayerCount } from "@/components";
import clsx from "clsx";

interface ListOfPlayersProps {
  playerCount: number;
  totalRewards: number;
  sectionClasses?: string;
}

const players = [
  "0xB7d550FA8A29667c6Be4bFD56a867a67e7c8A56f",
  "0xa9f196E3b646682cb285285e972e4632d1Cf4e70",
  "0x598E13def9F5a0ab2609a07394e796970F161e82",
  "0x48DFdAAB50a9AB7a4a82b9087343Da5A03E2fB28",
  "0x34b78997597ae2ad066968ee1E8DfEE3F14839F9",
  "0x03FCeFE0787b602782d24cC8dA579675ac450637",
  "0x2ECD847Cb10645dc0491068eb6d717C4Ad9996d3",
  "0xFbdfE3A1D61c517CE87146eEb2f03167b8A98dDE",
  "0xB14d071f1D8Cce247D48f575aA56330850c88023",
  "0xB7d550FA8A29667c6Be4bFD56a867a67e7c8A56f",
  "0xa9f196E3b646682cb285285e972e4632d1Cf4e70",
  "0x598E13def9F5a0ab2609a07394e796970F161e82",
  "0x48DFdAAB50a9AB7a4a82b9087343Da5A03E2fB28",
  "0x34b78997597ae2ad066968ee1E8DfEE3F14839F9",
  "0x03FCeFE0787b602782d24cC8dA579675ac450637",
  "0x2ECD847Cb10645dc0491068eb6d717C4Ad9996d3",
  "0xFbdfE3A1D61c517CE87146eEb2f03167b8A98dDE",
  "0xB14d071f1D8Cce247D48f575aA56330850c88023",
  "0xB7d550FA8A29667c6Be4bFD56a867a67e7c8A56f",
  "0xa9f196E3b646682cb285285e972e4632d1Cf4e70",
  "0x598E13def9F5a0ab2609a07394e796970F161e82",
  "0x48DFdAAB50a9AB7a4a82b9087343Da5A03E2fB28",
  "0x34b78997597ae2ad066968ee1E8DfEE3F14839F9",
  "0x03FCeFE0787b602782d24cC8dA579675ac450637",
  "0x2ECD847Cb10645dc0491068eb6d717C4Ad9996d3",
  "0xFbdfE3A1D61c517CE87146eEb2f03167b8A98dDE",
  "0xB14d071f1D8Cce247D48f575aA56330850c88023",
  "0xB7d550FA8A29667c6Be4bFD56a867a67e7c8A56f",
  "0xa9f196E3b646682cb285285e972e4632d1Cf4e70",
  "0x598E13def9F5a0ab2609a07394e796970F161e82",
  "0x48DFdAAB50a9AB7a4a82b9087343Da5A03E2fB28",
  "0x34b78997597ae2ad066968ee1E8DfEE3F14839F9",
  "0x03FCeFE0787b602782d24cC8dA579675ac450637",
  "0x2ECD847Cb10645dc0491068eb6d717C4Ad9996d3",
  "0xFbdfE3A1D61c517CE87146eEb2f03167b8A98dDE",
  "0xB14d071f1D8Cce247D48f575aA56330850c88023",
];

const ListOfPlayers: React.FC<ListOfPlayersProps> = ({
  playerCount,
  totalRewards,
  sectionClasses,
}) => {
  return (
    <section className={clsx("flex h-full w-full flex-col", sectionClasses)}>
      <div className="flex h-full w-full flex-col justify-center overflow-hidden rounded-2xl bg-accent px-2 py-4">
        <header className="flex w-full max-w-full flex-col gap-2 self-center text-center">
          <p className="app-text-header-large">List Of Players</p>
          <PlayerCount count={playerCount} />
        </header>
        <main className="mt-4 flex h-full w-full flex-1 items-start justify-center gap-2 overflow-hidden rounded-2xl bg-table p-4">
          {players.length > 0 ? (
            <PlayerList players={players} />
          ) : (
            <TotalRewards amount={totalRewards} />
          )}
        </main>
      </div>
    </section>
  );
};

export default ListOfPlayers;
