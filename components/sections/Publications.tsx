const publications = [
  {
    title: "Enhancing Alzheimer's Diagnosis Through Spontaneous Speech Recognition: Deep Learning Approach with Data Augmentation",
    conference: "IEEE AI4eHealth 2025",
    location: "Abu Dhabi",
    year: "2025",
    description: "Presented a deep learning approach for Alzheimer's detection using spontaneous speech recognition with data augmentation techniques.",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=7f6rB7QAAAAJ&citation_for_view=7f6rB7QAAAAJ:9yKSN-GCB0IC",
  },
  {
    title: "Enhancing Alzheimer's Disease Detection Using LLM-Generated Synthetic Data and Multi-Level Embeddings",
    conference: "International Joint Conference on Neural Networks (IJCNN) 2025",
    location: "Rome",
    year: "2025",
    description: "Explored the use of LLM-generated synthetic data and multi-level embeddings to improve Alzheimer's disease detection accuracy.",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=7f6rB7QAAAAJ&citation_for_view=7f6rB7QAAAAJ:d1gkVwhDpl0C",
  },
];

export default function Publications() {
  return (
    <section id="publications" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Publications</h2>
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
              <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-3">
                <span className="font-medium text-primary">{pub.conference}</span>
                <span>•</span>
                <span>{pub.location}</span>
                <span>•</span>
                <span>{pub.year}</span>
              </div>
              <p className="text-muted-foreground mb-4">{pub.description}</p>
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                View on Google Scholar →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
