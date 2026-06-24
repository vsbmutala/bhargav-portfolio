const skillCategories = [
  {
    title: "Frontend Engineering",
    skills: [
      { name: "React.js", level: "Expert" },
      { name: "Next.js", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "JavaScript (ES6+)", level: "Expert" },
      { name: "Angular", level: "Advanced" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Redux/RTK", level: "Advanced" },
    ],
  },
  {
    title: "Backend & Infrastructure",
    skills: [
      { name: "Node.js", level: "Expert" },
      { name: "Express.js", level: "Expert" },
      { name: "REST APIs", level: "Expert" },
      { name: "GraphQL", level: "Intermediate" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" },
      { name: "AWS", level: "Intermediate" },
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "TensorFlow", level: "Advanced" },
      { name: "PyTorch", level: "Intermediate" },
      { name: "NLP", level: "Advanced" },
      { name: "Deep Learning", level: "Advanced" },
      { name: "LLMs", level: "Intermediate" },
    ],
  },
  {
    title: "Development Practices",
    skills: [
      { name: "Git/GitHub", level: "Expert" },
      { name: "CI/CD", level: "Advanced" },
      { name: "Docker", level: "Intermediate" },
      { name: "Testing", level: "Advanced" },
      { name: "Agile/Scrum", level: "Advanced" },
      { name: "System Design", level: "Intermediate" },
    ],
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-accent text-white";
    case "Advanced":
      return "bg-accent/20 text-accent";
    case "Intermediate":
      return "bg-muted text-muted-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Proficient across the full stack with specialized expertise in modern JavaScript ecosystems and AI/ML applications.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-muted-foreground">{skill.name}</span>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${getLevelColor(skill.level)}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
