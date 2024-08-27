"use client";
import { web3Config } from "@/config";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import clsx from "clsx";
import React, { type FC } from "react";
import { WagmiProvider } from "wagmi";
import { Rowdies } from "next/font/google";
import { usePathname } from "next/navigation";

interface ProvidersProps {
  children: React.ReactNode;
}
const queryClient = new QueryClient();

const rowdies = Rowdies({ subsets: ["latin"], weight: "400" });

const Providers: FC<ProvidersProps> = ({ children }) => {
  const pathname = usePathname();

  console.log('pathname', pathname)

  const classes = clsx({
    "bg-home bg-cover bg-primary": pathname !== "/dashboard",
    "bg-white": pathname === "/dashboard"
  });

  return (
    <NextUIProvider>
      <WagmiProvider config={web3Config}>
        <QueryClientProvider client={queryClient}>
          <div className={clsx(rowdies.className, classes)}>
            {children}
          </div>
        </QueryClientProvider>
      </WagmiProvider>
    </NextUIProvider>
  );
};

export default Providers;
