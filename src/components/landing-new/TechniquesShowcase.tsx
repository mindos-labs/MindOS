"use client"

import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Text,
    VStack,
    Icon,
    Badge,
} from "@chakra-ui/react"
import {
    FaBrain,
    FaLightbulb,
    FaChartLine,
    FaBookOpen,
    FaPuzzlePiece,
    FaComments
} from "react-icons/fa"

const techniques = [
    {
        icon: FaBrain,
        title: "Spaced Repetition",
        description: "Auto-generated flashcards with smart intervals. Never forget what you learn.",
        tool: "MindRepeater",
        color: "blue"
    },
    {
        icon: FaLightbulb,
        title: "Active Recall",
        description: "AI-created quizzes that adapt to your level and reinforce weak areas.",
        tool: "MindQuiz Generator",
        color: "purple"
    },
    {
        icon: FaChartLine,
        title: "Feynman Technique",
        description: "Explain concepts in simple terms. AI checks your understanding.",
        tool: "Explain-It Mode",
        color: "green"
    },
    {
        icon: FaBookOpen,
        title: "Dual Coding",
        description: "Visual memory with AI-generated diagrams, mindmaps, and flowcharts.",
        tool: "Visual Memory Builder",
        color: "orange"
    },
    {
        icon: FaPuzzlePiece,
        title: "Mnemonics",
        description: "Memory palaces, acronyms, and stories to remember anything.",
        tool: "MnemoniX",
        color: "pink"
    },
    {
        icon: FaComments,
        title: "Teaching Others",
        description: "Learn by teaching. Share 2-min explanations with peers.",
        tool: "Peer Classroom",
        color: "teal"
    }
]

export default function TechniquesShowcase() {
    return (
        <Box py={24} bg="bg.canvas">
            <Container maxW="container.xl">
                <VStack gap={16}>
                    <VStack gap={4} textAlign="center">
                        <Badge colorPalette="blue" size="lg" px={3} py={1}>
                            15 Science-Backed Techniques
                        </Badge>
                        <Heading size="4xl" fontWeight="bold">
                            Learn Like Never Before
                        </Heading>
                        <Text fontSize="xl" color="fg.muted" maxW="2xl">
                            MindOS transforms proven memory techniques into beautiful, intelligent tools
                            that help you learn faster and remember longer.
                        </Text>
                    </VStack>

                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} w="full">
                        {techniques.map((technique, index) => (
                            <Box
                                key={index}
                                p={8}
                                bg="bg.panel"
                                rounded="2xl"
                                borderWidth="1px"
                                shadow="sm"
                                transition="all 0.2s"
                                _hover={{ shadow: "md", transform: "translateY(-4px)" }}
                            >
                                <VStack align="start" gap={4}>
                                    <Box
                                        p={3}
                                        bg={`${technique.color}.subtle`}
                                        color={`${technique.color}.fg`}
                                        rounded="xl"
                                    >
                                        <Icon as={technique.icon} boxSize={6} />
                                    </Box>
                                    <VStack align="start" gap={2}>
                                        <Heading size="lg">{technique.title}</Heading>
                                        <Text fontSize="sm" color="fg.muted">
                                            {technique.description}
                                        </Text>
                                        <Badge colorPalette={technique.color} variant="subtle" size="sm">
                                            {technique.tool}
                                        </Badge>
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
