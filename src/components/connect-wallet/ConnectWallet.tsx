"use client";
import { Button } from "@nextui-org/react";
import { FC } from "react";
import { useAccount } from "wagmi";
import { useAuth } from "@/context/AuthProvider";
import { addressShorten } from "../../../utils";
import ButtonCommon from "../Button";
import Image from "next/image";
import { IcAvacusLogo } from "../../../public/icons";

const ConnectWallet: FC = () => {
  const { authToken, connectWallet, disconnectWallet } = useAuth();
  const { isConnected, address, isConnecting } = useAccount();

  const isLoading = isConnecting || (isConnected && !authToken);

  if (isConnected && address && authToken)
    return (
      <Button
        color="primary"
        onClick={() => {
          disconnectWallet();
        }}
      >
        {addressShorten(address)}
      </Button>
    );

  return (
    <div>
      <ButtonCommon
        title="Connect Avacus Wallet"
        btnClass="w-fit bg-attention flex-row justify-center items-center"
        onClick={() => connectWallet()}
        isLoading={isLoading}
        startContent={
          isLoading ? null : <Image src={IcAvacusLogo} alt="avacus" />
        }
      />
    </div>
  );
};

export default ConnectWallet;
