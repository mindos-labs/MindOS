"use client"

import {
    Box,
    Button,
    Heading,
    SimpleGrid,
    Text,
    VStack,
    HStack,
    Icon,
    Input,
    InputGroup,
    Card,
    Badge,
} from "@chakra-ui/react"
import {
    FaSearch,
    FaFolder,
    FaStickyNote,
    FaLink,
    FaArrowRight,
    FaYoutube,
    FaFilePdf,
    FaGlobe
} from "react-icons/fa"
import Link from "next/link"
import { useState } from "react"

// Mock data
const stats = [
    { label: "Total Resources", value: "127", icon: FaFolder, color: "blue" },
    { label: "Notes", value: "43", icon: FaStickyNote, color: "purple" },
    { label: "Connections", value: "89", icon: FaLink, color: "green" },
]

const recentResources = [
    {
        id: "1",
        title: "Introduction to Machine Learning",
        type: "video",
        source: "YouTube",
        icon: FaYoutube,
        color: "red",
        summary: "Comprehensive guide to ML fundamentals and algorithms",
        tags: ["AI", "ML", "Python"],
        date: "2 days ago"
    },
    {
        id: "2",
        title: "Deep Learning Research Paper",
        type: "pdf",
        source: "arXiv",
        icon: FaFilePdf,
        color: "orange",
        summary: "Latest advances in transformer architectures",
        tags: ["Deep Learning", "Transformers"],
        date: "5 days ago"
    },
    {
        id: "3",
        title: "React Best Practices 2025",
        type: "website",
        source: "dev.to",
        icon: FaGlobe,
        color: "blue",
        summary: "Modern React patterns and performance optimization",
        tags: ["React", "JavaScript", "Frontend"],
        date: "1 week ago"
    },
]

export default function MindCloudDashboard() {
    const [searchQuery, setSearchQuery] = useState("")

    return (
        <VStack align="stretch" gap={8}>
            {/* Search Bar */}
            <Box>
                <VStack align="stretch" gap={4}>
                    <Heading size="2xl">Search Your Second Brain</Heading>
                    <Text color="fg.muted" fontSize="lg">
                        Find anything you've ever learned, instantly.
                    </Text>
                    <HStack gap={4}>
                        <InputGroup flex={1}>
                            <Input
                                placeholder="Search resources, notes, topics..."
                                size="lg"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </InputGroup>
                        <Button size="lg" colorPalette="blue" asChild>
                            <Link href={`/mindcloud/search?q=${searchQuery}`}>
                                <Icon as={FaSearch} /> Search
                            </Link>
                        </Button>
                    </HStack>
                </VStack>
            </Box>

            {/* Stats */}
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
                {stats.map((stat, index) => (
                    <Card.Root key={index} variant="outline">
                        <Card.Body>
                            <HStack justify="space-between">
                                <VStack align="start" gap={1}>
                                    <Text fontSize="sm" color="fg.muted">
                                        {stat.label}
                                    </Text>
                                    <Heading size="3xl">{stat.value}</Heading>
                                </VStack>
                                <Box
                                    p={4}
                                    bg={`${stat.color}.subtle`}
                                    color={`${stat.color}.fg`}
                                    rounded="xl"
                                >
                                    <Icon as={stat.icon} boxSize={8} />
                                </Box>
                            </HStack>
                        </Card.Body>
                    </Card.Root>
                ))}
            </SimpleGrid>

            {/* Recent Resources */}
            <Box>
                <HStack justify="space-between" mb={6}>
                    <Heading size="xl">Recent Resources</Heading>
                    <Button variant="ghost" asChild>
                        <Link href="/mindcloud/resources">
                            View All <Icon as={FaArrowRight} />
                        </Link>
                    </Button>
                </HStack>

                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
                    {recentResources.map((resource) => (
                        <Card.Root
                            key={resource.id}
                            variant="outline"
                            _hover={{ shadow: "md", transform: "translateY(-2px)" }}
                            transition="all 0.2s"
                            asChild
                        >
                            <Link href={`/mindcloud/resources/${resource.id}`}>
                                <Card.Body>
                                    <VStack align="start" gap={3}>
                                        <HStack justify="space-between" w="full">
                                            <Box
                                                p={2}
                                                bg={`${resource.color}.subtle`}
                                                color={`${resource.color}.fg`}
                                                rounded="lg"
                                            >
                                                <Icon as={resource.icon} boxSize={5} />
                                            </Box>
                                            <Text fontSize="xs" color="fg.muted">
                                                {resource.date}
                                            </Text>
                                        </HStack>

                                        <VStack align="start" gap={2}>
                                            <Heading size="md">{resource.title}</Heading>
                                            <Text fontSize="sm" color="fg.muted" noOfLines={2}>
                                                {resource.summary}
                                            </Text>
                                        </VStack>

                                        <HStack gap={2} flexWrap="wrap">
                                            {resource.tags.map((tag) => (
                                                <Badge key={tag} size="sm" variant="subtle">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </HStack>
                                    </VStack>
                                </Card.Body>
                            </Link>
                        </Card.Root>
                    ))}
                </SimpleGrid>
            </Box>

            {/* Quick Actions */}
            <Box>
                <Heading size="xl" mb={6}>Quick Actions</Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                    <Button size="lg" variant="outline" asChild>
                        <Link href="/mindcloud/upload">
                            <Icon as={FaFolder} /> Add New Resource
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <Link href="/mindcloud/notes">
                            <Icon as={FaStickyNote} /> Create Note
                        </Link>
                    </Button>
                </SimpleGrid>
            </Box>
        </VStack>
    )
}
