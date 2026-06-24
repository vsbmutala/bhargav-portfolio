const achievements = [
  {
    title: "Outstanding Student Award",
    organization: "Kennesaw State University",
    date: "Fall 2024",
    description: "Recognized for academic excellence and research contributions in the Master of Science in Information Technology program.",
  },
  {
    title: "3rd Place Research Presentation",
    organization: "KSU C-Day",
    date: "2024",
    description: "Awarded for research presentation on Alzheimer's disease detection using speech and deep learning techniques.",
  },
  {
    title: "International Research Publications",
    organization: "IJCNN & IEEE ISCC",
    date: "2025",
    description: "Published peer-reviewed research papers in international conferences focusing on AI and healthcare applications.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Recognition</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Academic and professional achievements highlighting excellence in research and software engineering.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
              <div className="space-y-1 text-sm text-muted-foreground mb-3">
                <p>{achievement.organization}</p>
                <p>{achievement.date}</p>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
