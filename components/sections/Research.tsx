export default function Research() {
  return (
    <section id="research" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Research & Publications</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Academic research in AI/ML with focus on healthcare applications, published in international peer-reviewed conferences.
        </p>
        
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-4">Research Focus</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Artificial Intelligence • Natural Language Processing • Healthcare Informatics • Deep Learning • Large Language Models
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My research investigates how speech, language, and machine learning techniques can support early detection of neurodegenerative diseases. 
            By combining deep learning architectures, language embeddings, and synthetic data generation, I develop scalable approaches for cognitive impairment screening.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6">Publications</h3>
          <div className="space-y-6">
            <div className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-semibold mb-3">
                Enhancing Alzheimer's Disease Detection Using LLM-Generated Synthetic Data and Multi-Level Embeddings
              </h4>
              <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-3">
                <span className="font-medium text-accent">IJCNN 2025</span>
                <span>•</span>
                <span>Rome, Italy</span>
                <span>•</span>
                <span className="font-mono text-xs">DOI: 10.1109/IJCNN64981.2025.11229368</span>
              </div>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                Investigated GPT-generated synthetic data and multi-level language embeddings for Alzheimer's detection from spontaneous speech transcripts.
              </p>
              <a
                href="https://ieeexplore.ieee.org/document/11229368"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline font-medium text-sm"
              >
                View Publication →
              </a>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-semibold mb-3">
                Enhancing Alzheimer's Diagnosis Through Spontaneous Speech Recognition: Deep Learning Approach with Data Augmentation
              </h4>
              <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-3">
                <span className="font-medium text-accent">IEEE ISCC 2025</span>
                <span>•</span>
                <span className="font-mono text-xs">DOI: 10.1109/ISCC65549.2025.11325956</span>
              </div>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                Developed deep learning framework with spectrogram-based speech analysis and data augmentation for early Alzheimer's detection.
              </p>
              <a
                href="https://ieeexplore.ieee.org/document/11325956"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline font-medium text-sm"
              >
                View Publication →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
