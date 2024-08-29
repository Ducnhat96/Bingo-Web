"use client";
import React, { type FC } from "react";
import Countdown from "react-countdown";
import Image from "next/image";
import { BgCountDownTime } from "../../../public/images";

const GameTimeCountdown: FC = () => {
  return (
    <div className="flex h-auto w-full items-start justify-center">
      <Image
        src={BgCountDownTime}
        alt="countdown"
        className="w-full min-w-[500px]"
      />
      <div className="absolute mt-28 flex w-full flex-col items-center justify-start gap-4">
        <p className="app-text-body-medium">The game will begin in</p>
        <Countdown
          date={Date.now() + 62000000}
          className="text-6xl leading-[60px] tracking-[0.06em] text-primary"
        />
      </div>
    </div>
  );
};

export default GameTimeCountdown;
