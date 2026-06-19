export default function Research() {
  return (
    <section id="research" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Research Experience</h2>
        <div className="space-y-6">
          <div className="p-6 rounded-lg border border-border bg-card">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-xl font-semibold">Graduate Research Assistant</h3>
              <span className="text-muted-foreground text-sm">January 2024 - December 2024</span>
            </div>
            <p className="text-muted-foreground mb-4">Kennesaw State University</p>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Thesis Focus</h4>
                <p className="text-muted-foreground">
                  Alzheimer's disease detection using spontaneous speech recognition, deep learning, and natural language processing. 
                  Developed hybrid models combining data augmentation, spectrograms, and transcript-based analysis to enhance early diagnosis accuracy.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Key Techniques</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Data augmentation for speech datasets</li>
                  <li>Spectrogram-based audio analysis</li>
                  <li>Multi-level embeddings for text processing</li>
                  <li>Hybrid deep learning models</li>
                  <li>LLM-generated synthetic data for training</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Resources & Tools</h4>
                <p className="text-muted-foreground">
                  Utilized KSU's High-Performance Computing (HPC) systems to overcome hardware limitations and significantly improve research efficiency.
                  Worked with ADReSS 2020 Challenge dataset for automatic Alzheimer's detection through spontaneous speech analysis.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Faculty Mentor</h4>
                <p className="text-muted-foreground">Dr. Seyedamin Pouriyeh</p>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-lg border border-border bg-card">
            <h4 className="font-medium mb-3">Research Impact</h4>
            <p className="text-muted-foreground mb-4">
              This research offers non-invasive and cost-effective methods for early Alzheimer's diagnosis by analyzing subtle changes in language, 
              fluency, and speech patterns. It enables identification of cognitive decline at earlier stages than traditional clinical assessments, 
              potentially leading to earlier interventions and better patient outcomes.
            </p>
            <a
              href="https://campus.kennesaw.edu/colleges-departments/graduate/about/news/apr-07-2025.php"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Read KSU Feature Article →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
