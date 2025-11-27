"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Target, 
  Flame, 
  BookOpen, 
  CheckCircle2,
  Clock,
  ArrowRight,
  Plus
} from "lucide-react";
import Link from "next/link";
import { mockDashboardStats, mockProjects, mockTasks, mockRevisions } from "@/lib/mock-data";

export default function DashboardPage() {
  const stats = mockDashboardStats;
  const todayTasks = stats.todayTasks;
  const upcomingRevisions = stats.upcomingRevisions;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your learning progress.</p>
        </div>
        <Button asChild>
          <Link href="/projects/new">
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Link>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeProjects}</div>
            <p className="text-xs text-muted-foreground">
              {stats.totalProjects} total projects
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Mastery Score</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.masteryScore}%</div>
            <Progress value={stats.masteryScore} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
            <Flame className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.streak} days</div>
            <p className="text-xs text-muted-foreground">
              Keep it going! 🔥
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.completedTasks}</div>
            <p className="text-xs text-muted-foreground">
              {stats.totalTasks - stats.completedTasks} remaining
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Today's Tasks */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Today's Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            {todayTasks.length > 0 ? (
              <div className="space-y-3">
                {todayTasks.map((task) => {
                  const project = mockProjects.find(p => p.id === task.projectId);
                  return (
                    <div
                      key={task.id}
                      className="flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50"
                    >
                      <div className="flex h-5 w-5 items-center justify-center">
                        <input type="checkbox" className="h-4 w-4 rounded" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">{task.title}</h4>
                          <Badge variant="outline" className="text-xs">
                            {task.type}
                          </Badge>
                        </div>
                        {task.description && (
                          <p className="text-sm text-muted-foreground">{task.description}</p>
                        )}
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>{project?.title}</span>
                          {task.estimatedMinutes && (
                            <>
                              <span>•</span>
                              <Clock className="h-3 w-3" />
                              <span>{task.estimatedMinutes} min</span>
                            </>
                          )}
                        </div>
                      </div>
                      <Badge
                        variant={
                          task.priority === "high"
                            ? "destructive"
                            : task.priority === "medium"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {task.priority}
                      </Badge>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="py-8 text-center text-muted-foreground">
                <CheckCircle2 className="mx-auto h-12 w-12 mb-2 opacity-50" />
                <p>No tasks scheduled for today!</p>
                <p className="text-sm">Take a break or plan ahead for tomorrow.</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Upcoming Revisions */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Revisions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingRevisions.map((revision) => {
                const daysUntil = Math.ceil(
                  (new Date(revision.scheduledDate).getTime() - new Date().getTime()) /
                    (1000 * 60 * 60 * 24)
                );
                return (
                  <div key={revision.id} className="space-y-1 rounded-lg border p-3">
                    <div className="flex items-start justify-between">
                      <h4 className="font-medium text-sm">{revision.topic}</h4>
                      <Badge variant="secondary" className="text-xs">
                        #{revision.revisionNumber}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {daysUntil === 0
                        ? "Today"
                        : daysUntil === 1
                        ? "Tomorrow"
                        : `In ${daysUntil} days`}
                    </p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Projects */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Active Projects</CardTitle>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/projects">
              View all
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {mockProjects.filter(p => p.status === "active").map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <div className="group rounded-lg border p-4 hover:border-primary hover:shadow-md transition-all">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} />
                    </div>

                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {project.level}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Mastery: {project.masteryScore}%
                      </Badge>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Weekly Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            This Week's Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Study Time</span>
              <span className="text-2xl font-bold">12.5 hrs</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Tasks Completed</span>
              <span className="text-2xl font-bold">18</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Quizzes Taken</span>
              <span className="text-2xl font-bold">7</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
