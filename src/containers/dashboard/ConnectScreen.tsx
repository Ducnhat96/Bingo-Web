"use client";
import React from "react";
import { ButtonCommon } from "@/components";
import { IcConnectWallet } from "../../../public/icons";
import { useAccount } from "wagmi";
import Image from "next/image";
import { useAuth } from "@/context/AuthProvider";
import { addressShorten } from "../../../utils";

const ConnectScreen = () => {
  const { authToken, connectWallet, disconnectWallet } = useAuth();
  const { isConnected, isConnecting, address } = useAccount();

  const isLoading = isConnecting || (isConnected && !authToken);

  const renderWalletConnect = () => {
    {
      if (isConnected && address && authToken) {
        return (
          <ButtonCommon
            title={addressShorten(address)}
            btnClass="bg-primary shadow-none rounded-full w-fit"
            isLoading={isLoading}
            onClick={() => {
              disconnectWallet();
            }}
          />
        );
      }
      return (
        <ButtonCommon
          title="Connect Wallet"
          btnClass="bg-primary shadow-none rounded-full w-fit"
          isLoading={isLoading}
          onClick={() => connectWallet()}
          startContent={
            isLoading ? null : <Image src={IcConnectWallet} alt="Connect" />
          }
        />
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="app-text-headline-medium">Connect your wallet first</h1>
      <p className="app-text-body-large mb-10 mt-3 text-mono-alternate">
        Please connect your wallet yo use the bingo game master features
      </p>
      <div>{renderWalletConnect()}</div>
    </div>
  );
};

export default ConnectScreen;
