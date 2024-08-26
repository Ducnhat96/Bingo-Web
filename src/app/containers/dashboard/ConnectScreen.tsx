import React from "react";
import Image from "next/image";
import { IcConnectWallet } from "../../../../public/icons";
import DashboardButton from "@/components/DashboardButton";

const ConnectScreen = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="app-text-headline-medium">Connect your wallet first</h1>
      <p className="text-alternate app-text-body-large mb-10 mt-3">
        Please connect your wallet yo use the bingo game master features
      </p>
      <DashboardButton title="Connect Wallet" icon={IcConnectWallet} iconAlt="Connect" />
    </div>
  );
};

export default ConnectScreen;
