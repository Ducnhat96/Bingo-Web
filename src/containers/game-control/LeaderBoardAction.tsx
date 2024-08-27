import { ButtonCommon } from "@/components";
import Image from "next/image";
import React, { useState } from "react";
import { IcLeaderBoard } from "../../../public/icons";
import { LeaderBoardModal } from "@/components/modal";

const LeaderBoardAction: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpenModal = () => setIsOpen(true);
  const onCloseModal = () => setIsOpen(false);

  return (
    <>
      <ButtonCommon
        title="Leaderboard"
        btnClass="w-full bg-[linear-gradient(51deg,#024BFC_0.06%,#02A9F2_100%)] flex flex-row justify-center items-center"
        startContent={<Image src={IcLeaderBoard} alt="Leader" />}
        onClick={onOpenModal}
      />
      <LeaderBoardModal isOpen={isOpen} onCloseModal={onCloseModal} />
    </>
  );
};

export default LeaderBoardAction;
