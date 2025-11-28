"use client"

import { Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Icon } from "@chakra-ui/react"
import {
    Brain,
    Lightbulb,
    Shuffle,
    Link2,
    MessageSquare,
    Image,
    Sparkles,
    Target,
    Calendar,
    Cloud,
    Heart,
    Moon,
    FileCheck,
    Users,
    Timer
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

const tools = [
    {
        name: "MindRepeater",
        technique: "Spaced Repetition",
        icon: Brain,
        description: "AI-powered flashcard system with smart scheduling and retention tracking",
        features: ["Auto-generated cards", "Smart intervals", "Calendar sync", "Forever retention mode"],
        status: "available" as const,
    },
    {
        name: "MindQuiz Generator",
        technique: "Active Recall",
        icon: FileCheck,
        description: "Dynamic quiz creation with adaptive difficulty and weak-area reinforcement",
        features: ["MCQ/SA/LA formats", "Auto-difficulty adjustment", "Performance analytics", "Leaderboards"],
        status: "available" as const,
    },
    {
        name: "SmartMix",
        technique: "Interleaving",
        icon: Shuffle,
        description: "Intelligently mixes topics to prevent blocked learning and build connections",
        features: ["Cross-subject mixing", "Optimal sequencing", "JEE/NEET optimized", "Custom patterns"],
        status: "available" as const,
    },
    {
        name: "DeepLinker",
        technique: "Elaborative Encoding",
        icon: Link2,
        description: "Connects new information with prior knowledge through deep questions",
        features: ["Analogy generation", "Deep questioning", "Knowledge mapping", "Meaningful connections"],
        status: "coming-soon" as const,
    },
    {
        name: "Explain-It Mode",
        technique: "Feynman Technique",
        icon: MessageSquare,
        description: "AI evaluates your explanations for clarity, gaps, and simplicity",
        features: ["Voice/text input", "Understanding score", "Gap detection", "Clarity feedback"],
        status: "coming-soon" as const,
    },
    {
        name: "Visual Memory Builder",
        technique: "Dual Coding",
        icon: Image,
        description: "AI-generated diagrams, mindmaps, and visual learning aids",
        features: ["Auto diagrams", "Mindmap generator", "Flowcharts", "Concept graphs"],
        status: "available" as const,
    },
    {
        name: "MnemoniX",
        technique: "Mnemonics",
        icon: Sparkles,
        description: "Create memorable acronyms, rhymes, and memory palaces",
        features: ["Memory palaces", "Acronym generator", "Story creation", "Number chunking"],
        status: "coming-soon" as const,
    },
    {
        name: "MetaMind Coach",
        technique: "5-Mind System",
        icon: Target,
        description: "Tracks and optimizes your understanding, recording, connecting, recalling, and creating minds",
        features: ["5-layer tracking", "Daily suggestions", "Mind balance", "Progress insights"],
        status: "coming-soon" as const,
    },
    {
        name: "Retention Calendar",
        technique: "Spacing Pyramid",
        icon: Calendar,
        description: "Pre-built revision cycles for optimal long-term retention",
        features: ["1-week crash mode", "Semester plans", "Forever mastery", "Auto scheduling"],
        status: "available" as const,
    },
    {
        name: "Environment Sync",
        technique: "State-Dependent Learning",
        icon: Cloud,
        description: "Optimizes study timing based on your focus patterns and environment",
        features: ["Time detection", "Focus scheduling", "Best time suggestions", "Pattern learning"],
        status: "coming-soon" as const,
    },
    {
        name: "Emotion Mapper",
        technique: "Emotional Tagging",
        icon: Heart,
        description: "Anchors learning with emotional connections and motivation",
        features: ["Emotional anchors", "Motivation tracking", "Daily reflections", "Purpose mapping"],
        status: "coming-soon" as const,
    },
    {
        name: "Sleep-Study Sync",
        technique: "Sleep Optimization",
        icon: Moon,
        description: "Syncs learning with sleep cycles for better memory consolidation",
        features: ["Bedtime reminders", "Morning recall", "Sleep patterns", "Consolidation routines"],
        status: "coming-soon" as const,
    },
    {
        name: "Exam Simulator",
        technique: "Testing Effect",
        icon: FileCheck,
        description: "Full mock test environment with instant evaluation and analytics",
        features: ["Timed exams", "Instant evaluation", "Error logs", "Performance charts"],
        status: "available" as const,
    },
    {
        name: "Peer Classroom",
        technique: "Teaching Others",
        icon: Users,
        description: "Learn by teaching through peer explanations and reviews",
        features: ["2-min explanations", "Peer review", "Rating system", "Social learning"],
        status: "coming-soon" as const,
    },
    {
        name: "MindFocus Timer",
        technique: "Deep Focus",
        icon: Timer,
        description: "Pomodoro and ultradian rhythm timer with gamification",
        features: ["Pomodoro mode", "Focus analytics", "Forest gamification", "Streak tracking"],
        status: "available" as const,
    },
]

export default function ToolsClient() {
    return (
        <Box minH="100vh" bg="bg.canvas">
            <Container maxW="container.xl" py={16}>
                {/* Header */}
                <VStack gap={6} textAlign="center" mb={16}>
                    <Heading size="4xl" fontWeight="bold">
                        Learning Tools
                    </Heading>
                    <Text fontSize="xl" color="fg.muted" maxW="3xl">
                        Discover 15 science-backed learning tools powered by neuroscience and AI.
                        Each tool is designed to help you learn faster, remember longer, and master anything.
                    </Text>
                </VStack>

                {/* Tools Grid */}
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
                    {tools.map((tool, index) => (
                        <Box
                            key={index}
                            p={6}
                            bg="bg.panel"
                            rounded="xl"
                            borderWidth="1px"
                            borderColor="border"
                            transition="all 0.3s"
                            _hover={{
                                borderColor: "blue.500",
                                transform: "translateY(-4px)",
                                shadow: "lg",
                            }}
                        >
                            <VStack align="start" gap={4}>
                                {/* Icon and Status */}
                                <HStack justify="space-between" w="full">
                                    <Box
                                        p={3}
                                        bg="blue.subtle"
                                        rounded="lg"
                                    >
                                        <Icon as={tool.icon} boxSize={6} color="blue.500" />
                                    </Box>
                                    <Badge
                                        variant={tool.status === "available" ? "default" : "secondary"}
                                    >
                                        {tool.status === "available" ? "Available" : "Coming Soon"}
                                    </Badge>
                                </HStack>

                                {/* Title */}
                                <VStack align="start" gap={1}>
                                    <Heading size="lg" fontWeight="semibold">
                                        {tool.name}
                                    </Heading>
                                    <Text fontSize="sm" color="blue.500" fontWeight="medium">
                                        {tool.technique}
                                    </Text>
                                </VStack>

                                {/* Description */}
                                <Text fontSize="sm" color="fg.muted">
                                    {tool.description}
                                </Text>

                                {/* Features */}
                                <VStack align="start" gap={2} w="full">
                                    {tool.features.map((feature, idx) => (
                                        <HStack key={idx} gap={2}>
                                            <Box
                                                w={1.5}
                                                h={1.5}
                                                bg="blue.500"
                                                rounded="full"
                                            />
                                            <Text fontSize="xs" color="fg.muted">
                                                {feature}
                                            </Text>
                                        </HStack>
                                    ))}
                                </VStack>
                            </VStack>
                        </Box>
                    ))}
                </SimpleGrid>

                {/* Bottom CTA */}
                <Box
                    mt={16}
                    p={8}
                    bg="blue.subtle"
                    rounded="2xl"
                    borderWidth="1px"
                    borderColor="blue.200"
                    textAlign="center"
                >
                    <VStack gap={4}>
                        <Heading size="xl">
                            Ready to supercharge your learning?
                        </Heading>
                        <Text fontSize="lg" color="fg.muted" maxW="2xl">
                            Start using these powerful tools today and experience the difference
                            science-backed learning can make.
                        </Text>
                    </VStack>
                </Box>
            </Container>
        </Box>
    )
}
