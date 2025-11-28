import { Metadata } from "next"
import ToolsClient from "./ToolsClient"

export const metadata: Metadata = {
    title: "Learning Tools",
    description: "Discover 15 science-backed learning tools powered by neuroscience and AI to help you learn faster, remember longer, and master anything.",
}

export default function ToolsPage() {
    return <ToolsClient />
}
