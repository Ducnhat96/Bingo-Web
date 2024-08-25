import { ButtonCommon } from "@/components";
import { useGameMater } from "@/context/GameMasterProvider";
import React from "react";

const CallAction: React.FC = () => {
  const { getRandomNumber } = useGameMater();
  return (
    <ButtonCommon
      title="Call"
      btnClass="w-full bg-[linear-gradient(51deg,#FFC600_0%,#E6C75B_99.94%)]"
      onClick={getRandomNumber}
    />
  );
};

export default CallAction;
