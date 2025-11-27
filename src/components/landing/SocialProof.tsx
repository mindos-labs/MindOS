export function SocialProof() {
	const testimonials = [
		"The only app that actually helps me REMEMBER.",
		"Better than coaching notes + YouTube combined.",
		"Feels like a personal tutor + neuroscience coach.",
	];

	return (
	<section className="border-y bg-secondary/30 py-12">
			<div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<p className="mb-6 text-center text-sm font-medium text-muted-foreground">
					Trusted by learners from
				</p>
				<p className="mb-8 text-center text-sm font-semibold">
					Schools • Colleges • Coaching Students • Professionals • Lifelong Learners
				</p>

				<div className="grid gap-4 md:grid-cols-3">
					{testimonials.map((testimonial, index) => (
						<div key={index} className="rounded-lg bg-card p-4 text-center shadow-sm">
							<p className="text-sm">⭐ "{testimonial}"</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
