"use client";

import { DashboardButton } from "@/components";
import DistributeRewardsModal from "@/components/modal/DistributeRewardsModal";
import React, { useState } from "react";

const DistributeRewardsBtn = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <DistributeRewardsModal
        isOpen={isOpenModal}
        onCloseModal={() => setIsOpenModal(false)}
      />
      <div
        className="flex w-full justify-end"
        onClick={() => setIsOpenModal(true)}
      >
        <DashboardButton title="Distribute Rewards" containerClasses="w-fit" />
      </div>
    </>
  );
};

export default DistributeRewardsBtn;
