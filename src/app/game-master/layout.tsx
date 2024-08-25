export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative flex h-screen max-h-full w-screen items-center justify-center">
      {children}
    </section>
  );
}
