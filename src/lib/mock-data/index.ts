// Mock data for MindOS prototype

import type { 
  Project, 
  Subtopic, 
  Task, 
  Quiz, 
  Flashcard, 
  Revision,
  Gamification,
  ChatSession,
  Document,
  DashboardStats
} from "@/lib/types";

// Mock User
export const mockUser = {
  id: "user-1",
  name: "Alex Kumar",
  email: "alex@example.com",
  image: null,
};

// Mock Projects
export const mockProjects: Project[] = [
  {
    id: "proj-1",
    userId: "user-1",
    title: "Operating Systems Fundamentals",
    goal: "Master OS concepts for semester exam",
    description: "Complete understanding of OS modules including processes, memory management, and file systems",
    category: "academic",
    duration: "3-months",
    rememberDuration: "forever",
    level: "intermediate",
    learningStyle: "practice-based",
    studyHoursPerDay: 2,
    examDate: new Date("2025-12-15"),
    weakAreas: ["Deadlock", "Page Replacement Algorithms"],
    status: "active",
    progress: 45,
    masteryScore: 62,
    createdAt: new Date("2025-10-01"),
    updatedAt: new Date("2025-11-14"),
  },
  {
    id: "proj-2",
    userId: "user-1",
    title: "Data Structures & Algorithms",
    goal: "Prepare for coding interviews",
    description: "Master DSA for FAANG interviews",
    category: "skill",
    duration: "1-month",
    rememberDuration: "forever",
    level: "intermediate",
    learningStyle: "practice-based",
    studyHoursPerDay: 3,
    weakAreas: ["Dynamic Programming", "Graph Algorithms"],
    status: "active",
    progress: 28,
    masteryScore: 48,
    createdAt: new Date("2025-11-01"),
    updatedAt: new Date("2025-11-14"),
  },
  {
    id: "proj-3",
    userId: "user-1",
    title: "Guitar Basics",
    goal: "Learn to play favorite songs",
    description: "Master basic chords and strumming patterns",
    category: "hobby",
    duration: "1-month",
    rememberDuration: "1-month",
    level: "beginner",
    learningStyle: "practice-based",
    studyHoursPerDay: 1,
    weakAreas: ["Chord Transitions", "Rhythm"],
    status: "active",
    progress: 65,
    masteryScore: 58,
    createdAt: new Date("2025-10-20"),
    updatedAt: new Date("2025-11-14"),
  },
];

// Mock Subtopics for OS Project
export const mockSubtopics: Subtopic[] = [
  {
    id: "sub-1",
    projectId: "proj-1",
    title: "Process Management",
    description: "Understanding processes, threads, and CPU scheduling",
    content: "Process management is a fundamental concept...",
    orderIndex: 0,
    estimatedHours: 8,
    difficulty: "medium",
    dependencies: [],
    memoryStrength: 75,
    lastReviewed: new Date("2025-11-10"),
    nextReview: new Date("2025-11-17"),
    reviewCount: 3,
    isCompleted: true,
    completedAt: new Date("2025-10-15"),
    createdAt: new Date("2025-10-01"),
    updatedAt: new Date("2025-11-10"),
  },
  {
    id: "sub-2",
    projectId: "proj-1",
    title: "Memory Management",
    description: "Paging, segmentation, and virtual memory",
    orderIndex: 1,
    estimatedHours: 10,
    difficulty: "hard",
    dependencies: ["sub-1"],
    memoryStrength: 60,
    lastReviewed: new Date("2025-11-12"),
    nextReview: new Date("2025-11-19"),
    reviewCount: 2,
    isCompleted: false,
    createdAt: new Date("2025-10-01"),
    updatedAt: new Date("2025-11-12"),
  },
  {
    id: "sub-3",
    projectId: "proj-1",
    title: "Deadlock & Synchronization",
    description: "Deadlock prevention, avoidance, and detection",
    orderIndex: 2,
    estimatedHours: 6,
    difficulty: "hard",
    dependencies: ["sub-1"],
    memoryStrength: 40,
    lastReviewed: new Date("2025-11-13"),
    nextReview: new Date("2025-11-16"),
    reviewCount: 1,
    isCompleted: false,
    createdAt: new Date("2025-10-01"),
    updatedAt: new Date("2025-11-13"),
  },
  {
    id: "sub-4",
    projectId: "proj-1",
    title: "File Systems",
    description: "File organization, allocation methods, directory structure",
    orderIndex: 3,
    estimatedHours: 7,
    difficulty: "medium",
    dependencies: ["sub-2"],
    memoryStrength: 0,
    reviewCount: 0,
    isCompleted: false,
    createdAt: new Date("2025-10-01"),
    updatedAt: new Date("2025-10-01"),
  },
];

