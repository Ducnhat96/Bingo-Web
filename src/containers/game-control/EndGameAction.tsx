import { ButtonCommon } from "@/components";
import { EndGameModal } from "@/components/modal";
import React, { useState } from "react";

const EndGameAction: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpenModal = () => setIsOpen(true);
  const onCloseModal = () => setIsOpen(false);
  return (
    <>
      <ButtonCommon
        title="End Game"
        btnClass="bg-[#C0C2BA] w-full"
        onClick={onOpenModal}
      />
      <EndGameModal isOpen={isOpen} onCloseModal={onCloseModal} />
    </>
  );
};

export default EndGameAction;
