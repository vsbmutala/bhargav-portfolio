export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            I'm a Graduate Research Assistant and full-stack developer specializing in artificial intelligence, 
            machine learning, and modern web technologies. Currently pursuing my Master's in Information Technology 
            at Kennesaw State University, where I focus on cutting-edge research in healthcare AI.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            My research work centers on Alzheimer's disease detection using deep learning and natural language processing. 
            I've developed hybrid models combining data augmentation, spectrograms, and transcript-based analysis to enhance 
            early diagnosis accuracy. This work has been recognized at KSU's C-Day and published in IEEE conferences.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-lg border border-border bg-card">
              <h3 className="font-semibold text-lg mb-3">AI & Machine Learning</h3>
              <p className="text-muted-foreground">Deep Learning, NLP, Federated Learning, LLMs, Data Augmentation</p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-card">
              <h3 className="font-semibold text-lg mb-3">Web Development</h3>
              <p className="text-muted-foreground">React, Next.js, TypeScript, Node.js, Tailwind CSS</p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-card">
              <h3 className="font-semibold text-lg mb-3">Research Tools</h3>
              <p className="text-muted-foreground">Python, TensorFlow, PyTorch, HPC Systems, ADReSS Dataset</p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-card">
              <h3 className="font-semibold text-lg mb-3">Backend & Databases</h3>
              <p className="text-muted-foreground">Node.js, Express, PostgreSQL, MongoDB, GraphQL</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
