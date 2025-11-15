import { Card, CardContent } from "@/components/ui/card";

export function Problem() {
	const problems = [
		"We forget 70–80% of what we learn.",
		"Notes, PDFs, YouTube videos = overwhelming.",
		"No personalization.",
		"No structured revision.",
		"No system that guarantees mastery.",
		"No place where everything—notes, PDFs, tasks, memory tools—lives together.",
	];

	return (
		<section className="container mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
			<div className="text-center">
				<h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">The Problem:</h2>
				<p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground">
					Today, students are drowning in content — but starving for retention.
				</p>
			</div>

			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{problems.map((problem, index) => (
					<Card key={index} className="border-destructive/20">
						<CardContent className="pt-6">
							<p className="text-sm">{problem}</p>
						</CardContent>
					</Card>
				))}
			</div>

			<div className="mt-12 text-center">
				<p className="text-xl font-semibold text-muted-foreground">Learning is broken.</p>
				<p className="mt-2 text-2xl font-bold">MindOS fixes it.</p>
			</div>
		</section>
	);
}
