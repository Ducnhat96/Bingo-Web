"use client";

import ChainListDropdown from "@/components/ChainListDropdown";
import { User } from "@nextui-org/react";
import { useAccount } from "wagmi";
import { addressShorten, getAvatarByWalletAddress } from "../../../utils";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { address } = useAccount();

  return (
    <section
      id="dashboard_container"
      className="relative flex h-screen max-h-full w-screen flex-col bg-white"
    >
      <div className="container fixed left-0 right-0 top-0 z-10 mx-auto flex h-[80px] w-full items-center justify-between gap-10 bg-white px-containerDesktop">
        <div className="app-text-headline-small flex-1 text-primary">
          Game Master Dashboard
        </div>
        <ChainListDropdown />
        {address && (
          <User
            name="Owner"
            description={addressShorten(address)}
            avatarProps={{
              src: getAvatarByWalletAddress(address),
            }}
            className="rounded-full border-2 border-primary px-3 py-2"
          />
        )}
      </div>
      <div className="fixed left-0 right-0 top-[81px] border-[1px] border-[#F1F3EC]" />
      <div className="container mx-auto flex flex-1 items-center justify-center py-[4rem]">
        {children}
      </div>
    </section>
  );
}
