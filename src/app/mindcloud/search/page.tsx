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
    Flex,
    Checkbox,
} from "@chakra-ui/react"
import {
    FaSearch,
    FaYoutube,
    FaFilePdf,
    FaGlobe,
    FaStickyNote,
    FaFilter,
    FaTimes
} from "react-icons/fa"
import Link from "next/link"
import { useState } from "react"
import { useSearchParams } from "next/navigation"

const mockSearchResults = [
    {
        id: "1",
        title: "Introduction to Machine Learning",
        type: "video",
        icon: FaYoutube,
        color: "red",
        summary: "Comprehensive guide to ML fundamentals covering supervised and unsupervised learning algorithms",
        tags: ["AI", "ML", "Python"],
        relevance: 95,
        date: "2024-11-25",
    },
    {
        id: "2",
        title: "Deep Learning Research Paper",
        type: "pdf",
        icon: FaFilePdf,
        color: "orange",
        summary: "Latest advances in transformer architectures and attention mechanisms for NLP tasks",
        tags: ["Deep Learning", "Transformers", "Research"],
        relevance: 88,
        date: "2024-11-22",
    },
    {
        id: "3",
        title: "Neural Networks Explained",
        type: "website",
        icon: FaGlobe,
        color: "blue",
        summary: "Interactive tutorial on how neural networks work with visualizations",
        tags: ["AI", "Neural Networks", "Tutorial"],
        relevance: 82,
        date: "2024-11-20",
    },
    {
        id: "4",
        title: "My ML Study Notes",
        type: "note",
        icon: FaStickyNote,
        color: "purple",
        summary: "Personal notes on machine learning algorithms and their applications",
        tags: ["ML", "Notes", "Study"],
        relevance: 75,
        date: "2024-11-18",
    },
]

