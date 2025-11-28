"use client"

import * as React from "react"
import { Box, Heading, Text } from "@chakra-ui/react"
import { AnimateIcon } from "@/components/animate-ui/icons/icon"
import { useIsInView } from "@/hooks/use-is-in-view"

interface FeatureCardProps {
    icon: React.ComponentType<{ size?: number; color?: string; style?: React.CSSProperties }>
    title: string
    description: string
    delay?: number
}

export function FeatureCard({ icon: IconComponent, title, description, delay = 0 }: FeatureCardProps) {
    const ref = React.useRef<HTMLDivElement>(null);
    const { isInView } = useIsInView(ref, {
        inView: true,
        inViewOnce: true,
        inViewMargin: '0px',
    });

    return (
        <Box
            ref={ref}
            p={8}
            bg="bg.panel"
            rounded="2xl"
            shadow="sm"
            borderWidth="1px"
            opacity={isInView ? 1 : 0}
            transform={isInView ? 'translateY(0)' : 'translateY(20px)'}
            transition={`all 0.6s ease-out ${delay}ms`}
        >
            <AnimateIcon animateOnView animateOnViewOnce>
                <IconComponent size={32} color="#3b82f6" style={{ marginBottom: '1rem' }} />
            </AnimateIcon>
            <Heading size="lg" mb={2}>{title}</Heading>
            <Text color="fg.muted">{description}</Text>
        </Box>
    )
}
