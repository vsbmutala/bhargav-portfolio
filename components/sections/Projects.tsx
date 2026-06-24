import { projects } from "@/constants/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Selected projects demonstrating technical depth, system design, and measurable impact.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
            >
              <h3 className="font-semibold text-xl mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
              {project.impact && (
                <div className="mb-4 p-3 bg-accent/5 rounded-md">
                  <p className="text-sm font-medium text-accent">{project.impact}</p>
                </div>
              )}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs border border-border rounded-md text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-accent hover:underline font-medium text-sm"
              >
                View Details →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
