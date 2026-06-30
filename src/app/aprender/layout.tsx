import CourseSidebar from "@/components/course-sidebar";

export default function AprenderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 md:flex-row md:py-12 lg:px-8">
      {/* Sidebar */}
      <aside className="w-full shrink-0 md:w-64 flex flex-col gap-6 md:sticky md:top-24 self-start">
        <CourseSidebar />
        <div className="border-4 border-border bg-card shadow-[4px_4px_0px_0px_var(--secondary)] rounded-none p-1 overflow-hidden">
          <img
            src="/images/hacker-gif-2.gif"
            alt="Visualización temática de ciberseguridad"
            className="w-full h-auto object-contain"
            style={{ imageRendering: "pixelated" }}
          />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        {children}
      </main>
    </div>
  );
}
