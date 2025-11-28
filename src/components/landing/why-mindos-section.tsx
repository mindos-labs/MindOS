"use client"

import {
    Box,
    Container,
    VStack,
    SimpleGrid,
    Heading,
    Text,
    Icon,
} from "@chakra-ui/react"
import { FaBrain, FaRocket, FaUsers, FaShieldAlt, FaMagic, FaChartLine } from "react-icons/fa"

const whyReasons = [
    {
        icon: FaBrain,
        title: "AI That Actually Understands You",
        description: "Not just another chatbot. Our AI learns your learning style, adapts to your pace, and fills knowledge gaps you didn't know you had.",
        color: "blue",
    },
    {
        icon: FaRocket,
        title: "Learn 3x Faster, Remember Forever",
        description: "Scientifically-optimized spaced repetition ensures what you learn today stays with you for years, not days.",
        color: "purple",
    },
    {
        icon: FaUsers,
        title: "Built by Students, For Students",
        description: "We know the struggle. Late nights, information overload, exam stress. MindOS is designed by people who've been there.",
        color: "green",
    },
    {
        icon: FaShieldAlt,
        title: "Your Data, Your Privacy",
        description: "Local-first architecture. Your notes, thoughts, and learning journey belong to you. We never sell your data.",
        color: "orange",
    },
    {
        icon: FaMagic,
        title: "One Platform, Everything",
        description: "Stop juggling 10 apps. Notes, flashcards, mind maps, PDFs, videos, schedules - all connected in your second brain.",
        color: "pink",
    },
    {
        icon: FaChartLine,
        title: "Track Real Progress",
        description: "Beautiful analytics that actually matter. See your mastery grow, identify weak spots, and celebrate wins.",
        color: "teal",
    },
]

export function WhyMindosSection() {
    return (
        <Box py={24} bg="bg.canvas">
            <Container maxW="container.xl">
                <VStack gap={16}>
                    <VStack gap={4} textAlign="center">
                        <Heading size="4xl" fontWeight="bold">
                            Why Mindos?
                        </Heading>
                        <Text fontSize="xl" color="fg.muted" maxW="3xl">
                            We're not just another productivity tool. We're your AI-powered learning companion
                            that combines cutting-edge technology with proven science to transform how you learn.
                        </Text>
                    </VStack>

                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} w="full">
                        {whyReasons.map((reason, index) => (
                            <Box
                                key={index}
                                p={8}
                                bg="bg.panel"
                                rounded="2xl"
                                borderWidth="1px"
                                shadow="sm"
                                transition="all 0.3s"
                                _hover={{ shadow: "lg", transform: "translateY(-4px)" }}
                            >
                                <VStack align="start" gap={4}>
                                    <Box
                                        p={4}
                                        bg={`${reason.color}.subtle`}
                                        color={`${reason.color}.fg`}
                                        rounded="xl"
                                    >
                                        <Icon as={reason.icon} boxSize={7} />
                                    </Box>
                                    <VStack align="start" gap={2}>
                                        <Heading size="lg">{reason.title}</Heading>
                                        <Text color="fg.muted" fontSize="sm">
                                            {reason.description}
                                        </Text>
                                    </VStack>
                                </VStack>
                            </Box>
                        ))}
                    </SimpleGrid>
                </VStack>
            </Container>
        </Box>
    )
}
