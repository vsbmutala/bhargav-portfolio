import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center px-6 py-24">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-3/5">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 text-sm font-medium bg-accent/10 text-accent rounded-full">
                Available for opportunities
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Bhargav Mutala
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Full-Stack Software Engineer building scalable systems with modern web technologies and AI research expertise
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl leading-relaxed">
              I specialize in developing high-performance applications using React, Next.js, TypeScript, and Node.js. 
              My research in AI/ML, published in international conferences, brings data-driven approaches to engineering challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-hover transition-colors"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-border rounded-lg font-semibold hover:bg-muted transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="lg:w-2/5 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border border-border shadow-xl">
              <Image
                src="/images/profile.jpg"
                alt="Bhargav Mutala"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
