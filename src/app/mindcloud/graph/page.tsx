"use client"

import {
    Box,
    Button,
    Heading,
    Text,
    VStack,
    HStack,
    Icon,
    Card,
    Badge,
    SimpleGrid,
    Flex,
} from "@chakra-ui/react"
import {
    FaProjectDiagram,
    FaExpand,
    FaCompress,
    FaFilter,
    FaCircle,
    FaArrowRight
} from "react-icons/fa"
import { useState } from "react"

const mockGraphData = {
    nodes: [
        { id: "ml", label: "Machine Learning", type: "topic", connections: 8 },
        { id: "dl", label: "Deep Learning", type: "topic", connections: 5 },
        { id: "nn", label: "Neural Networks", type: "topic", connections: 6 },
        { id: "python", label: "Python", type: "topic", connections: 12 },
        { id: "react", label: "React", type: "topic", connections: 7 },
        { id: "ai-project", label: "AI Mastery", type: "project", connections: 15 },
        { id: "web-project", label: "Web Development", type: "project", connections: 10 },
    ],
    edges: [
        { from: "ml", to: "dl", strength: "strong" },
        { from: "dl", to: "nn", strength: "strong" },
        { from: "ml", to: "python", strength: "medium" },
        { from: "ml", to: "ai-project", strength: "strong" },
        { from: "react", to: "web-project", strength: "strong" },
    ]
}

const nodeColors = {
    topic: { bg: "blue.subtle", fg: "blue.fg", border: "blue.500" },
    project: { bg: "purple.subtle", fg: "purple.fg", border: "purple.500" },
    resource: { bg: "green.subtle", fg: "green.fg", border: "green.500" },
}

