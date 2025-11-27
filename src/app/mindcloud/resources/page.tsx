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
    Select,
} from "@chakra-ui/react"
import {
    FaYoutube,
    FaFilePdf,
    FaGlobe,
    FaStickyNote,
    FaFilter,
    FaSearch
} from "react-icons/fa"
import Link from "next/link"
import { useState } from "react"
import { createListCollection } from "@chakra-ui/react"

const typeOptions = createListCollection({
    items: [
        { label: "All Types", value: "all" },
        { label: "Videos", value: "video" },
        { label: "PDFs", value: "pdf" },
        { label: "Websites", value: "website" },
        { label: "Notes", value: "note" },
    ],
})

const sortOptions = createListCollection({
    items: [
        { label: "Most Recent", value: "recent" },
        { label: "Oldest First", value: "oldest" },
        { label: "Title (A-Z)", value: "title" },
    ],
})

const mockResources = [
    {
        id: "1",
        title: "Introduction to Machine Learning",
        type: "video",
        icon: FaYoutube,
        color: "red",
        summary: "Comprehensive guide to ML fundamentals covering supervised and unsupervised learning",
        tags: ["AI", "ML", "Python"],
        date: "2024-11-25",
        project: "AI Mastery"
    },
    {
        id: "2",
        title: "Deep Learning Research Paper",
        type: "pdf",
        icon: FaFilePdf,
        color: "orange",
        summary: "Latest advances in transformer architectures and attention mechanisms",
        tags: ["Deep Learning", "Transformers", "Research"],
        date: "2024-11-22",
        project: "AI Mastery"
    },
    {
        id: "3",
        title: "React Best Practices 2025",
        type: "website",
        icon: FaGlobe,
        color: "blue",
        summary: "Modern React patterns, hooks, and performance optimization techniques",
        tags: ["React", "JavaScript", "Frontend"],
        date: "2024-11-20",
        project: "Web Development"
    },
    {
        id: "4",
        title: "My Study Notes - Calculus",
        type: "note",
        icon: FaStickyNote,
        color: "purple",
        summary: "Personal notes on limits, derivatives, and integrals with examples",
        tags: ["Math", "Calculus", "Notes"],
        date: "2024-11-18",
        project: "Mathematics"
    },
    {
        id: "5",
        title: "System Design Interview Prep",
        type: "video",
        icon: FaYoutube,
        color: "red",
        summary: "Complete guide to acing system design interviews at top tech companies",
        tags: ["System Design", "Interview", "Career"],
        date: "2024-11-15",
        project: "Interview Prep"
    },
    {
        id: "6",
        title: "Microservices Architecture Guide",
        type: "pdf",
        icon: FaFilePdf,
        color: "orange",
        summary: "Building scalable microservices with Docker, Kubernetes, and service mesh",
        tags: ["Microservices", "DevOps", "Architecture"],
        date: "2024-11-12",
        project: "Backend Development"
    },
]

export default function ResourcesPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [filterType, setFilterType] = useState("all")
    const [sortBy, setSortBy] = useState("recent")

    const filteredResources = mockResources
        .filter(r =>
            (filterType === "all" || r.type === filterType) &&
            (searchQuery === "" ||
                r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                r.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
            )
        )
        .sort((a, b) => {
            if (sortBy === "recent") return new Date(b.date).getTime() - new Date(a.date).getTime()
            if (sortBy === "oldest") return new Date(a.date).getTime() - new Date(b.date).getTime()
            return a.title.localeCompare(b.title)
        })

    return (
        <VStack align="stretch" gap={8}>
            {/* Header */}
            <Box>
                <Heading size="2xl" mb={2}>All Resources</Heading>
                <Text color="fg.muted" fontSize="lg">
                    {mockResources.length} resources in your second brain
                </Text>
            </Box>

            {/* Filters */}
            <Flex gap={4} wrap="wrap">
                <InputGroup flex={1} minW="300px">
                    <Input
                        placeholder="Search resources..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </InputGroup>

                <Select.Root
                    collection={typeOptions}
                    value={[filterType]}
                    onValueChange={(e) => setFilterType(e.value[0])}
                    w="200px"
                >
                    <Select.Trigger>
                        <Select.ValueText placeholder="Filter by type" />
                    </Select.Trigger>
                    <Select.Content>
                        {typeOptions.items.map((item) => (
                            <Select.Item key={item.value} item={item}>
                                {item.label}
                            </Select.Item>
                        ))}
                    </Select.Content>
                </Select.Root>

                <Select.Root
                    collection={sortOptions}
                    value={[sortBy]}
                    onValueChange={(e) => setSortBy(e.value[0])}
                    w="200px"
                >
                    <Select.Trigger>
                        <Select.ValueText placeholder="Sort by" />
                    </Select.Trigger>
                    <Select.Content>
                        {sortOptions.items.map((item) => (
                            <Select.Item key={item.value} item={item}>
                                {item.label}
                            </Select.Item>
                        ))}
                    </Select.Content>
                </Select.Root>
            </Flex>

            {/* Results Count */}
            <Text color="fg.muted">
                Showing {filteredResources.length} of {mockResources.length} resources
            </Text>

            {/* Resources Grid */}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
                {filteredResources.map((resource) => (
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
                                        <Badge size="sm" variant="subtle">
                                            {resource.type}
                                        </Badge>
                                    </HStack>

                                    <VStack align="start" gap={2}>
                                        <Heading size="md">{resource.title}</Heading>
                                        <Text fontSize="sm" color="fg.muted" noOfLines={2}>
                                            {resource.summary}
                                        </Text>
                                    </VStack>

                                    <HStack gap={2} flexWrap="wrap">
                                        {resource.tags.slice(0, 3).map((tag) => (
                                            <Badge key={tag} size="sm" variant="outline">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </HStack>

                                    <Text fontSize="xs" color="fg.muted">
                                        {new Date(resource.date).toLocaleDateString()} • {resource.project}
                                    </Text>
                                </VStack>
                            </Card.Body>
                        </Link>
                    </Card.Root>
                ))}
            </SimpleGrid>

            {filteredResources.length === 0 && (
                <Box textAlign="center" py={12}>
                    <Icon as={FaSearch} boxSize={12} color="fg.muted" mb={4} />
                    <Heading size="lg" mb={2}>No resources found</Heading>
                    <Text color="fg.muted">Try adjusting your filters or search query</Text>
                </Box>
            )}
        </VStack>
    )
}
