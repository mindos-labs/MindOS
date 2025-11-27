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
    Textarea,
    Card,
    Tabs,
} from "@chakra-ui/react"
import {
    FaUpload,
    FaLink,
    FaStickyNote,
    FaYoutube,
    FaFilePdf,
    FaGlobe
} from "react-icons/fa"
import { useState } from "react"

export default function UploadPage() {
    const [url, setUrl] = useState("")
    const [title, setTitle] = useState("")
    const [tags, setTags] = useState("")
    const [notes, setNotes] = useState("")

    return (
        <VStack align="stretch" gap={8} maxW="4xl" mx="auto">
            <Box>
                <Heading size="2xl" mb={2}>Add New Resource</Heading>
                <Text color="fg.muted" fontSize="lg">
                    Expand your second brain with new learning materials
                </Text>
            </Box>

            <Tabs.Root defaultValue="url" variant="enclosed">
                <Tabs.List>
                    <Tabs.Trigger value="url">
                        <Icon as={FaLink} /> Add URL
                    </Tabs.Trigger>
                    <Tabs.Trigger value="upload">
                        <Icon as={FaUpload} /> Upload File
                    </Tabs.Trigger>
                    <Tabs.Trigger value="note">
                        <Icon as={FaStickyNote} /> Create Note
                    </Tabs.Trigger>
                </Tabs.List>

                {/* Add URL Tab */}
                <Tabs.Content value="url">
                    <Card.Root variant="outline" mt={6}>
                        <Card.Body>
                            <VStack align="stretch" gap={6}>
                                <Box>
                                    <Text fontWeight="medium" mb={2}>Resource URL</Text>
                                    <Input
                                        placeholder="https://youtube.com/watch?v=..."
                                        size="lg"
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}
                                    />
                                    <Text fontSize="sm" color="fg.muted" mt={2}>
                                        Supports: YouTube, PDFs, websites, blog posts
                                    </Text>
                                </Box>

                                <Box>
                                    <Text fontWeight="medium" mb={2}>Title (optional)</Text>
                                    <Input
                                        placeholder="Auto-detected from URL"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </Box>

                                <Box>
                                    <Text fontWeight="medium" mb={2}>Tags</Text>
                                    <Input
                                        placeholder="AI, Machine Learning, Python (comma-separated)"
                                        value={tags}
                                        onChange={(e) => setTags(e.target.value)}
                                    />
                                </Box>

                                <Box>
                                    <Text fontWeight="medium" mb={2}>Notes (optional)</Text>
                                    <Textarea
                                        placeholder="Add your thoughts or context..."
                                        rows={4}
                                        value={notes}
                                        onChange={(e) => setNotes(e.target.value)}
                                    />
                                </Box>

                                <HStack gap={3}>
                                    <Button colorPalette="blue" size="lg">
                                        <Icon as={FaLink} /> Add Resource
                                    </Button>
                                    <Button variant="outline" size="lg">
                                        Cancel
                                    </Button>
                                </HStack>

                                <Box p={4} bg="blue.subtle" rounded="lg">
                                    <HStack gap={2} mb={2}>
                                        <Icon as={FaYoutube} color="blue.fg" />
                                        <Text fontWeight="medium" color="blue.fg">AI Features</Text>
                                    </HStack>
                                    <Text fontSize="sm" color="blue.fg">
                                        We'll automatically generate a summary, extract key topics, and suggest related resources.
                                    </Text>
                                </Box>
                            </VStack>
                        </Card.Body>
                    </Card.Root>
                </Tabs.Content>

                {/* Upload File Tab */}
                <Tabs.Content value="upload">
                    <Card.Root variant="outline" mt={6}>
                        <Card.Body>
                            <VStack align="stretch" gap={6}>
                                <Box
                                    p={12}
                                    borderWidth={2}
                                    borderStyle="dashed"
                                    rounded="lg"
                                    textAlign="center"
                                    bg="bg.subtle"
                                    cursor="pointer"
                                    _hover={{ bg: "bg.muted" }}
                                >
                                    <Icon as={FaUpload} boxSize={12} color="fg.muted" mb={4} />
                                    <Heading size="md" mb={2}>Drop files here or click to browse</Heading>
                                    <Text color="fg.muted">Supports: PDF, DOCX, TXT (max 50MB)</Text>
                                </Box>

                                <Box>
                                    <Text fontWeight="medium" mb={2}>Tags</Text>
                                    <Input placeholder="Add tags..." />
                                </Box>

                                <Box>
                                    <Text fontWeight="medium" mb={2}>Notes</Text>
                                    <Textarea placeholder="Add context..." rows={4} />
                                </Box>

                                <HStack gap={3}>
                                    <Button colorPalette="blue" size="lg">
                                        <Icon as={FaUpload} /> Upload & Process
                                    </Button>
                                    <Button variant="outline" size="lg">
                                        Cancel
                                    </Button>
                                </HStack>
                            </VStack>
                        </Card.Body>
                    </Card.Root>
                </Tabs.Content>

                {/* Create Note Tab */}
                <Tabs.Content value="note">
                    <Card.Root variant="outline" mt={6}>
                        <Card.Body>
                            <VStack align="stretch" gap={6}>
                                <Box>
                                    <Text fontWeight="medium" mb={2}>Note Title</Text>
                                    <Input placeholder="My Study Notes" size="lg" />
                                </Box>

                                <Box>
                                    <Text fontWeight="medium" mb={2}>Content</Text>
                                    <Textarea
                                        placeholder="Start writing your notes..."
                                        rows={12}
                                    />
                                    <Text fontSize="sm" color="fg.muted" mt={2}>
                                        Supports Markdown formatting
                                    </Text>
                                </Box>

                                <Box>
                                    <Text fontWeight="medium" mb={2}>Tags</Text>
                                    <Input placeholder="Study, Notes, Important" />
                                </Box>

                                <HStack gap={3}>
                                    <Button colorPalette="blue" size="lg">
                                        <Icon as={FaStickyNote} /> Save Note
                                    </Button>
                                    <Button variant="outline" size="lg">
                                        Cancel
                                    </Button>
                                </HStack>
                            </VStack>
                        </Card.Body>
                    </Card.Root>
                </Tabs.Content>
            </Tabs.Root>
        </VStack>
    )
}
