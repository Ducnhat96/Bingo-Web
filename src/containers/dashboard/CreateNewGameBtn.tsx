"use client";

import DashboardButton from "@/components/DashboardButton";
import React from "react";
import { IcGameCreateClose, IcPlus } from "../../../public/icons";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const CreateNewGameBtn = () => {
  const router = useRouter();

  return (
    <DashboardButton
      title="Create New Game"
      icon={IcPlus}
      iconAlt="create"
      containerClasses="h-fit"
      onClick={() => router.push("/dashboard/game/create")}
    />
  );
};

export const CloseNewGameScreenBtn = () => {
  const router = useRouter();

  return (
    <div onClick={() => router.push("/dashboard")} className="cursor-pointer">
      <Image src={IcGameCreateClose} alt="close" />
    </div>
  );
};
