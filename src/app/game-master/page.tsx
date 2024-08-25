import { GameMasterProvider } from "@/context/GameMasterProvider";
import GameMasterContainer from "../containers/game-master";

export default function GameMasterPage() {
  return (
    <GameMasterProvider>
      <GameMasterContainer />
    </GameMasterProvider>
  );
}
