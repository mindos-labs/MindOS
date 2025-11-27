import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  FolderKanban, 
  MessageSquare, 
  FileText, 
  Cloud, 
  GraduationCap,
  Trophy,
  Settings,
  LogOut
} from "lucide-react";

export function AppSidebar() {
  const navItems = [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "My Projects", href: "/projects", icon: FolderKanban },
    { label: "AI Tutor", href: "/tutor", icon: MessageSquare },
    { label: "MindCloud", href: "/mindcloud", icon: Cloud },
    { label: "MindSchool", href: "/mindschool", icon: GraduationCap },
    { label: "Achievements", href: "/achievements", icon: Trophy },
  ];

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-background">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center border-b px-6">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <span className="text-lg font-bold">M</span>
            </div>
            <span className="text-xl font-bold">MindOS</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="border-t p-4 space-y-2">
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/settings">
              <Settings className="mr-3 h-5 w-5" />
              Settings
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start text-destructive hover:bg-destructive/10 hover:text-destructive">
            <LogOut className="mr-3 h-5 w-5" />
            Logout
          </Button>
        </div>
      </div>
    </aside>
  );
}