// Mock Tasks
export const mockTasks: Task[] = [
  {
    id: "task-1",
    projectId: "proj-1",
    subtopicId: "sub-2",
    title: "Review Memory Allocation Techniques",
    description: "Study first-fit, best-fit, worst-fit algorithms",
    type: "study",
    priority: "high",
    dueDate: new Date("2025-11-15"),
    scheduledFor: new Date("2025-11-15T10:00:00"),
    estimatedMinutes: 45,
    completed: false,
    createdAt: new Date("2025-11-10"),
    updatedAt: new Date("2025-11-10"),
  },
  {
    id: "task-2",
    projectId: "proj-1",
    subtopicId: "sub-3",
    title: "Complete Deadlock Quiz",
    description: "Test understanding of Banker's algorithm",
    type: "quiz",
    priority: "high",
    dueDate: new Date("2025-11-15"),
    scheduledFor: new Date("2025-11-15T14:00:00"),
    estimatedMinutes: 30,
    completed: false,
    createdAt: new Date("2025-11-13"),
    updatedAt: new Date("2025-11-13"),
  },
  {
    id: "task-3",
    projectId: "proj-1",
    subtopicId: "sub-1",
    title: "Flashcard Review - Process Scheduling",
    description: "Review FCFS, SJF, Round Robin algorithms",
    type: "flashcard",
    priority: "medium",
    dueDate: new Date("2025-11-15"),
    scheduledFor: new Date("2025-11-15T16:00:00"),
    estimatedMinutes: 20,
    completed: false,
    createdAt: new Date("2025-11-14"),
    updatedAt: new Date("2025-11-14"),
  },
  {
    id: "task-4",
    projectId: "proj-2",
    title: "Solve 5 Array Problems",
    description: "Practice two-pointer technique",
    type: "practice",
    priority: "high",
    dueDate: new Date("2025-11-15"),
    estimatedMinutes: 90,
    completed: false,
    createdAt: new Date("2025-11-14"),
    updatedAt: new Date("2025-11-14"),
  },
  {
    id: "task-5",
    projectId: "proj-3",
    title: "Practice Chord Transitions",
    description: "C to G to D smooth transitions",
    type: "practice",
    priority: "medium",
    dueDate: new Date("2025-11-15"),
    estimatedMinutes: 30,
    completed: false,
    createdAt: new Date("2025-11-14"),
    updatedAt: new Date("2025-11-14"),
  },
];

// Mock Flashcards
export const mockFlashcards: Flashcard[] = [
  {
    id: "flash-1",
    subtopicId: "sub-1",
    front: "What is a process?",
    back: "A program in execution. It includes the program code, current activity (program counter), and allocated resources.",
    hint: "Think about what happens when you run a program",
    easeFactor: 2.5,
    interval: 3,
    repetitions: 2,
    nextReview: new Date("2025-11-16"),
    correctCount: 4,
    incorrectCount: 1,
    lastReviewed: new Date("2025-11-13"),
    createdAt: new Date("2025-10-01"),
    updatedAt: new Date("2025-11-13"),
  },
  {
    id: "flash-2",
    subtopicId: "sub-1",
    front: "What is the difference between preemptive and non-preemptive scheduling?",
    back: "Preemptive: OS can interrupt running process. Non-preemptive: Process runs until completion or blocks.",
    easeFactor: 2.3,
    interval: 7,
    repetitions: 3,
    nextReview: new Date("2025-11-20"),
    correctCount: 5,
    incorrectCount: 2,
    lastReviewed: new Date("2025-11-13"),
    createdAt: new Date("2025-10-01"),
    updatedAt: new Date("2025-11-13"),
  },
];

