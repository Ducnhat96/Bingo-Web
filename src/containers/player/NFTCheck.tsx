"use client";

import CountDownBoard from "@/components/CountDownBoard";
import Image from "next/image";
import { addressShorten } from "../../../utils";
import { ButtonCommon } from "@/components";
import { IcDisconnect } from "../../../public/icons";

export default function NFTCheck() {
  const isNFTValid = true;

  const renderCheckNFTInfo = () => {
    if (!isNFTValid) {
      return (
        <>
          <h5 className="app-text-title-medium">
            You haven&apos;t had this NFT yet
          </h5>
          <p className="app-text-label-medium text-center text-secondary">
            Please join the Party Chat &quot;
            <span className="text-primary">Cat Lover</span>&quot; in Avacus Web3
            app to get this NFT
          </p>
          <ButtonCommon
            title="Click To Join Party Chat"
            btnClass="w-[80%] mx-auto mt-3 bg-[linear-gradient(51deg,#FFC600_0%,#E6C75B_99.94%)]"
          />
        </>
      );
    }

    return (
      <>
        <h5 className="app-text-title-medium">
          You owned the NFT in your wallet
        </h5>
        <p className="app-text-label-medium text-center text-secondary">
          Congratulation! You have meet the condition to join this game. Go to
          the waiting room and prepare for getting your own rewards.
        </p>
        <ButtonCommon
          title="Go To Waiting Room"
          btnClass="w-[80%] mx-auto mt-3 bg-[linear-gradient(51deg,#FFC600_0%,#E6C75B_99.94%)]"
        />
      </>
    );
  };

  const renderUserInfo = () => (
    <section className="absolute bottom-8 flex w-full flex-col items-center justify-center rounded-2xl bg-accent px-2 py-3.5">
      <div className="flex h-full w-full items-center justify-between gap-4 overflow-hidden rounded-2xl border border-accent bg-table px-4 py-3 max-md:max-w-full">
        <div className="flex items-center gap-3">
          <div className="h-full max-h-[50px] w-full max-w-[50px]">
            <Image
              src="https://static.ffx.io/images/$width_584/t_resize_width/q_86%2Cf_auto/a76c1590a4ab2ae7219ea36817a6e2dfd6a00c27"
              alt="img"
              className="h-full rounded-full object-cover"
              width={50}
              height={50}
            />
          </div>
          <div className="flex flex-col justify-center gap-2">
            <p
              className="app-text-label-large"
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: "350px",
              }}
            >
              Luis Dat Lu
            </p>
            <p className="app-text-label-medium text-left text-mono-alternate">
              {addressShorten("0x20eE7B720f4E4c4FFcB00C4065cdae55271aECCa")}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Image src={IcDisconnect} alt="disconnect" />
          <p className="app-text-label-medium text-danger">Disconnect</p>
        </div>
      </div>
    </section>
  );

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center">
      <CountDownBoard
        containerClasses="w-full absolute top-0 left-0 h-fit"
        boardClasses="min-w-[0px]"
      >
        <div className="absolute left-1/2 top-2/3 flex w-full -translate-x-1/2 -translate-y-2/3 transform flex-col items-center justify-start gap-4">
          <h5 className="app-text-body-medium">NFT Require to join the game</h5>
          <div className="flex items-center gap-3">
            <div className="h-full max-h-[50px] w-full max-w-[50px]">
              <Image
                src="https://static.ffx.io/images/$width_584/t_resize_width/q_86%2Cf_auto/a76c1590a4ab2ae7219ea36817a6e2dfd6a00c27"
                alt="img"
                className="h-full rounded-[8px] object-cover"
                width={50}
                height={50}
              />
            </div>
            <div className="flex flex-col justify-center gap-2">
              <p
                className="app-text-title-medium text-primary"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "350px",
                }}
              >
                Persistence of Time by Vladmir
              </p>
              <p className="app-text-label-medium text-left text-mono-alternate">
                Contract address:{" "}
                <span className="app-text-label-medium text-black">
                  {addressShorten("0x20eE7B720f4E4c4FFcB00C4065cdae55271aECCa")}
                </span>
              </p>
            </div>
          </div>
        </div>
      </CountDownBoard>
      <section className="flex w-full flex-col items-center justify-center rounded-2xl bg-accent px-2 py-3.5">
        <h1 className="app-text-headline-large pb-3">Check NFT</h1>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-accent bg-table px-4 py-10 max-md:max-w-full">
          {renderCheckNFTInfo()}
        </div>
      </section>
      {renderUserInfo()}
    </div>
  );
}
