import { ButtonCommon } from "@/components";
import { PlayerBingoModal } from "@/components/modal";
import { useGameMater } from "@/context/GameMasterProvider";
import React, { useEffect, useState } from "react";

const CallAction: React.FC = () => {
  const { isEndGame, getRandomNumber, setIsEndGame } = useGameMater();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpenModal = () => setIsOpen(true);

  const onCloseModal = () => {
    setIsOpen(false);
    setIsEndGame(false);
  };

  useEffect(() => {
    if (isEndGame) {
      onOpenModal();
    }
  }, [isEndGame]);
  return (
    <>
      <ButtonCommon
        title="Call"
        btnClass="w-full bg-[linear-gradient(51deg,#FFC600_0%,#E6C75B_99.94%)]"
        onClick={getRandomNumber}
      />
      <PlayerBingoModal isOpen={isOpen} onCloseModal={onCloseModal} />
    </>
  );
};

export default CallAction;
