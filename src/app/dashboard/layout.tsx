export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section id="dashboard_container" className="relative h-screen max-h-full w-screen flex flex-col bg-white">
      <div className="fixed top-0 left-0 right-0 flex w-full gap-14 px-containerDesktop container mx-auto items-center justify-between bg-white z-10 h-[80px]">
        <div className="flex-1 app-text-headline-small text-primary">Game Master Dashboard</div>
        <div>icon</div>
        <div>User</div>
      </div>
      <div className="fixed top-[81px] left-0 right-0 border-[1px] border-[#F1F3EC]"></div>

      <div className="flex-1 py-[4rem] container mx-auto flex items-center justify-center">
        {children}
      </div>
    </section>
  );
}
