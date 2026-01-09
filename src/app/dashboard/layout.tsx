import Navbar from "@/components/nav-bar";
import Sidebar from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        <Navbar />

        {/* Scrollable Children */}
        <div className="overflow-y-auto px-10 py-4">{children}</div>
      </div>
    </div>
  );
}
