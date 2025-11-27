"use client"

import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { ThemeProvider } from "next-themes"

import { StackProvider, StackTheme } from "@stackframe/stack"
import { stackClientApp } from "../../stack/client"

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <StackProvider app={stackClientApp}>
            <StackTheme>
                <ChakraProvider value={defaultSystem}>
                    <ThemeProvider attribute="class" disableTransitionOnChange>
                        {children}
                    </ThemeProvider>
                </ChakraProvider>
            </StackTheme>
        </StackProvider>
    )
}