export default function SearchPage() {
    const searchParams = useSearchParams()
    const initialQuery = searchParams.get("q") || ""

    const [searchQuery, setSearchQuery] = useState(initialQuery)
    const [activeQuery, setActiveQuery] = useState(initialQuery)
    const [selectedTypes, setSelectedTypes] = useState<string[]>([])
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const [semanticSearch, setSemanticSearch] = useState(true)

    const handleSearch = () => {
        setActiveQuery(searchQuery)
    }

    const filteredResults = mockSearchResults.filter(result => {
        const matchesQuery = activeQuery === "" ||
            result.title.toLowerCase().includes(activeQuery.toLowerCase()) ||
            result.summary.toLowerCase().includes(activeQuery.toLowerCase()) ||
            result.tags.some(tag => tag.toLowerCase().includes(activeQuery.toLowerCase()))

        const matchesType = selectedTypes.length === 0 || selectedTypes.includes(result.type)
        const matchesTags = selectedTags.length === 0 ||
            result.tags.some(tag => selectedTags.includes(tag))

        return matchesQuery && matchesType && matchesTags
    })

    const allTags = Array.from(new Set(mockSearchResults.flatMap(r => r.tags)))

    return (
        <Flex gap={8}>
            {/* Filters Sidebar */}
            <Box w="280px" flexShrink={0}>
                <VStack align="stretch" gap={6}>
                    <Box>
                        <HStack justify="space-between" mb={4}>
                            <Heading size="md">Filters</Heading>
                            {(selectedTypes.length > 0 || selectedTags.length > 0) && (
                                <Button
                                    size="sm"
                                    variant="ghost"
                                    onClick={() => {
                                        setSelectedTypes([])
                                        setSelectedTags([])
                                    }}
                                >
                                    Clear All
                                </Button>
                            )}
                        </HStack>

                        {/* Search Mode */}
                        <Card.Root variant="outline" mb={4}>
                            <Card.Body>
                                <VStack align="stretch" gap={3}>
                                    <Text fontWeight="medium" fontSize="sm">Search Mode</Text>
                                    <Checkbox.Root
                                        checked={semanticSearch}
                                        onCheckedChange={(e) => setSemanticSearch(!!e.checked)}
                                    >
                                        <Checkbox.HiddenInput />
                                        <Checkbox.Control />
                                        <Checkbox.Label>
                                            <Text fontSize="sm">Semantic Search</Text>
                                        </Checkbox.Label>
                                    </Checkbox.Root>
                                    <Text fontSize="xs" color="fg.muted">
                                        {semanticSearch
                                            ? "AI-powered search finds related concepts"
                                            : "Exact keyword matching only"}
                                    </Text>
                                </VStack>
                            </Card.Body>
                        </Card.Root>

                        {/* Resource Type */}
                        <Card.Root variant="outline" mb={4}>
                            <Card.Body>
                                <VStack align="stretch" gap={3}>
                                    <Text fontWeight="medium" fontSize="sm">Resource Type</Text>
                                    {["video", "pdf", "website", "note"].map((type) => (
                                        <Checkbox.Root
                                            key={type}
                                            checked={selectedTypes.includes(type)}
                                            onCheckedChange={(e: any) => {
                                                if (e.checked) {
                                                    setSelectedTypes([...selectedTypes, type])
                                                } else {
                                                    setSelectedTypes(selectedTypes.filter(t => t !== type))
                                                }
                                            }}
                                        >
                                            <Checkbox.HiddenInput />
                                            <Checkbox.Control />
                                            <Checkbox.Label>
                                                <Text fontSize="sm" textTransform="capitalize">{type}s</Text>
                                            </Checkbox.Label>
                                        </Checkbox.Root>
                                    ))}
                                </VStack>
                            </Card.Body>
                        </Card.Root>

                        {/* Tags */}
                        <Card.Root variant="outline">
                            <Card.Body>
                                <VStack align="stretch" gap={3}>
                                    <Text fontWeight="medium" fontSize="sm">Tags</Text>
                                    <Flex gap={2} flexWrap="wrap">
                                        {allTags.map((tag) => (
                                            <Badge
                                                key={tag}
                                                size="sm"
                                                variant={selectedTags.includes(tag) ? "solid" : "outline"}
                                                colorPalette="blue"
                                                cursor="pointer"
                                                onClick={() => {
                                                    if (selectedTags.includes(tag)) {
                                                        setSelectedTags(selectedTags.filter(t => t !== tag))
                                                    } else {
                                                        setSelectedTags([...selectedTags, tag])
                                                    }
                                                }}
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                    </Flex>
                                </VStack>
                            </Card.Body>
                        </Card.Root>
                    </Box>
                </VStack>
            </Box>

            {/* Main Content */}
            <VStack align="stretch" gap={6} flex={1}>
                {/* Search Bar */}
                <Box>
                    <Heading size="2xl" mb={4}>Advanced Search</Heading>
                    <HStack gap={3}>
                        <InputGroup flex={1}>
                            <Input
                                placeholder="Search resources, notes, topics..."
                                size="lg"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                            />
                        </InputGroup>
                        <Button size="lg" colorPalette="blue" onClick={handleSearch}>
                            <Icon as={FaSearch} /> Search
                        </Button>
                    </HStack>
                </Box>

                {/* Active Filters */}
                {(selectedTypes.length > 0 || selectedTags.length > 0) && (
                    <HStack gap={2} flexWrap="wrap">
                        <Text fontSize="sm" fontWeight="medium">Active filters:</Text>
                        {selectedTypes.map((type) => (
                            <Badge
                                key={type}
                                size="sm"
                                variant="solid"
                                colorPalette="blue"
                            >
                                {type}
                                <Icon
                                    as={FaTimes}
                                    ml={1}
                                    cursor="pointer"
                                    onClick={() => setSelectedTypes(selectedTypes.filter(t => t !== type))}
                                />
                            </Badge>
                        ))}
                        {selectedTags.map((tag) => (
                            <Badge
                                key={tag}
                                size="sm"
                                variant="solid"
                                colorPalette="purple"
                            >
                                {tag}
                                <Icon
                                    as={FaTimes}
                                    ml={1}
                                    cursor="pointer"
                                    onClick={() => setSelectedTags(selectedTags.filter(t => t !== tag))}
                                />
                            </Badge>
                        ))}
                    </HStack>
                )}

                {/* Results */}
                <Box>
                    <Text color="fg.muted" mb={4}>
                        {filteredResults.length} results found
                        {activeQuery && ` for "${activeQuery}"`}
                    </Text>

                    <VStack align="stretch" gap={4}>
                        {filteredResults.map((result) => (
                            <Card.Root
                                key={result.id}
                                variant="outline"
                                _hover={{ shadow: "md" }}
                                transition="all 0.2s"
                                asChild
                            >
                                <Link href={`/mindcloud/resources/${result.id}`}>
                                    <Card.Body>
                                        <Flex gap={4}>
                                            <Box
                                                p={3}
                                                bg={`${result.color}.subtle`}
                                                color={`${result.color}.fg`}
                                                rounded="lg"
                                                h="fit-content"
                                            >
                                                <Icon as={result.icon} boxSize={6} />
                                            </Box>

                                            <VStack align="start" gap={2} flex={1}>
                                                <HStack justify="space-between" w="full">
                                                    <Heading size="lg">{result.title}</Heading>
                                                    <Badge size="sm" colorPalette="green">
                                                        {result.relevance}% match
                                                    </Badge>
                                                </HStack>

                                                <Text color="fg.muted">{result.summary}</Text>

                                                <HStack gap={2} flexWrap="wrap">
                                                    <Badge size="sm" variant="subtle">
                                                        {result.type}
                                                    </Badge>
                                                    {result.tags.map((tag) => (
                                                        <Badge key={tag} size="sm" variant="outline">
                                                            {tag}
                                                        </Badge>
                                                    ))}
                                                    <Text fontSize="xs" color="fg.muted" ml="auto">
                                                        {new Date(result.date).toLocaleDateString()}
                                                    </Text>
                                                </HStack>
                                            </VStack>
                                        </Flex>
                                    </Card.Body>
                                </Link>
                            </Card.Root>
                        ))}
                    </VStack>

                    {filteredResults.length === 0 && (
                        <Box textAlign="center" py={12}>
                            <Icon as={FaSearch} boxSize={12} color="fg.muted" mb={4} />
                            <Heading size="lg" mb={2}>No results found</Heading>
                            <Text color="fg.muted">Try adjusting your search query or filters</Text>
                        </Box>
                    )}
                </Box>
            </VStack>
        </Flex>
    )
}
