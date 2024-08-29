export default function PlayerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative flex h-screen max-h-full w-full px-4 items-center justify-center">
      {children}
    </section>
  );
}
