import { Bell, Search, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { mockUser, mockGamification } from "@/lib/mock-data";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6">
      {/* Search */}
      <div className="flex-1">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search projects, tasks, notes..."
            className="pl-9"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* XP & Level */}
        <div className="hidden items-center gap-2 md:flex">
          <Badge variant="secondary" className="gap-1">
            <Trophy className="h-3 w-3" />
            Level {mockGamification.level}
          </Badge>
          <Badge variant="outline">{mockGamification.totalXP} XP</Badge>
        </div>

        {/* Streak */}
        <div className="hidden items-center gap-1 text-sm md:flex">
          <span className="text-2xl">🔥</span>
          <span className="font-semibold">{mockGamification.currentStreak}</span>
        </div>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-destructive"></span>
        </Button>

        {/* User Avatar */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
            {mockUser.name.charAt(0)}
          </div>
          <span className="hidden text-sm font-medium md:inline">{mockUser.name}</span>
        </div>
      </div>
    </header>
  );
}
