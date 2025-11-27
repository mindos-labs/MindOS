"use client"

import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    HStack,
    Icon,
    Flex,
} from "@chakra-ui/react"
import { FaRocket, FaBullseye, FaTrophy, FaChartLine } from "react-icons/fa"

const steps = [
    {
        icon: FaRocket,
        title: "Create a Project",
        description: "Tell us what you want to learn - from JEE Physics to Guitar Chords.",
        number: "01"
    },
    {
        icon: FaBullseye,
        title: "AI Plans Your Path",
        description: "Get a personalized study roadmap with daily tasks and scientific tools.",
        number: "02"
    },
    {
        icon: FaChartLine,
        title: "Learn & Track Progress",
        description: "Use 15 science-backed tools. Watch your retention score grow daily.",
        number: "03"
    },
    {
        icon: FaTrophy,
        title: "Master Forever",
        description: "Achieve long-term retention with spaced repetition and smart reviews.",
        number: "04"
    }
]

export default function HowItWorksSection() {
    return (
        <Box py={24} bg="bg.subtle">
            <Container maxW="container.xl">
                <VStack gap={16}>
                    <VStack gap={4} textAlign="center">
                        <Heading size="4xl" fontWeight="bold">
                            How MindOS Works
                        </Heading>
                        <Text fontSize="xl" color="fg.muted" maxW="2xl">
                            From zero to mastery in four simple steps. AI does the planning,
                            science does the magic.
                        </Text>
                    </VStack>

                    <Flex
                        direction={{ base: "column", lg: "row" }}
                        gap={8}
                        w="full"
                        justify="space-between"
                    >
                        {steps.map((step, index) => (
                            <VStack
                                key={index}
                                flex={1}
                                p={8}
                                bg="bg.panel"
                                rounded="2xl"
                                borderWidth="1px"
                                align="start"
                                gap={4}
                                position="relative"
                            >
                                <Box
                                    position="absolute"
                                    top={4}
                                    right={4}
                                    fontSize="6xl"
                                    fontWeight="bold"
                                    color="fg.muted"
                                    opacity={0.1}
                                >
                                    {step.number}
                                </Box>
                                <Box
                                    p={4}
                                    bg="blue.subtle"
                                    color="blue.fg"
                                    rounded="xl"
                                >
                                    <Icon as={step.icon} boxSize={8} />
                                </Box>
                                <VStack align="start" gap={2} position="relative" zIndex={1}>
                                    <Heading size="xl">{step.title}</Heading>
                                    <Text color="fg.muted">
                                        {step.description}
                                    </Text>
                                </VStack>
                            </VStack>
                        ))}
                    </Flex>
                </VStack>
            </Container>
        </Box>
    )
}
