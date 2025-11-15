export function Solution() {
	const goals = [
		"Semester syllabus",
		"JEE/NEET prep",
		"DSA & programming",
		"Music Theory",
		"Soft skills",
		"Philosophy, Neuroscience — anything",
	];

	return (
		<section className="bg-secondary/30 py-20">
			<div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					<h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
						MindOS — Your Scientific Learning OS
					</h2>
					<p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
						A smart, structured, personalized system that helps you learn anything and{" "}
						<strong>remember it forever</strong>.
					</p>
				</div>

				<div className="mx-auto max-w-3xl">
					<p className="mb-6 text-center text-base">
						MindOS turns any goal into an <strong>AI-powered project</strong>:
					</p>

					<div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
						{goals.map((goal, index) => (
							<div
								key={index}
								className="rounded-lg border bg-card p-3 text-center text-sm font-medium shadow-sm"
							>
								{goal}
							</div>
						))}
					</div>

					<div className="space-y-3 text-center text-base text-muted-foreground">
						<p>✓ It builds your plan.</p>
						<p>✓ Manages your resources.</p>
						<p>✓ Teaches you.</p>
						<p>✓ Tests you.</p>
						<p>✓ And ensures you never forget.</p>
					</div>
				</div>
			</div>
		</section>
	);
}
