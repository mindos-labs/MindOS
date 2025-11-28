"use client"

import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Text,
    VStack,
} from "@chakra-ui/react"
import { CountingNumber } from "@/components/animate-ui/primitives/texts/counting-number"

const stats = [
    {
        value: 15,
        suffix: "",
        label: "Science-Backed Techniques",
        description: "From Spaced Repetition to Feynman"
    },
    {
        value: 80,
        suffix: "%",
        label: "Retention Improvement",
        description: "Students remember what they learn"
    },
    {
        value: 100,
        suffix: "%",
        label: "AI-Powered Learning",
        description: "Custom study plans for every goal"
    },
    {
        value: 1000,
        suffix: "+",
        label: "Active Learners",
        description: "Join our growing community"
    }
]

export default function StatsSection() {
    return (
        <Box py={24} bg="blue.600" color="white">
            <Container maxW="container.xl">
                <VStack gap={12}>
                    <VStack gap={4} textAlign="center">
                        <Heading size="4xl" fontWeight="bold">
                            The Science Behind MindOS
                        </Heading>
                        <Text fontSize="xl" opacity={0.9} maxW="2xl">
                            Built on cognitive science research and proven memory techniques
                        </Text>
                    </VStack>

                    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8} w="full">
                        {stats.map((stat, index) => (
                            <VStack
                                key={index}
                                p={8}
                                bg="whiteAlpha.200"
                                rounded="2xl"
                                backdropFilter="blur(10px)"
                                gap={2}
                                textAlign="center"
                            >
                                <CountingNumber
                                    number={stat.value}
                                    suffix={stat.suffix}
                                    animateOnView
                                    animateOnViewOnce
                                    duration={2000}
                                    delay={index * 100}
                                    className="text-5xl font-bold"
                                />
                                <Text fontSize="xl" fontWeight="semibold">
                                    {stat.label}
                                </Text>
                                <Text fontSize="sm" opacity={0.8}>
                                    {stat.description}
                                </Text>
                            </VStack>
                        ))}
                    </SimpleGrid>
                </VStack>
            </Container>
        </Box>
    )
}
