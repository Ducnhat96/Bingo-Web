import React from "react";
import NFTCheck from "./NFTCheck";
import ConnectWalletScreen from "./ConnectWalletScreen";

const PlayerContainer = () => {
  const isWalletConnected = true;

  if (!isWalletConnected) {
    return <ConnectWalletScreen />;
  }

  return <NFTCheck />;
};

export default PlayerContainer;