// Mock Quiz
export const mockQuiz: Quiz = {
  id: "quiz-1",
  projectId: "proj-1",
  title: "Memory Management Quiz",
  type: "mcq",
  difficulty: "medium",
  questions: [
    {
      question: "Which page replacement algorithm may suffer from Belady's anomaly?",
      options: ["FIFO", "LRU", "Optimal", "LFU"],
      correctAnswer: 0,
      explanation: "FIFO (First-In-First-Out) can suffer from Belady's anomaly where increasing frames can increase page faults.",
      difficulty: "medium",
    },
    {
      question: "What is thrashing?",
      options: [
        "CPU running at 100%",
        "Excessive paging activity",
        "Disk failure",
        "Memory overflow",
      ],
      correctAnswer: 1,
      explanation: "Thrashing occurs when the system spends more time paging than executing processes.",
      difficulty: "medium",
    },
  ],
  totalQuestions: 2,
  correctAnswers: 0,
  score: 0,
  completed: false,
  weakTopics: [],
  createdAt: new Date("2025-11-14"),
  updatedAt: new Date("2025-11-14"),
};

// Mock Revisions
export const mockRevisions: Revision[] = [
  {
    id: "rev-1",
    projectId: "proj-1",
    topic: "Process Management",
    content: "Review all scheduling algorithms and process states",
    revisionNumber: 3,
    scheduledDate: new Date("2025-11-17"),
    completed: false,
    createdAt: new Date("2025-11-10"),
    updatedAt: new Date("2025-11-10"),
  },
  {
    id: "rev-2",
    projectId: "proj-1",
    topic: "Memory Management - Paging",
    content: "Review page table structure and TLB",
    revisionNumber: 2,
    scheduledDate: new Date("2025-11-19"),
    completed: false,
    createdAt: new Date("2025-11-12"),
    updatedAt: new Date("2025-11-12"),
  },
  {
    id: "rev-3",
    projectId: "proj-2",
    topic: "Arrays & Two Pointers",
    revisionNumber: 1,
    scheduledDate: new Date("2025-11-18"),
    completed: false,
    createdAt: new Date("2025-11-14"),
    updatedAt: new Date("2025-11-14"),
  },
];

// Mock Gamification
export const mockGamification: Gamification = {
  id: "gam-1",
  userId: "user-1",
  totalXP: 2450,
  level: 8,
  currentStreak: 12,
  longestStreak: 18,
  lastActivityDate: new Date("2025-11-14"),
  badges: [
    "first-project",
    "week-streak",
    "quiz-master",
    "flashcard-champion",
    "early-bird",
  ],
  totalStudyHours: 45.5,
  totalQuizzesTaken: 23,
  totalTasksCompleted: 87,
  totalProjectsCompleted: 2,
  createdAt: new Date("2025-10-01"),
  updatedAt: new Date("2025-11-14"),
};

