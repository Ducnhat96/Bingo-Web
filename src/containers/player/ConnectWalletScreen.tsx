import CountDownBoard from "@/components/CountDownBoard";
import React from "react";
import Image from "next/image";
import { ImgHomeHero, ImgNumberRandom } from "../../../public/images";
import ConnectWallet from "@/components/connect-wallet";

const ConnectWalletScreen = () => {
  return (
    <>
      <div className="relative flex h-full w-full flex-col items-center justify-center">
        <CountDownBoard
          containerClasses="w-full absolute top-0 left-0 h-fit"
          boardClasses="min-w-[0px]"
        >
          <div className="absolute left-1/2 top-2/3 flex w-full -translate-x-1/2 -translate-y-2/3 transform flex-col items-center justify-start gap-8">
            <h5 className="app-text-body-medium text-secondary">
              Name Of The Game
            </h5>
            <h1 className="app-text-headline-small">Cat Lover Bingo</h1>
          </div>
        </CountDownBoard>
        <Image
          src={ImgHomeHero}
          alt="bg-game"
          className="z-10 mb-10 w-full"
          objectFit="contain"
        />
        <ConnectWallet />
      </div>
      <Image
        src={ImgNumberRandom}
        alt="bg-game"
        className="absolute bottom-0 left-0 z-10 w-full"
        objectFit="contain"
      />
    </>
  );
};

export default ConnectWalletScreen;
