"use client";

import React from "react";
import { IcGameCreateClose, IcPlus } from "../../../public/icons";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@nextui-org/react";

export const CreateNewGameBtn = () => {
  const router = useRouter();

  return (
    <Button
      variant="solid"
      color="primary"
      startContent={<Image src={IcPlus} alt="plus" />}
      className="rounded-full"
      onClick={() => router.push("/dashboard/game/create")}
    >
      Create New Game
    </Button>
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
