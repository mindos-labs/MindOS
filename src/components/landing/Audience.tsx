import { Card, CardContent } from "@/components/ui/card";

export function Audience() {
	const audiences = [
		"School students",
		"Board exam students",
		"JEE/NEET aspirants",
		"College students",
		"Programmers & tech learners",
		"Creatives (music, writing, design)",
		"Working professionals",
		"Lifelong learners",
	];

	return (
		<section className="container mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
			<div className="mb-12 text-center">
				<h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
					Perfect for Everyone
				</h2>
			</div>

			<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
				{audiences.map((audience, index) => (
					<Card key={index}>
						<CardContent className="pt-6 text-center">
							<p className="font-medium">{audience}</p>
						</CardContent>
					</Card>
				))}
			</div>

			<div className="mt-12 text-center">
				<p className="text-lg font-semibold text-muted-foreground">
					If it can be learned,
				</p>
				<p className="mt-2 text-xl font-bold">MindOS can help you master it.</p>
			</div>
		</section>
	);
}
