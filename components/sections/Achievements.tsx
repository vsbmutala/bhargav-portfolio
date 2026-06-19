const achievements = [
  {
    title: "2024 Outstanding Student Award",
    organization: "Kennesaw State University",
    college: "College of Computing and Software Engineering",
    program: "Master of Science in Information Technology",
    date: "November 19, 2024",
    description: "Recognized as an outstanding student in the MS in Information Technology program for academic excellence and research contributions.",
    icon: "🏆",
  },
  {
    title: "3rd Place at KSU C-Day",
    organization: "Kennesaw State University",
    date: "2024",
    description: "Awarded 3rd place for research presentation on Alzheimer's disease detection using speech and deep learning techniques at KSU's C-Day event.",
    icon: "🎯",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Achievements</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
              <div className="space-y-1 text-sm text-muted-foreground mb-3">
                <p>{achievement.organization}</p>
                {achievement.college && <p>{achievement.college}</p>}
                {achievement.program && <p>{achievement.program}</p>}
                <p>{achievement.date}</p>
              </div>
              <p className="text-muted-foreground">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
