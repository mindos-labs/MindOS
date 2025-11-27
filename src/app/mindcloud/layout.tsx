"use client"

import {
    Box,
    Container,
    Flex,
    Heading,
    Icon,
    VStack,
    HStack,
    Button,
    Input,
    InputGroup,
} from "@chakra-ui/react"
import {
    FaSearch,
    FaHome,
    FaFolder,
    FaStickyNote,
    FaProjectDiagram,
    FaUpload,
    FaBrain
} from "react-icons/fa"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useUser, UserButton } from "@stackframe/stack"

const navItems = [
    { href: "/mindcloud", icon: FaHome, label: "Dashboard" },
    { href: "/mindcloud/search", icon: FaSearch, label: "Search" },
    { href: "/mindcloud/resources", icon: FaFolder, label: "Resources" },
    { href: "/mindcloud/notes", icon: FaStickyNote, label: "Notes" },
    { href: "/mindcloud/graph", icon: FaProjectDiagram, label: "Knowledge Graph" },
    { href: "/mindcloud/upload", icon: FaUpload, label: "Add Resource" },
]

export default function MindCloudLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    const user = useUser()

    return (
        <Flex minH="100vh" bg="bg.canvas">
            {/* Sidebar */}
            <Box
                w="250px"
                bg="bg.panel"
                borderRightWidth="1px"
                position="fixed"
                h="100vh"
                overflowY="auto"
            >
                <VStack align="stretch" gap={0} h="full">
                    {/* Logo */}
                    <Box p={6} borderBottomWidth="1px">
                        <Link href="/mindcloud">
                            <HStack gap={2}>
                                <Icon as={FaBrain} boxSize={6} color="blue.500" />
                                <Heading size="md" fontWeight="bold">
                                    MindCloud
                                </Heading>
                            </HStack>
                        </Link>
                    </Box>

                    {/* Navigation */}
                    <VStack align="stretch" gap={1} p={4} flex={1}>
                        {navItems.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Button
                                    key={item.href}
                                    asChild
                                    variant={isActive ? "solid" : "ghost"}
                                    colorPalette={isActive ? "blue" : undefined}
                                    justifyContent="flex-start"
                                    size="md"
                                >
                                    <Link href={item.href}>
                                        <Icon as={item.icon} />
                                        {item.label}
                                    </Link>
                                </Button>
                            )
                        })}
                    </VStack>

                    {/* User Profile */}
                    <Box p={4} borderTopWidth="1px">
                        {user ? (
                            <UserButton />
                        ) : (
                            <Button size="sm" colorPalette="blue" asChild w="full">
                                <Link href="/handler/sign-in">Sign In</Link>
                            </Button>
                        )}
                    </Box>
                </VStack>
            </Box>

            {/* Main Content */}
            <Box ml="250px" flex={1}>
                {/* Header */}
                <Box
                    bg="bg.panel/80"
                    backdropFilter="blur(10px)"
                    borderBottomWidth="1px"
                    position="sticky"
                    top={0}
                    zIndex={10}
                    px={8}
                    py={4}
                >
                    <Flex justify="space-between" align="center">
                        <Heading size="lg">
                            {navItems.find(item => item.href === pathname)?.label || "MindCloud"}
                        </Heading>
                        <HStack gap={4}>
                            <Button variant="outline" size="sm" asChild>
                                <Link href="/">Back to Home</Link>
                            </Button>
                        </HStack>
                    </Flex>
                </Box>

                {/* Page Content */}
                <Box p={8}>
                    {children}
                </Box>
            </Box>
        </Flex>
    )
}
