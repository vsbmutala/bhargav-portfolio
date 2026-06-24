export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            I'm a Full-Stack Software Engineer and Graduate Researcher currently pursuing a Master of Science in Information Technology at Kennesaw State University.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Over the years, I have worked extensively across the JavaScript ecosystem, building responsive, scalable, and high-performance web applications using React, Next.js, Angular, TypeScript, Node.js, Express.js, PostgreSQL, MongoDB, and modern cloud technologies.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            My passion lies in transforming ideas into products that create meaningful impact. From developing enterprise-grade applications to experimenting with cutting-edge AI technologies, I enjoy solving complex technical challenges and delivering solutions that provide real value to users.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Beyond software engineering, I conduct research in Artificial Intelligence, Natural Language Processing, and Deep Learning, with a particular focus on healthcare applications and Alzheimer's disease detection through speech and language analysis.
          </p>
        </div>
      </div>
    </section>
  );
}
