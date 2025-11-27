"use client"

import {
    Box,
    Button,
    Heading,
    Text,
    VStack,
    HStack,
    Icon,
    Badge,
    Card,
    SimpleGrid,
} from "@chakra-ui/react"
import {
    FaYoutube,
    FaExternalLinkAlt,
    FaDownload,
    FaQuestionCircle,
    FaArrowLeft,
    FaBrain
} from "react-icons/fa"
import Link from "next/link"
import { use } from "react"

// Mock resource data
const mockResource = {
    id: "1",
    title: "Introduction to Machine Learning",
    type: "video",
    icon: FaYoutube,
    color: "red",
    url: "https://youtube.com/watch?v=example",
    summary: "This comprehensive guide covers the fundamentals of machine learning, including supervised and unsupervised learning algorithms. You'll learn about linear regression, decision trees, neural networks, and how to apply these concepts in real-world scenarios using Python and popular ML libraries.",
    fullContent: `
# Introduction to Machine Learning

## What is Machine Learning?
Machine Learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed.

## Key Concepts Covered:
- Supervised Learning
- Unsupervised Learning
- Neural Networks
- Model Training and Evaluation
- Feature Engineering

## Tools and Libraries:
- Python
- scikit-learn
- TensorFlow
- PyTorch
  `,
    tags: ["AI", "ML", "Python", "Data Science"],
    date: "2024-11-25",
    project: "AI Mastery",
    relatedResources: [
        { id: "2", title: "Deep Learning Research Paper", type: "pdf" },
        { id: "5", title: "System Design Interview Prep", type: "video" },
    ]
}

export default function ResourceDetailPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = use(params)

    return (
        <VStack align="stretch" gap={8}>
            {/* Back Button */}
            <Button variant="ghost" alignSelf="flex-start" asChild>
                <Link href="/mindcloud/resources">
                    <Icon as={FaArrowLeft} /> Back to Resources
                </Link>
            </Button>

            {/* Header */}
            <Box>
                <HStack gap={4} mb={4}>
                    <Box
                        p={3}
                        bg={`${mockResource.color}.subtle`}
                        color={`${mockResource.color}.fg`}
                        rounded="xl"
                    >
                        <Icon as={mockResource.icon} boxSize={8} />
                    </Box>
                    <VStack align="start" gap={1} flex={1}>
                        <HStack gap={2}>
                            <Badge size="lg" variant="subtle">
                                {mockResource.type}
                            </Badge>
                            <Text fontSize="sm" color="fg.muted">
                                {new Date(mockResource.date).toLocaleDateString()}
                            </Text>
                        </HStack>
                        <Heading size="2xl">{mockResource.title}</Heading>
                    </VStack>
                </HStack>

                <HStack gap={2} mb={4} flexWrap="wrap">
                    {mockResource.tags.map((tag) => (
                        <Badge key={tag} size="md" variant="outline">
                            {tag}
                        </Badge>
                    ))}
                </HStack>

                <HStack gap={3}>
                    <Button colorPalette="blue" asChild>
                        <a href={mockResource.url} target="_blank" rel="noopener noreferrer">
                            <Icon as={FaExternalLinkAlt} /> Open Resource
                        </a>
                    </Button>
                    <Button variant="outline">
                        <Icon as={FaQuestionCircle} /> Generate Quiz
                    </Button>
                    <Button variant="outline">
                        <Icon as={FaDownload} /> Export
                    </Button>
                </HStack>
            </Box>

            {/* AI Summary */}
            <Card.Root variant="outline">
                <Card.Header>
                    <HStack>
                        <Icon as={FaBrain} color="blue.500" />
                        <Heading size="lg">AI Summary</Heading>
                    </HStack>
                </Card.Header>
                <Card.Body>
                    <Text>{mockResource.summary}</Text>
                </Card.Body>
            </Card.Root>

            {/* Content */}
            <Card.Root variant="outline">
                <Card.Header>
                    <Heading size="lg">Content</Heading>
                </Card.Header>
                <Card.Body>
                    <Box
                        css={{
                            "& h1": { fontSize: "2xl", fontWeight: "bold", mb: 4 },
                            "& h2": { fontSize: "xl", fontWeight: "bold", mb: 3, mt: 6 },
                            "& ul": { pl: 6, mb: 4 },
                            "& li": { mb: 2 },
                        }}
                    >
                        <Text whiteSpace="pre-wrap">{mockResource.fullContent}</Text>
                    </Box>
                </Card.Body>
            </Card.Root>

            {/* Related Resources */}
            <Box>
                <Heading size="lg" mb={4}>Related Resources</Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                    {mockResource.relatedResources.map((related) => (
                        <Card.Root key={related.id} variant="outline" asChild>
                            <Link href={`/mindcloud/resources/${related.id}`}>
                                <Card.Body>
                                    <HStack>
                                        <Badge size="sm">{related.type}</Badge>
                                        <Text fontWeight="medium">{related.title}</Text>
                                    </HStack>
                                </Card.Body>
                            </Link>
                        </Card.Root>
                    ))}
                </SimpleGrid>
            </Box>

            {/* Metadata */}
            <Card.Root variant="outline">
                <Card.Header>
                    <Heading size="md">Metadata</Heading>
                </Card.Header>
                <Card.Body>
                    <SimpleGrid columns={2} gap={4}>
                        <Box>
                            <Text fontSize="sm" color="fg.muted">Project</Text>
                            <Text fontWeight="medium">{mockResource.project}</Text>
                        </Box>
                        <Box>
                            <Text fontSize="sm" color="fg.muted">Date Added</Text>
                            <Text fontWeight="medium">{new Date(mockResource.date).toLocaleDateString()}</Text>
                        </Box>
                        <Box>
                            <Text fontSize="sm" color="fg.muted">Type</Text>
                            <Text fontWeight="medium">{mockResource.type}</Text>
                        </Box>
                        <Box>
                            <Text fontSize="sm" color="fg.muted">Tags</Text>
                            <Text fontWeight="medium">{mockResource.tags.length} tags</Text>
                        </Box>
                    </SimpleGrid>
                </Card.Body>
            </Card.Root>
        </VStack>
    )
}
