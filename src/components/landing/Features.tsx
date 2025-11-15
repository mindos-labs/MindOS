import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Features() {
	const features = [
		{
			icon: "🧠",
			name: "AI Tutor Chat",
			description:
				"Explain anything. Solve doubts. Generate examples. Create notes. Fully personalized to your project.",
		},
		{
			icon: "📚",
			name: "MindSchool",
			description:
				"A library of science-backed study techniques, productivity guides, memory science, exam strategy, and curated resources.",
		},
		{
			icon: "☁️",
			name: "MindCloud — Your Second Brain",
			description:
				"Store notes, videos, links, drive files — MindOS connects everything to your learning projects.",
		},
		{
			icon: "📄",
			name: "Chat with PDFs",
			description:
				"Upload any PDF, notes, PPTs — ask questions, generate summaries, or create quizzes.",
		},
		{
			icon: "🧭",
			name: "Smart Revision System",
			description:
				"Automated spaced repetition + active recall built into daily tasks.",
		},
		{
			icon: "🧩",
			name: "MindMaps & Visual Tools",
			description:
				"Turn topics into mindmaps, diagrams, dual-coding visuals instantly.",
		},
		{
			icon: "🎮",
			name: "Gamification",
			description:
				"XP, streaks, badges, mastery score, completion percentage.",
		},
		{
			icon: "👨‍👩‍👧",
			name: "Parent / Teacher Dashboard",
			description:
				"Monitor performance, track weak areas, see progress reports.",
		},
		{
			icon: "📅",
			name: "Google Calendar Sync",
			description:
				"Smart scheduling for classes, exams, revision, and tasks.",
		},
	];

	return (
		<section id="features" className="bg-secondary/30 py-20">
			<div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="mb-12 text-center">
					<h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
						⭐ Everything You Need to Learn Faster & Smarter
					</h2>
				</div>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{features.map((feature) => (
						<Card key={feature.name}>
							<CardHeader>
								<div className="mb-2 text-3xl">{feature.icon}</div>
								<CardTitle className="text-lg">{feature.name}</CardTitle>
								<CardDescription>{feature.description}</CardDescription>
							</CardHeader>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
