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
    Textarea,
    Flex,
} from "@chakra-ui/react"
import {
    FaStickyNote,
    FaPlus,
    FaSearch,
    FaEdit,
    FaTrash,
    FaClock
} from "react-icons/fa"
import Link from "next/link"
import { useState } from "react"

const mockNotes = [
    {
        id: "1",
        title: "Machine Learning Fundamentals",
        content: "Key concepts: supervised learning, unsupervised learning, reinforcement learning. Important algorithms: linear regression, decision trees, neural networks...",
        tags: ["ML", "AI", "Study Notes"],
        lastEdited: "2024-11-25",
        wordCount: 450,
    },
    {
        id: "2",
        title: "React Hooks Cheat Sheet",
        content: "useState - manages state in functional components. useEffect - handles side effects. useContext - accesses context values. useMemo - memoizes expensive calculations...",
        tags: ["React", "JavaScript", "Reference"],
        lastEdited: "2024-11-23",
        wordCount: 320,
    },
    {
        id: "3",
        title: "System Design Patterns",
        content: "Load balancing, caching strategies, database sharding, microservices architecture, event-driven systems, CQRS pattern...",
        tags: ["System Design", "Architecture", "Interview Prep"],
        lastEdited: "2024-11-20",
        wordCount: 580,
    },
    {
        id: "4",
        title: "Python Best Practices",
        content: "PEP 8 style guide, type hints, virtual environments, testing with pytest, documentation with docstrings...",
        tags: ["Python", "Best Practices", "Coding"],
        lastEdited: "2024-11-18",
        wordCount: 390,
    },
]

export default function NotesPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [showCreateForm, setShowCreateForm] = useState(false)
    const [newNoteTitle, setNewNoteTitle] = useState("")
    const [newNoteContent, setNewNoteContent] = useState("")
    const [newNoteTags, setNewNoteTags] = useState("")

    const filteredNotes = mockNotes.filter(note =>
        searchQuery === "" ||
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    )

    const handleCreateNote = () => {
        // In real app, this would save to database
        console.log("Creating note:", { newNoteTitle, newNoteContent, newNoteTags })
        setShowCreateForm(false)
        setNewNoteTitle("")
        setNewNoteContent("")
        setNewNoteTags("")
    }

    return (
        <VStack align="stretch" gap={8}>
            {/* Header */}
            <Flex justify="space-between" align="center">
                <Box>
                    <Heading size="2xl" mb={2}>Notes</Heading>
                    <Text color="fg.muted" fontSize="lg">
                        {mockNotes.length} notes in your collection
                    </Text>
                </Box>
                <Button
                    colorPalette="blue"
                    size="lg"
                    onClick={() => setShowCreateForm(!showCreateForm)}
                >
                    <Icon as={FaPlus} /> Create Note
                </Button>
            </Flex>

            {/* Create Note Form */}
            {showCreateForm && (
                <Card.Root variant="outline" bg="blue.subtle">
                    <Card.Body>
                        <VStack align="stretch" gap={4}>
                            <Heading size="md">Create New Note</Heading>

                            <Box>
                                <Text fontWeight="medium" mb={2}>Title</Text>
                                <Input
                                    placeholder="Note title..."
                                    value={newNoteTitle}
                                    onChange={(e) => setNewNoteTitle(e.target.value)}
                                />
                            </Box>

                            <Box>
                                <Text fontWeight="medium" mb={2}>Content</Text>
                                <Textarea
                                    placeholder="Start writing your note..."
                                    rows={8}
                                    value={newNoteContent}
                                    onChange={(e) => setNewNoteContent(e.target.value)}
                                />
                                <Text fontSize="xs" color="fg.muted" mt={1}>
                                    Supports Markdown formatting
                                </Text>
                            </Box>

                            <Box>
                                <Text fontWeight="medium" mb={2}>Tags</Text>
                                <Input
                                    placeholder="AI, ML, Study (comma-separated)"
                                    value={newNoteTags}
                                    onChange={(e) => setNewNoteTags(e.target.value)}
                                />
                            </Box>

                            <HStack gap={3}>
                                <Button colorPalette="blue" onClick={handleCreateNote}>
                                    Save Note
                                </Button>
                                <Button variant="outline" onClick={() => setShowCreateForm(false)}>
                                    Cancel
                                </Button>
                            </HStack>
                        </VStack>
                    </Card.Body>
                </Card.Root>
            )}

            {/* Search */}
            <InputGroup>
                <Input
                    placeholder="Search notes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </InputGroup>

            {/* Results Count */}
            <Text color="fg.muted">
                Showing {filteredNotes.length} of {mockNotes.length} notes
            </Text>

            {/* Notes Grid */}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
                {filteredNotes.map((note) => (
                    <Card.Root
                        key={note.id}
                        variant="outline"
                        _hover={{ shadow: "md", transform: "translateY(-2px)" }}
                        transition="all 0.2s"
                    >
                        <Card.Body>
                            <VStack align="start" gap={3}>
                                <HStack justify="space-between" w="full">
                                    <Icon as={FaStickyNote} boxSize={5} color="purple.500" />
                                    <HStack gap={2}>
                                        <Button size="xs" variant="ghost">
                                            <Icon as={FaEdit} />
                                        </Button>
                                        <Button size="xs" variant="ghost" colorPalette="red">
                                            <Icon as={FaTrash} />
                                        </Button>
                                    </HStack>
                                </HStack>

                                <VStack align="start" gap={2}>
                                    <Heading size="md">{note.title}</Heading>
                                    <Text fontSize="sm" color="fg.muted" lineClamp={3}>
                                        {note.content}
                                    </Text>
                                </VStack>

                                <HStack gap={2} flexWrap="wrap">
                                    {note.tags.map((tag) => (
                                        <Badge key={tag} size="sm" variant="outline">
                                            {tag}
                                        </Badge>
                                    ))}
                                </HStack>

                                <HStack justify="space-between" w="full" fontSize="xs" color="fg.muted">
                                    <HStack gap={1}>
                                        <Icon as={FaClock} />
                                        <Text>{new Date(note.lastEdited).toLocaleDateString()}</Text>
                                    </HStack>
                                    <Text>{note.wordCount} words</Text>
                                </HStack>
                            </VStack>
                        </Card.Body>
                    </Card.Root>
                ))}
            </SimpleGrid>

            {filteredNotes.length === 0 && (
                <Box textAlign="center" py={12}>
                    <Icon as={FaSearch} boxSize={12} color="fg.muted" mb={4} />
                    <Heading size="lg" mb={2}>No notes found</Heading>
                    <Text color="fg.muted">Try adjusting your search query</Text>
                </Box>
            )}
        </VStack>
    )
}
