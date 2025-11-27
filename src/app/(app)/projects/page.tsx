"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Plus, BookOpen, Target, Clock, Calendar } from "lucide-react";
import Link from "next/link";
import { mockProjects } from "@/lib/mock-data";

export default function ProjectsPage() {
  const activeProjects = mockProjects.filter(p => p.status === "active");
  const completedProjects = mockProjects.filter(p => p.status === "completed");

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Projects</h1>
          <p className="text-muted-foreground">Manage your learning projects</p>
        </div>
        <Button asChild>
          <Link href="/projects/new">
            <Plus className="mr-2 h-4 w-4" />
            Create Project
          </Link>
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active</p>
                <p className="text-2xl font-bold">{activeProjects.length}</p>
              </div>
              <BookOpen className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg Mastery</p>
                <p className="text-2xl font-bold">
                  {Math.round(
                    activeProjects.reduce((sum, p) => sum + p.masteryScore, 0) /
                      activeProjects.length
                  )}
                  %
                </p>
              </div>
              <Target className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Completed</p>
                <p className="text-2xl font-bold">{completedProjects.length}</p>
              </div>
              <Target className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Projects */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold">Active Projects</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {activeProjects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                    <CardDescription className="mt-1 line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-semibold">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} />
                </div>

                {/* Mastery Score */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Mastery Score</span>
                  <span className="font-semibold">{project.masteryScore}%</span>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    {project.level}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>

                {/* Study Time */}
                {project.studyHoursPerDay && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{project.studyHoursPerDay}h/day</span>
                  </div>
                )}

                {/* Exam Date */}
                {project.examDate && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Exam: {new Date(project.examDate).toLocaleDateString()}</span>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button asChild className="flex-1" variant="default">
                    <Link href={`/projects/${project.id}`}>Open</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href={`/projects/${project.id}/study`}>Study</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Empty State */}
      {activeProjects.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-16">
            <BookOpen className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No active projects</h3>
            <p className="text-muted-foreground mb-4">Create your first project to start learning!</p>
            <Button asChild>
              <Link href="/projects/new">
                <Plus className="mr-2 h-4 w-4" />
                Create Project
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
