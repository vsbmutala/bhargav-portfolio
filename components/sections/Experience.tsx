const experiences = [
  {
    title: "Software Engineer (Founding Engineer, Assistly)",
    company: "Charter Global",
    location: "Atlanta, GA",
    period: "March 2025 - Present",
    description: "Founding engineer of Assistly.care, responsible for architecting and developing scalable full-stack solutions that support senior living operations, resident management, compliance workflows, and document management.",
    achievements: [
      "Built 25+ reusable UI components reducing development effort across modules",
      "Developed 15+ serverless APIs using AWS Lambda and API Gateway",
      "Implemented Redux Toolkit and React Hook Form for complex workflow management",
      "Integrated AWS S3 for secure document management and storage",
      "Led full-stack development of Assistly.care as founding engineer",
      "Architected scalable system design supporting rapid product growth"
    ],
    technologies: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      backend: ["AWS Lambda", "API Gateway", "DynamoDB", "S3"],
      tools: ["Redux Toolkit", "React Hook Form"]
    }
  },
  {
    title: "Full Stack Developer",
    company: "Saptarishi Solutions Pvt Ltd",
    location: "Hyderabad, India",
    period: "January 2023 - August 2023",
    description: "Worked on Class-One Web Application platform, delivering scalable frontend and backend solutions.",
    achievements: [
      "Designed back-office system with React and TypeScript, reducing manual workloads by 95%",
      "Delivered high-quality results on administrative projects with 700+ Figma screens",
      "Created 20+ reusable components using Scaled Agile methodology",
      "Optimized SQL queries and database performance",
      "Participated in code reviews and technical documentation"
    ],
    technologies: {
      frontend: ["React.js", "Next.js", "Tailwind CSS"],
      backend: ["Node.js", "TRPC", "PostgreSQL", "MySQL"],
      tools: ["Redux"]
    }
  },
  {
    title: "Graduate Research Assistant",
    company: "Kennesaw State University",
    location: "Kennesaw, GA",
    period: "January 2024 - December 2024",
    description: "Conducted research in AI/ML focusing on healthcare applications and Alzheimer's disease detection using deep learning and NLP techniques.",
    achievements: [
      "Developed deep learning models for Alzheimer's detection using speech analysis, achieving improved accuracy over baseline methods",
      "Published research papers in IEEE ISCC 2025 and IJCNN 2025 conferences",
      "Implemented data augmentation techniques and multi-level embeddings for enhanced model performance",
      "Utilized high-performance computing systems for training large-scale models",
      "Presented research at KSU C-Day, securing 3rd place recognition"
    ],
    technologies: {
      frontend: [],
      backend: ["Python"],
      tools: ["TensorFlow", "PyTorch", "NLP", "Deep Learning", "HPC Systems"]
    }
  },
  {
    title: "Master of Science in Information Technology",
    company: "Kennesaw State University",
    location: "Kennesaw, GA",
    period: "2023 - 2025",
    description: "Specialized in software engineering, artificial intelligence, and machine learning with focus on practical applications.",
    achievements: [
      "GPA: 4.0/4.0",
      "Outstanding Student Award recipient (Fall 2024)",
      "Thesis: Alzheimer's Disease Detection Using Deep Learning and NLP",
      "Coursework: Advanced Algorithms, Machine Learning, Distributed Systems, Software Architecture"
    ],
    technologies: {
      frontend: [],
      backend: [],
      tools: ["Software Engineering", "AI/ML", "Distributed Systems", "Cloud Computing"]
    }
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Professional Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-border pl-8 relative">
              <div className="absolute left-0 top-0 w-4 h-4 bg-accent rounded-full -translate-x-1/2"></div>
              <div className="mb-4">
                <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                <div className="flex flex-wrap items-center gap-2 text-muted-foreground mb-2">
                  <span className="font-medium">{exp.company}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                  <span>•</span>
                  <span>{exp.period}</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-muted-foreground flex items-start gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                {Array.isArray(exp.technologies) ? (
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm border border-border rounded-md text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                ) : (
                  <>
                    {exp.technologies.frontend && exp.technologies.frontend.length > 0 && (
                      <div>
                        <span className="text-xs font-medium text-muted-foreground mb-2 block">Frontend</span>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.frontend.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-sm border border-border rounded-md text-muted-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {exp.technologies.backend && exp.technologies.backend.length > 0 && (
                      <div>
                        <span className="text-xs font-medium text-muted-foreground mb-2 block">Backend</span>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.backend.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-sm border border-border rounded-md text-muted-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {exp.technologies.tools && exp.technologies.tools.length > 0 && (
                      <div>
                        <span className="text-xs font-medium text-muted-foreground mb-2 block">Tools</span>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.tools.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-sm border border-border rounded-md text-muted-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
