"use client";
import React, { type FC } from "react";
import QRCode from "react-qr-code";
import { WEBSITE_URL } from "../../../../utils";
import Image from "next/image";
import { BgGame } from "../../../../public/images";
import SectionWrapper from "./SectionWrapper";

const QRJoinGame: FC = () => {
  return (
    <SectionWrapper>
      <div className="relative z-20 flex h-full w-full flex-col items-center justify-center gap-6 p-6">
        <p className="app-text-headline-medium text-white">
          Scan QR Code to join the game
        </p>
        <div className="flex h-auto w-full max-w-[400px] items-center justify-center rounded-3xl border-4 border-primary bg-white p-4 2xl:max-w-[500px]">
          <QRCode
            size={500}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={`${WEBSITE_URL}/party/invite/24235235`}
            viewBox="0 0 500 500"
          />
        </div>
      </div>
      <Image
        src={BgGame}
        alt="bg-game"
        className="absolute z-10 h-[80vh] w-full"
        objectFit="contain"
      />
    </SectionWrapper>
  );
};

export default QRJoinGame;
