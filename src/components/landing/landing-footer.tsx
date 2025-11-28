"use client"

import { Box, Container, SimpleGrid, VStack, Text, HStack, Icon, Separator } from "@chakra-ui/react"
import Link from "next/link"
import { FaGithub, FaTwitter, FaDiscord, FaHeart } from "react-icons/fa"

const footerLinks = {
    product: [
        { label: "Features", href: "#features" },
        { label: "Tools", href: "/tools" },
        { label: "Pricing", href: "#pricing" },
        { label: "Roadmap", href: "/roadmap" },
    ],
    resources: [
        { label: "Documentation", href: "/docs" },
        { label: "Blog", href: "/blog" },
        { label: "Community", href: "/community" },
        { label: "Support", href: "/support" },
    ],
    company: [
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
    ],
    legal: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
    ],
}

const socialLinks = [
    { icon: FaGithub, href: "https://github.com/mindos-labs/MindOS", label: "GitHub" },
    { icon: FaTwitter, href: "https://twitter.com/mindos_labs", label: "Twitter" },
    { icon: FaDiscord, href: "https://discord.gg/mindos", label: "Discord" },
]

export function LandingFooter() {
    return (
        <Box bg="bg.subtle" borderTopWidth="1px">
            <Container maxW="container.xl" py={16}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 5 }} gap={12}>
                    {/* Brand Section */}
                    <VStack align="start" gap={4}>
                        <Text fontSize="2xl" fontWeight="bold">
                            Mindos
                        </Text>
                        <Text fontSize="sm" color="fg.muted" maxW="xs">
                            AI-driven note taking and knowledge management for developers.
                            Learn everything, scientifically fast.
                        </Text>
                        <HStack gap={4} pt={2}>
                            {socialLinks.map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    aria-label={social.label}
                                >
                                    <Box
                                        p={2}
                                        rounded="md"
                                        transition="all 0.2s"
                                        _hover={{ bg: "bg.muted", transform: "translateY(-2px)" }}
                                    >
                                        <Icon as={social.icon} boxSize={5} color="fg.muted" />
                                    </Box>
                                </Link>
                            ))}
                        </HStack>
                    </VStack>

                    {/* Product Links */}
                    <VStack align="start" gap={3}>
                        <Text fontSize="sm" fontWeight="semibold" color="fg">
                            Product
                        </Text>
                        {footerLinks.product.map((link, index) => (
                            <Link key={index} href={link.href}>
                                <Text
                                    fontSize="sm"
                                    color="fg.muted"
                                    transition="color 0.2s"
                                    _hover={{ color: "blue.500" }}
                                >
                                    {link.label}
                                </Text>
                            </Link>
                        ))}
                    </VStack>

                    {/* Resources Links */}
                    <VStack align="start" gap={3}>
                        <Text fontSize="sm" fontWeight="semibold" color="fg">
                            Resources
                        </Text>
                        {footerLinks.resources.map((link, index) => (
                            <Link key={index} href={link.href}>
                                <Text
                                    fontSize="sm"
                                    color="fg.muted"
                                    transition="color 0.2s"
                                    _hover={{ color: "blue.500" }}
                                >
                                    {link.label}
                                </Text>
                            </Link>
                        ))}
                    </VStack>

                    {/* Company Links */}
                    <VStack align="start" gap={3}>
                        <Text fontSize="sm" fontWeight="semibold" color="fg">
                            Company
                        </Text>
                        {footerLinks.company.map((link, index) => (
                            <Link key={index} href={link.href}>
                                <Text
                                    fontSize="sm"
                                    color="fg.muted"
                                    transition="color 0.2s"
                                    _hover={{ color: "blue.500" }}
                                >
                                    {link.label}
                                </Text>
                            </Link>
                        ))}
                    </VStack>

                    {/* Legal Links */}
                    <VStack align="start" gap={3}>
                        <Text fontSize="sm" fontWeight="semibold" color="fg">
                            Legal
                        </Text>
                        {footerLinks.legal.map((link, index) => (
                            <Link key={index} href={link.href}>
                                <Text
                                    fontSize="sm"
                                    color="fg.muted"
                                    transition="color 0.2s"
                                    _hover={{ color: "blue.500" }}
                                >
                                    {link.label}
                                </Text>
                            </Link>
                        ))}
                    </VStack>
                </SimpleGrid>

                <Separator my={8} />

                {/* Bottom Bar */}
                <HStack
                    justify="space-between"
                    flexDirection={{ base: "column", md: "row" }}
                    gap={4}
                    pt={4}
                >
                    <Text fontSize="sm" color="fg.muted">
                        &copy; {new Date().getFullYear()} Mindos. All rights reserved.
                    </Text>
                    <HStack gap={2} fontSize="sm" color="fg.muted">
                        <Text>Made with</Text>
                        <Icon as={FaHeart} color="red.500" boxSize={4} />
                        <Text>by developers, for developers</Text>
                    </HStack>
                </HStack>
            </Container>
        </Box>
    )
}
