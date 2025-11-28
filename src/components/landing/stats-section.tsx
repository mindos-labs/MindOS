"use client"

import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Text,
    VStack,
    Icon,
} from "@chakra-ui/react"
import { NumberTicker } from "@/components/ui/number-ticker"
import { Ripple } from "@/components/ui/ripple"
import { FaBrain, FaChartLine, FaRocket, FaUsers } from "react-icons/fa"

const stats = [
    {
        value: 15,
        suffix: "",
        label: "Science-Backed Techniques",
        description: "From Spaced Repetition to Feynman",
        icon: FaBrain,
        color: "blue.400",
    },
    {
        value: 98,
        suffix: "%",
        label: "Retention Improvement",
        description: "Students remember what they learn",
        icon: FaChartLine,
        color: "green.400",
    },
    {
        value: 100,
        suffix: "%",
        label: "AI-Powered Learning",
        description: "Custom study plans for every goal",
        icon: FaRocket,
        color: "purple.400",
    },
    {
        value: 10000,
        suffix: "+",
        label: "Active Learners",
        description: "Join our growing community",
        icon: FaUsers,
        color: "orange.400",
    },
]

export function StatsSection() {
    return (
        <Box py={24} bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" color="white" position="relative" overflow="hidden">
            <Ripple />
            <Container maxW="container.xl" position="relative" zIndex={1}>
                <VStack gap={16}>
                    <VStack gap={4} textAlign="center">
                        <Heading size="4xl" fontWeight="bold">
                            The Numbers Speak for Themselves
                        </Heading>
                        <Text fontSize="xl" opacity={0.95} maxW="2xl">
                            Built on cognitive science research and proven memory techniques, trusted by thousands
                        </Text>
                    </VStack>

                    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8} w="full">
                        {stats.map((stat, index) => (
                            <Box
                                key={index}
                                p={8}
                                bg="whiteAlpha.200"
                                backdropFilter="blur(20px)"
                                rounded="2xl"
                                borderWidth="1px"
                                borderColor="whiteAlpha.300"
                                shadow="2xl"
                                textAlign="center"
                                transition="all 0.3s"
                                _hover={{
                                    transform: "translateY(-8px) scale(1.02)",
                                    shadow: "2xl",
                                    bg: "whiteAlpha.300",
                                }}
                                position="relative"
                                overflow="hidden"
                            >
                                <VStack gap={4}>
                                    <Box
                                        p={4}
                                        bg={stat.color}
                                        rounded="full"
                                        display="inline-block"
                                    >
                                        <Icon as={stat.icon} boxSize={8} color="white" />
                                    </Box>

                                    <Box fontSize="5xl" fontWeight="bold" lineHeight="1">
                                        <NumberTicker value={stat.value} />
                                        <Box as="span">{stat.suffix}</Box>
                                    </Box>

                                    <VStack gap={1}>
                                        <Text fontSize="xl" fontWeight="semibold">
                                            {stat.label}
                                        </Text>
                                        <Text fontSize="sm" opacity={0.9}>
                                            {stat.description}
                                        </Text>
                                    </VStack>
                                </VStack>

                                {/* Decorative shine effect */}
                                <Box
                                    position="absolute"
                                    top="-50%"
                                    right="-50%"
                                    w="200%"
                                    h="200%"
                                    bg="linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)"
                                    transform="rotate(45deg)"
                                    opacity={0}
                                    transition="opacity 0.5s"
                                    _groupHover={{ opacity: 1 }}
                                />
                            </Box>
                        ))}
                    </SimpleGrid>

                    <Box textAlign="center" pt={8}>
                        <Text fontSize="sm" opacity={0.9}>
                            Real results from 10,000+ students across 50+ universities worldwide
                        </Text>
                    </Box>
                </VStack>
            </Container>
        </Box>
    )
}
