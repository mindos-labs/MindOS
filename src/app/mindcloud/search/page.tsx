"use client"

import {
    Box,
    Button,
    Heading,
    Text,
    VStack,
    HStack,
    Icon,
    Input,
    InputGroup,
    Card,
    Badge,
    Flex,
    Container,
} from "@chakra-ui/react"
import {
    FaSearch,
    FaYoutube,
    FaFilePdf,
    FaGlobe,
    FaStickyNote,
    FaClock,
    FaDatabase,
} from "react-icons/fa"
import Link from "next/link"
import { useState } from "react"
import { useSearchParams } from "next/navigation"

const mockSearchResults = [
    {
        id: "1",
        title: "Introduction to Machine Learning - Complete Guide",
        type: "video",
        icon: FaYoutube,
        color: "red",
        url: "youtube.com/watch?v=example",
        summary: "Comprehensive guide to ML fundamentals covering supervised and unsupervised learning algorithms, neural networks, and practical applications in Python",
        tags: ["AI", "ML", "Python", "Tutorial"],
        relevance: 95,
        date: "2024-11-25",
        views: "2.4M",
    },
    {
        id: "2",
        title: "Deep Learning Research Paper - Transformer Architectures",
        type: "pdf",
        icon: FaFilePdf,
        color: "orange",
        url: "arxiv.org/abs/example",
        summary: "Latest advances in transformer architectures and attention mechanisms for NLP tasks. Includes benchmarks on GPT-4 and BERT models",
        tags: ["Deep Learning", "Transformers", "Research", "NLP"],
        relevance: 88,
        date: "2024-11-22",
        views: "145K",
    },
    {
        id: "3",
        title: "Neural Networks Explained - Interactive Tutorial",
        type: "website",
        icon: FaGlobe,
        color: "blue",
        url: "neuralnetworks.dev",
        summary: "Interactive tutorial on how neural networks work with visualizations, code examples, and hands-on exercises for beginners",
        tags: ["AI", "Neural Networks", "Tutorial", "Interactive"],
        relevance: 82,
        date: "2024-11-20",
        views: "890K",
    },
    {
        id: "4",
        title: "My ML Study Notes - Algorithms and Applications",
        type: "note",
        icon: FaStickyNote,
        color: "purple",
        url: "mindcloud/notes/4",
        summary: "Personal notes on machine learning algorithms including decision trees, random forests, SVMs, and their real-world applications",
        tags: ["ML", "Notes", "Study", "Algorithms"],
        relevance: 75,
        date: "2024-11-18",
        views: "Personal",
    },
    {
        id: "5",
        title: "PyTorch vs TensorFlow - Framework Comparison 2024",
        type: "website",
        icon: FaGlobe,
        color: "blue",
        url: "mlframeworks.com/comparison",
        summary: "In-depth comparison of PyTorch and TensorFlow frameworks, covering performance, ease of use, community support, and production deployment",
        tags: ["PyTorch", "TensorFlow", "ML", "Frameworks"],
        relevance: 70,
        date: "2024-11-15",
        views: "1.2M",
    },
]

