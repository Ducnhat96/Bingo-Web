import GameCreationForm from "@/app/containers/dashboard/GameCreationForm";
import React from "react";

const GameCreate: React.FC = async () => {
  return (
    <div className="container mx-auto mt-28 h-full px-containerDesktop">
      <div className="mb-4 flex">
        <div className="flex flex-1 items-end gap-4">
          <h1 className="app-text-display-small text-center">
            Create New Game
          </h1>
        </div>
        X
      </div>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white">
            <h2 className="mb-4 text-2xl font-semibold">Game Setting</h2>
            <GameCreationForm />
          </div>

          <div className="rounded-lg bg-white p-4">
            <div className="mb-4 flex items-center">
              <h2 className="text-2xl font-semibold">Reward Setting</h2>
              <button className="h-fit rounded px-4 py-2 text-primary">
                Create New Reward
              </button>
            </div>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">Rank</th>
                  <th className="px-4 py-2">Amount per Win</th>
                  <th className="px-4 py-2">Max Winners</th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>

        <button className="mt-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700">
          Create New Game
        </button>
      </div>
    </div>
  );
};

export default GameCreate;
