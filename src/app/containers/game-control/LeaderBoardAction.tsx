import { ButtonCommon } from "@/components";
import Image from "next/image";
import React from "react";
import { IcLeaderBoard } from "../../../../public/icons";

const LeaderBoardAction: React.FC = () => {
  return (
    <ButtonCommon
      title="Leader board"
      btnClass="w-full bg-[linear-gradient(51deg,#024BFC_0.06%,#02A9F2_100%)] flex flex-row justify-center items-center"
      startContent={<Image src={IcLeaderBoard} alt="Leader" />}
    />
  );
};

export default LeaderBoardAction;