export default function SearchPage() {
    const searchParams = useSearchParams()
    const initialQuery = searchParams.get("q") || ""

    const [searchQuery, setSearchQuery] = useState(initialQuery)
    const [activeQuery, setActiveQuery] = useState(initialQuery)

    const handleSearch = () => {
        setActiveQuery(searchQuery)
    }

    const filteredResults = mockSearchResults.filter(result => {
        if (activeQuery === "") return true
        return result.title.toLowerCase().includes(activeQuery.toLowerCase()) ||
            result.summary.toLowerCase().includes(activeQuery.toLowerCase()) ||
            result.tags.some(tag => tag.toLowerCase().includes(activeQuery.toLowerCase()))
    })

    const totalResources = "127,543"
    const searchTime = "0.42"

    return (
        <Box minH="100vh">
            {/* Search Header */}
            <Box
                bg={activeQuery ? "bg.panel" : "bg.canvas"}
                borderBottomWidth={activeQuery ? "1px" : 0}
                py={activeQuery ? 4 : 0}
                position="sticky"
                top={0}
                zIndex={10}
            >
                <Container maxW="container.xl">
                    {activeQuery ? (
                        // Compact search bar (like Google after search)
                        <HStack gap={4}>
                            <Link href="/mindcloud">
                                <Heading size="lg" color="blue.500">MindCloud</Heading>
                            </Link>
                            <InputGroup flex={1} maxW="600px">
                                <Input
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                                    size="md"
                                />
                            </InputGroup>
                            <Button colorPalette="blue" onClick={handleSearch}>
                                <Icon as={FaSearch} />
                            </Button>
                        </HStack>
                    ) : (
                        // Centered search (like Google homepage)
                        <VStack gap={8} py={20} textAlign="center">
                            <VStack gap={2}>
                                <HStack gap={2}>
                                    <Icon as={FaDatabase} boxSize={10} color="blue.500" />
                                    <Heading size="4xl" fontWeight="bold">
                                        Mind<Box as="span" color="blue.500">Cloud</Box>
                                    </Heading>
                                </HStack>
                                <Text color="fg.muted" fontSize="lg">
                                    Search {totalResources} learning resources
                                </Text>
                            </VStack>

                            <VStack gap={4} w="full" maxW="600px">
                                <InputGroup>
                                    <Input
                                        placeholder="Search for anything..."
                                        size="xl"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                                    />
                                </InputGroup>
                                <HStack gap={3}>
                                    <Button colorPalette="blue" onClick={handleSearch}>
                                        <Icon as={FaSearch} /> MindCloud Search
                                    </Button>
                                    <Button variant="outline" asChild>
                                        <Link href="/mindcloud">I'm Feeling Lucky</Link>
                                    </Button>
                                </HStack>
                            </VStack>

                            <HStack gap={4} fontSize="sm" color="fg.muted">
                                <Text>Popular: Machine Learning</Text>
                                <Text>•</Text>
                                <Text>React</Text>
                                <Text>•</Text>
                                <Text>System Design</Text>
                            </HStack>
                        </VStack>
                    )}
                </Container>
            </Box>

            {/* Search Results */}
            {activeQuery && (
                <Container maxW="container.lg" py={6}>
                    <VStack align="stretch" gap={6}>
                        {/* Search Stats */}
                        <Text fontSize="sm" color="fg.muted">
                            About {filteredResults.length.toLocaleString()} results ({searchTime} seconds)
                        </Text>

                        {/* Results */}
                        <VStack align="stretch" gap={4}>
                            {filteredResults.map((result) => (
                                <Card.Root
                                    key={result.id}
                                    variant="ghost"
                                    p={4}
                                    _hover={{ bg: "bg.subtle" }}
                                    transition="all 0.2s"
                                    asChild
                                >
                                    <Link href={`/mindcloud/resources/${result.id}`}>
                                        <VStack align="start" gap={2}>
                                            {/* URL and Type */}
                                            <HStack gap={2} fontSize="sm">
                                                <Icon as={result.icon} color={`${result.color}.500`} />
                                                <Text color="fg.muted">{result.url}</Text>
                                                <Badge size="xs" variant="subtle">
                                                    {result.type}
                                                </Badge>
                                            </HStack>

                                            {/* Title */}
                                            <Heading
                                                size="lg"
                                                color="blue.600"
                                                _hover={{ textDecoration: "underline" }}
                                            >
                                                {result.title}
                                            </Heading>

                                            {/* Summary */}
                                            <Text color="fg.muted" lineClamp={2}>
                                                {result.summary}
                                            </Text>

                                            {/* Meta Info */}
                                            <HStack gap={4} fontSize="xs" color="fg.muted">
                                                <HStack gap={1}>
                                                    <Icon as={FaClock} />
                                                    <Text>{new Date(result.date).toLocaleDateString()}</Text>
                                                </HStack>
                                                <Text>•</Text>
                                                <Text>{result.views} views</Text>
                                                <Text>•</Text>
                                                <HStack gap={1}>
                                                    {result.tags.slice(0, 3).map((tag) => (
                                                        <Badge key={tag} size="xs" variant="outline">
                                                            {tag}
                                                        </Badge>
                                                    ))}
                                                </HStack>
                                            </HStack>
                                        </VStack>
                                    </Link>
                                </Card.Root>
                            ))}
                        </VStack>

                        {filteredResults.length === 0 && (
                            <Box textAlign="center" py={12}>
                                <Icon as={FaSearch} boxSize={12} color="fg.muted" mb={4} />
                                <Heading size="lg" mb={2}>No results found</Heading>
                                <Text color="fg.muted">
                                    Try different keywords or check your spelling
                                </Text>
                            </Box>
                        )}

                        {/* Pagination placeholder */}
                        {filteredResults.length > 0 && (
                            <HStack justify="center" gap={2} pt={8}>
                                <Button variant="ghost" size="sm" disabled>Previous</Button>
                                <Button variant="solid" colorPalette="blue" size="sm">1</Button>
                                <Button variant="ghost" size="sm">2</Button>
                                <Button variant="ghost" size="sm">3</Button>
                                <Button variant="ghost" size="sm">Next</Button>
                            </HStack>
                        )}
                    </VStack>
                </Container>
            )}
        </Box>
    )
}
