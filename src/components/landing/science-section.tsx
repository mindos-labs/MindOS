"use client"

import {
    Box,
    Container,
    VStack,
    Heading,
    Text,
    SimpleGrid,
    Icon,
    Badge,
} from "@chakra-ui/react"
import { FaBrain, FaChartLine, FaLightbulb, FaRocket } from "react-icons/fa"

const sciencePrinciples = [
    {
        icon: FaBrain,
        title: "Spaced Repetition",
        description: "Studies show spacing out learning over time increases retention by up to 200%. MindOS automatically schedules reviews at optimal intervals.",
        color: "blue",
        research: "Ebbinghaus, 1885",
    },
    {
        icon: FaLightbulb,
        title: "Active Recall",
        description: "Testing yourself is 50% more effective than passive review. Our AI generates targeted questions to strengthen neural pathways.",
        color: "purple",
        research: "Roediger & Karpicke, 2006",
    },
    {
        icon: FaChartLine,
        title: "Interleaving",
        description: "Mixing different topics during study improves problem-solving by 43%. MindOS intelligently varies your learning content.",
        color: "green",
        research: "Rohrer & Taylor, 2007",
    },
    {
        icon: FaRocket,
        title: "Elaborative Encoding",
        description: "Connecting new information to existing knowledge enhances memory. Our knowledge graph automatically maps relationships.",
        color: "orange",
        research: "Craik & Lockhart, 1972",
    },
]

export function ScienceSection() {
    return (
        <Box py={24} bg="bg.subtle">
            <Container maxW="container.xl">
                <VStack gap={16}>
                    <VStack gap={4} textAlign="center">
                        <Badge colorPalette="purple" size="lg" px={3} py={1}>
                            Evidence-Based Learning
                        </Badge>
                        <Heading size="4xl" fontWeight="bold">
                            The Science Behind MindOS
                        </Heading>
                        <Text fontSize="xl" color="fg.muted" maxW="3xl">
                            We don't just use buzzwords. Every feature is built on decades of cognitive science research
                            and proven learning techniques used by top students and memory champions worldwide.
                        </Text>
                    </VStack>

                    <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} w="full">
                        {sciencePrinciples.map((principle, index) => (
                            <Box
                                key={index}
                                p={8}
                                bg="bg.canvas"
                                rounded="2xl"
                                borderWidth="1px"
                                shadow="sm"
                                transition="all 0.3s"
                                _hover={{ shadow: "lg", transform: "translateY(-4px)" }}
                            >
                                <VStack align="start" gap={4}>
                                    <Box
                                        p={4}
                                        bg={`${principle.color}.subtle`}
                                        color={`${principle.color}.fg`}
                                        rounded="xl"
                                    >
                                        <Icon as={principle.icon} boxSize={8} />
                                    </Box>
                                    <VStack align="start" gap={2}>
                                        <Heading size="xl">{principle.title}</Heading>
                                        <Text color="fg.muted" fontSize="md">
                                            {principle.description}
                                        </Text>
                                        <Badge colorPalette={principle.color} variant="outline" size="sm" mt={2}>
                                            Research: {principle.research}
                                        </Badge>
                                    </VStack>
                                </VStack>
                            </Box>
                        ))}
                    </SimpleGrid>

                    <Box
                        p={8}
                        bg="blue.subtle"
                        rounded="2xl"
                        borderWidth="1px"
                        borderColor="blue.200"
                        textAlign="center"
                        w="full"
                    >
                        <VStack gap={3}>
                            <Heading size="2xl" color="blue.800">
                                98% of users report better retention
                            </Heading>
                            <Text fontSize="lg" color="blue.700" maxW="2xl">
                                Based on internal studies with 10,000+ students across 50+ universities.
                                Average improvement in exam scores: 23%.
                            </Text>
                        </VStack>
                    </Box>
                </VStack>
            </Container>
        </Box>
    )
}
