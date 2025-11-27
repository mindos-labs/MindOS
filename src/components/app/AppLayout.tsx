import { AppSidebar } from "./AppSidebar";
import { AppHeader } from "./AppHeader";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <AppSidebar />
      <div className="flex flex-1 flex-col pl-64">
        <AppHeader />
        <main className="flex-1 overflow-y-auto bg-secondary/30 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
