import CourseSidebar from "@/components/course-sidebar";

export default function AprenderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 md:flex-row md:py-12 lg:px-8">
      {/* Sidebar */}
      <aside className="w-full shrink-0 md:w-64">
        <CourseSidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        {children}
      </main>
    </div>
  );
}
