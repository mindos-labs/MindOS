// Type definitions for MindOS

export type LearningLevel = "beginner" | "intermediate" | "pro";
export type LearningStyle = "visual" | "text" | "practice-based";
export type ProjectDuration = "1-week" | "1-month" | "3-months" | "semester";
export type RememberDuration = "1-week" | "till-exam" | "1-month" | "forever";
export type ProjectStatus = "active" | "paused" | "completed" | "archived";
export type TaskType = "study" | "quiz" | "flashcard" | "revision" | "practice" | "mindmap" | "elaboration";
export type Priority = "low" | "medium" | "high";
export type QuizType = "mcq" | "fill-blank" | "true-false" | "short-answer";
export type Difficulty = "easy" | "medium" | "hard";
export type DocumentType = "pdf" | "notes" | "ppt" | "image" | "link" | "video";
export type ChatRole = "user" | "assistant" | "system";

// Onboarding Data
export interface OnboardingData {
	topic: string;
	goal?: string;
	duration?: ProjectDuration;
	rememberDuration?: RememberDuration;
	level?: LearningLevel;
	learningStyle?: LearningStyle;
	studyHoursPerDay?: number;
	examDate?: Date;
	weakAreas?: string[];
	uploadedFiles?: File[];
	wantsReminders?: boolean;
}

// Project
export interface Project {
	id: string;
	userId: string;
	title: string;
	goal?: string;
	description?: string;
	category?: string;
	duration?: ProjectDuration;
	rememberDuration?: RememberDuration;
	level?: LearningLevel;
	learningStyle?: LearningStyle;
	studyHoursPerDay?: number;
	examDate?: Date;
	weakAreas: string[];
	status: ProjectStatus;
	progress: number;
	masteryScore: number;
	createdAt: Date;
	updatedAt: Date;
	completedAt?: Date;
}

// Subtopic
export interface Subtopic {
	id: string;
	projectId: string;
	title: string;
	description?: string;
	content?: string;
	orderIndex: number;
	estimatedHours?: number;
	difficulty?: Difficulty;
	dependencies: string[];
	memoryStrength: number;
	lastReviewed?: Date;
	nextReview?: Date;
	reviewCount: number;
	isCompleted: boolean;
	completedAt?: Date;
	createdAt: Date;
	updatedAt: Date;
}

// Task
export interface Task {
	id: string;
	projectId: string;
	subtopicId?: string;
	title: string;
	description?: string;
	type: TaskType;
	priority: Priority;
	dueDate?: Date;
	scheduledFor?: Date;
	estimatedMinutes?: number;
	completed: boolean;
	completedAt?: Date;
	score?: number;
	createdAt: Date;
	updatedAt: Date;
}

// Chat Message
export interface ChatMessage {
	role: ChatRole;
	content: string;
	timestamp: string;
}

// Chat Session
export interface ChatSession {
	id: string;
	userId: string;
	projectId?: string;
	title?: string;
	type: "tutor" | "pdf-chat" | "general";
	messages: ChatMessage[];
	documentIds: string[];
	createdAt: Date;
	updatedAt: Date;
}

// Document
export interface Document {
	id: string;
	projectId: string;
	title: string;
	type: DocumentType;
	fileUrl: string;
	fileName?: string;
	fileSize?: number;
	extractedText?: string;
	summary?: string;
	vectorEmbedding?: any;
	processed: boolean;
	processingError?: string;
	createdAt: Date;
	updatedAt: Date;
}

// Quiz Question
export interface QuizQuestion {
	question: string;
	options?: string[];
	correctAnswer: string | number;
	explanation?: string;
	difficulty?: Difficulty;
}

// Quiz
export interface Quiz {
	id: string;
	projectId: string;
	title: string;
	type: QuizType;
	difficulty: Difficulty;
	questions: QuizQuestion[];
	totalQuestions: number;
	correctAnswers: number;
	score: number;
	timeTaken?: number;
	completed: boolean;
	completedAt?: Date;
	weakTopics: string[];
	createdAt: Date;
	updatedAt: Date;
}

// Flashcard
export interface Flashcard {
	id: string;
	subtopicId: string;
	front: string;
	back: string;
	hint?: string;
	easeFactor: number;
	interval: number;
	repetitions: number;
	nextReview?: Date;
	correctCount: number;
	incorrectCount: number;
	lastReviewed?: Date;
	createdAt: Date;
	updatedAt: Date;
}

// Revision
export interface Revision {
	id: string;
	projectId: string;
	topic: string;
	content?: string;
	revisionNumber: number;
	scheduledDate: Date;
	completed: boolean;
	completedAt?: Date;
	confidenceLevel?: number;
	notes?: string;
	createdAt: Date;
	updatedAt: Date;
}

// Mindmap Node
export interface MindmapNode {
	id: string;
	label: string;
	x?: number;
	y?: number;
	color?: string;
	children?: string[];
}

// Mindmap
export interface Mindmap {
	id: string;
	projectId: string;
	title: string;
	description?: string;
	nodes: MindmapNode[];
	style: "tree" | "radial" | "org-chart";
	createdAt: Date;
	updatedAt: Date;
}

// Mnemonic
export interface Mnemonic {
	id: string;
	topic: string;
	content: string;
	type: "acronym" | "story" | "rhyme" | "association";
	projectIds: string[];
	useCount: number;
	createdAt: Date;
	updatedAt: Date;
}

// Gamification
export interface Gamification {
	id: string;
	userId: string;
	totalXP: number;
	level: number;
	currentStreak: number;
	longestStreak: number;
	lastActivityDate?: Date;
	badges: string[];
	totalStudyHours: number;
	totalQuizzesTaken: number;
	totalTasksCompleted: number;
	totalProjectsCompleted: number;
	createdAt: Date;
	updatedAt: Date;
}

// Learning Plan
export interface LearningPlan {
	subtopics: Array<{
		title: string;
		description: string;
		estimatedHours: number;
		difficulty: Difficulty;
		dependencies: string[];
	}>;
	dailyTasks: Array<{
		day: number;
		tasks: Array<{
			type: TaskType;
			title: string;
			description: string;
			estimatedMinutes: number;
		}>;
	}>;
	revisionSchedule: Array<{
		topic: string;
		dates: Date[];
	}>;
	milestones: Array<{
		week: number;
		goal: string;
		checkpoints: string[];
	}>;
}

// API Response Types
export interface ApiResponse<T = any> {
	success: boolean;
	data?: T;
	error?: string;
	message?: string;
}

// Dashboard Stats
export interface DashboardStats {
	totalProjects: number;
	activeProjects: number;
	completedTasks: number;
	totalTasks: number;
	todayTasks: Task[];
	upcomingRevisions: Revision[];
	masteryScore: number;
	weeklyProgress: number;
	streak: number;
	xp: number;
	level: number;
}
