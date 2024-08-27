"use client";

import ChainListDropdown from "@/components/ChainListDropdown";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      id="dashboard_container"
      className="relative flex h-screen max-h-full w-screen flex-col bg-white"
    >
      <div className="container fixed left-0 right-0 top-0 z-10 mx-auto flex h-[80px] w-full items-center justify-between gap-14 bg-white px-containerDesktop">
        <div className="app-text-headline-small flex-1 text-primary">
          Game Master Dashboard
        </div>
        <ChainListDropdown />
        <div>User</div>
      </div>
      <div className="fixed left-0 right-0 top-[81px] border-[1px] border-[#F1F3EC]"></div>

      <div className="container mx-auto flex flex-1 items-center justify-center py-[4rem]">
        {children}
      </div>
    </section>
  );
}
