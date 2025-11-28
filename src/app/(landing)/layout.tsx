import { ReactNode } from "react"
import { LandingNavbar } from "@/components/landing/landing-navbar"
import { LandingFooter } from "@/components/landing/landing-footer"
import { Box } from "@chakra-ui/react"

export default function LandingLayout({
    children,
}: {
    children: ReactNode
}) {
    return <>
        <Box minH="100vh" bg="bg.canvas">
            <LandingNavbar />
            {children}
            <LandingFooter />
        </Box>
    </>
}
