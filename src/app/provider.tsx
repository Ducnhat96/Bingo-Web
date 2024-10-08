"use client";
import { web3Config } from "@/config";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import clsx from "clsx";
import React, { type FC } from "react";
import { WagmiProvider } from "wagmi";
import { Rowdies } from "next/font/google";
import { usePathname } from "next/navigation";
import { AuthProvider } from "@/context/AuthProvider";

interface ProvidersProps {
  children: React.ReactNode;
}
const queryClient = new QueryClient();

const rowdies = Rowdies({ subsets: ["latin"], weight: "400" });

const Providers: FC<ProvidersProps> = ({ children }) => {
  const pathname = usePathname();

  const classes = clsx(rowdies.className, {
    "bg-home bg-cover bg-primary": pathname !== "/dashboard",
    "bg-white": pathname === "/dashboard",
  });

  return (
    <NextUIProvider>
      <WagmiProvider config={web3Config}>
        <QueryClientProvider client={queryClient}>
          <div className={classes}>
            <AuthProvider>{children}</AuthProvider>
          </div>
        </QueryClientProvider>
      </WagmiProvider>
    </NextUIProvider>
  );
};

export default Providers;
