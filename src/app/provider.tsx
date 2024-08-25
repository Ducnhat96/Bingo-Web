"use client";
import { web3Config } from "@/config";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { type FC } from "react";
import { WagmiProvider } from "wagmi";

interface ProvidersProps {
  children: React.ReactNode;
}
const queryClient = new QueryClient();

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <NextUIProvider>
      <WagmiProvider config={web3Config}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </WagmiProvider>
    </NextUIProvider>
  );
};

export default Providers;