export default function GraphPage() {
    const [selectedNode, setSelectedNode] = useState<string | null>(null)
    const [filterType, setFilterType] = useState<string>("all")
    const [isFullscreen, setIsFullscreen] = useState(false)

    const filteredNodes = mockGraphData.nodes.filter(node =>
        filterType === "all" || node.type === filterType
    )

    const selectedNodeData = mockGraphData.nodes.find(n => n.id === selectedNode)

    return (
        <VStack align="stretch" gap={8}>
            {/* Header */}
            <Flex justify="space-between" align="center">
                <Box>
                    <Heading size="2xl" mb={2}>Knowledge Graph</Heading>
                    <Text color="fg.muted" fontSize="lg">
                        Visualize connections between your learning resources
                    </Text>
                </Box>
                <HStack gap={3}>
                    <Button variant="outline" onClick={() => setFilterType("all")}>
                        All
                    </Button>
                    <Button variant="outline" onClick={() => setFilterType("topic")}>
                        Topics
                    </Button>
                    <Button variant="outline" onClick={() => setFilterType("project")}>
                        Projects
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => setIsFullscreen(!isFullscreen)}
                    >
                        <Icon as={isFullscreen ? FaCompress : FaExpand} />
                    </Button>
                </HStack>
            </Flex>

            {/* Graph Visualization Placeholder */}
            <Card.Root variant="outline" h="500px">
                <Card.Body>
                    <Flex
                        h="full"
                        align="center"
                        justify="center"
                        bg="bg.subtle"
                        rounded="lg"
                        position="relative"
                    >
                        {/* Simple visual representation */}
                        <VStack gap={8}>
                            <Icon as={FaProjectDiagram} boxSize={20} color="blue.500" />
                            <VStack gap={2}>
                                <Heading size="lg">Interactive Graph Coming Soon</Heading>
                                <Text color="fg.muted" textAlign="center" maxW="md">
                                    This will display an interactive knowledge graph using React Flow or D3.js,
                                    showing connections between topics, projects, and resources.
                                </Text>
                            </VStack>

                            {/* Mock node visualization */}
                            <SimpleGrid columns={3} gap={4} mt={8}>
                                {filteredNodes.slice(0, 6).map((node) => {
                                    const colors = nodeColors[node.type as keyof typeof nodeColors]
                                    return (
                                        <Box
                                            key={node.id}
                                            p={4}
                                            bg={colors.bg}
                                            borderWidth={2}
                                            borderColor={colors.border}
                                            rounded="lg"
                                            cursor="pointer"
                                            onClick={() => setSelectedNode(node.id)}
                                            _hover={{ shadow: "md", transform: "scale(1.05)" }}
                                            transition="all 0.2s"
                                        >
                                            <VStack gap={1}>
                                                <Icon as={FaCircle} color={colors.border} />
                                                <Text fontSize="sm" fontWeight="medium" textAlign="center">
                                                    {node.label}
                                                </Text>
                                                <Badge size="xs" variant="subtle">
                                                    {node.connections} connections
                                                </Badge>
                                            </VStack>
                                        </Box>
                                    )
                                })}
                            </SimpleGrid>
                        </VStack>
                    </Flex>
                </Card.Body>
            </Card.Root>

            {/* Node Details */}
            {selectedNodeData && (
                <Card.Root variant="outline">
                    <Card.Header>
                        <Heading size="md">Node Details: {selectedNodeData.label}</Heading>
                    </Card.Header>
                    <Card.Body>
                        <SimpleGrid columns={2} gap={4}>
                            <Box>
                                <Text fontSize="sm" color="fg.muted">Type</Text>
                                <Badge size="md" variant="subtle" textTransform="capitalize">
                                    {selectedNodeData.type}
                                </Badge>
                            </Box>
                            <Box>
                                <Text fontSize="sm" color="fg.muted">Connections</Text>
                                <Text fontWeight="medium">{selectedNodeData.connections}</Text>
                            </Box>
                        </SimpleGrid>
                    </Card.Body>
                </Card.Root>
            )}

            {/* Graph Stats */}
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
                <Card.Root variant="outline">
                    <Card.Body>
                        <VStack align="start" gap={2}>
                            <Text fontSize="sm" color="fg.muted">Total Nodes</Text>
                            <Heading size="2xl">{mockGraphData.nodes.length}</Heading>
                            <Text fontSize="xs" color="fg.muted">Topics, Projects, Resources</Text>
                        </VStack>
                    </Card.Body>
                </Card.Root>

                <Card.Root variant="outline">
                    <Card.Body>
                        <VStack align="start" gap={2}>
                            <Text fontSize="sm" color="fg.muted">Connections</Text>
                            <Heading size="2xl">{mockGraphData.edges.length}</Heading>
                            <Text fontSize="xs" color="fg.muted">Relationships mapped</Text>
                        </VStack>
                    </Card.Body>
                </Card.Root>

                <Card.Root variant="outline">
                    <Card.Body>
                        <VStack align="start" gap={2}>
                            <Text fontSize="sm" color="fg.muted">Clusters</Text>
                            <Heading size="2xl">3</Heading>
                            <Text fontSize="xs" color="fg.muted">Knowledge domains</Text>
                        </VStack>
                    </Card.Body>
                </Card.Root>
            </SimpleGrid>

            {/* Legend */}
            <Card.Root variant="outline">
                <Card.Header>
                    <Heading size="md">Legend</Heading>
                </Card.Header>
                <Card.Body>
                    <HStack gap={6} flexWrap="wrap">
                        <HStack gap={2}>
                            <Box w={4} h={4} bg="blue.500" rounded="full" />
                            <Text fontSize="sm">Topics</Text>
                        </HStack>
                        <HStack gap={2}>
                            <Box w={4} h={4} bg="purple.500" rounded="full" />
                            <Text fontSize="sm">Projects</Text>
                        </HStack>
                        <HStack gap={2}>
                            <Box w={4} h={4} bg="green.500" rounded="full" />
                            <Text fontSize="sm">Resources</Text>
                        </HStack>
                        <HStack gap={2}>
                            <Icon as={FaArrowRight} color="fg.muted" />
                            <Text fontSize="sm">Strong Connection</Text>
                        </HStack>
                    </HStack>
                </Card.Body>
            </Card.Root>

            {/* Info Box */}
            <Card.Root variant="outline" bg="blue.subtle">
                <Card.Body>
                    <VStack align="start" gap={2}>
                        <Heading size="sm">🚀 Coming Soon: Interactive Graph</Heading>
                        <Text fontSize="sm">
                            The knowledge graph will feature:
                        </Text>
                        <VStack align="start" gap={1} pl={4} fontSize="sm">
                            <Text>• Drag and drop nodes</Text>
                            <Text>• Zoom and pan controls</Text>
                            <Text>• Click nodes to see details and related resources</Text>
                            <Text>• Filter by type, project, or tags</Text>
                            <Text>• Auto-layout algorithms for optimal visualization</Text>
                        </VStack>
                    </VStack>
                </Card.Body>
            </Card.Root>
        </VStack>
    )
}
