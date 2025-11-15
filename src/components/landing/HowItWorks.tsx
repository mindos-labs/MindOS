import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function HowItWorks() {
	const steps = [
		{
			number: "1",
			title: "Create Your Learning Project",
			description:
				"Choose what you want to learn — 'OS Module', 'Thermodynamics', 'Guitar Basics', 'DSA', 'French'.",
		},
		{
			number: "2",
			title: "AI Onboarding",
			description:
				"MindOS learns your timeline, level, deadline, and memory duration (1 week / 1 month / forever).",
		},
		{
			number: "3",
			title: "Personalized Scientific Plan",
			description:
				"AI creates subtopics, daily tasks, revision cycles, and progress checkpoints.",
		},
		{
			number: "4",
			title: "Daily Neuroscience Tools",
			description:
				"Spaced repetition, active recall quizzes, mindmaps, notes → flashcards, interleaving practice, PDF/Q&A, summary generation, weakness-based tests.",
		},
		{
			number: "5",
			title: "Adaptive Memory Engine",
			description:
				"MindOS tracks what you forget and automatically updates your plan.",
		},
		{
			number: "6",
			title: "Mastery & Certificates",
			description:
				"Earn XP, streaks, milestones, certificates, and mastery score.",
		},
	];

	return (
		<section className="container mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
			<div className="mb-12 text-center">
				<h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
					✨ How MindOS Works
				</h2>
			</div>

			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{steps.map((step) => (
					<Card key={step.number}>
						<CardHeader>
							<Badge className="mb-2 w-fit" variant="secondary">
								Step {step.number}
							</Badge>
							<CardTitle>{step.title}</CardTitle>
							<CardDescription>{step.description}</CardDescription>
						</CardHeader>
					</Card>
				))}
			</div>
		</section>
	);
}