// Mock Chat Session
export const mockChatSession: ChatSession = {
  id: "chat-1",
  userId: "user-1",
  projectId: "proj-1",
  title: "OS Concepts Help",
  type: "tutor",
  messages: [
    {
      role: "user",
      content: "Can you explain the difference between paging and segmentation?",
      timestamp: new Date("2025-11-14T10:30:00").toISOString(),
    },
    {
      role: "assistant",
      content: "Great question! Let me break down the key differences:\n\n**Paging:**\n- Divides memory into fixed-size blocks called pages\n- No external fragmentation\n- May have internal fragmentation\n- Page table maps logical to physical addresses\n\n**Segmentation:**\n- Divides memory into variable-size segments based on logical divisions\n- Can have external fragmentation\n- No internal fragmentation\n- Segment table stores base and limit\n\nWould you like me to explain either concept in more detail?",
      timestamp: new Date("2025-11-14T10:30:15").toISOString(),
    },
    {
      role: "user",
      content: "Yes, can you give me a real-world example of segmentation?",
      timestamp: new Date("2025-11-14T10:31:00").toISOString(),
    },
    {
      role: "assistant",
      content: "Absolutely! Think of a program with these segments:\n\n1. **Code Segment**: Contains your actual program instructions\n2. **Data Segment**: Global and static variables\n3. **Stack Segment**: Local variables and function calls\n4. **Heap Segment**: Dynamically allocated memory\n\nEach segment can grow or shrink independently. For example, when you call functions, your stack grows, but your code segment stays the same size.\n\nThis is like organizing a book into chapters - each chapter (segment) has its own purpose and can be different sizes!",
      timestamp: new Date("2025-11-14T10:31:20").toISOString(),
    },
  ],
  documentIds: [],
  createdAt: new Date("2025-11-14T10:30:00"),
  updatedAt: new Date("2025-11-14T10:31:20"),
};

// Mock Documents
export const mockDocuments: Document[] = [
  {
    id: "doc-1",
    projectId: "proj-1",
    title: "Operating Systems Lecture Notes - Module 2",
    type: "pdf",
    fileUrl: "/mock/os-notes.pdf",
    fileName: "os-module2-notes.pdf",
    fileSize: 2458000,
    extractedText: "Process Management and CPU Scheduling...",
    summary: "Comprehensive notes covering process states, scheduling algorithms including FCFS, SJF, Priority, and Round Robin.",
    processed: true,
    createdAt: new Date("2025-10-05"),
    updatedAt: new Date("2025-10-05"),
  },
  {
    id: "doc-2",
    projectId: "proj-1",
    title: "Memory Management Slides",
    type: "ppt",
    fileUrl: "/mock/memory-slides.ppt",
    fileName: "memory-management.pptx",
    fileSize: 1850000,
    summary: "Slides covering paging, segmentation, virtual memory, and page replacement algorithms.",
    processed: true,
    createdAt: new Date("2025-10-12"),
    updatedAt: new Date("2025-10-12"),
  },
];

// Mock Dashboard Stats
export const mockDashboardStats: DashboardStats = {
  totalProjects: 3,
  activeProjects: 3,
  completedTasks: 87,
  totalTasks: 125,
  todayTasks: mockTasks.filter(t => {
    const today = new Date().toDateString();
    return t.dueDate && new Date(t.dueDate).toDateString() === today;
  }),
  upcomingRevisions: mockRevisions.filter(r => !r.completed).slice(0, 3),
  masteryScore: 56,
  weeklyProgress: 18,
  streak: 12,
  xp: 2450,
  level: 8,
};

// Helper function to get project by ID
export const getProjectById = (id: string) => mockProjects.find(p => p.id === id);

// Helper function to get subtopics by project ID
export const getSubtopicsByProject = (projectId: string) => 
  mockSubtopics.filter(s => s.projectId === projectId);

// Helper function to get tasks by project ID
export const getTasksByProject = (projectId: string) => 
  mockTasks.filter(t => t.projectId === projectId);

// Export all mock data
export const mockData = {
  user: mockUser,
  projects: mockProjects,
  subtopics: mockSubtopics,
  tasks: mockTasks,
  flashcards: mockFlashcards,
  quiz: mockQuiz,
  revisions: mockRevisions,
  gamification: mockGamification,
  chatSession: mockChatSession,
  documents: mockDocuments,
  dashboardStats: mockDashboardStats,
};
