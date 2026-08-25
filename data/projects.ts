export type Project = {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    title: "linux-system-monitor",
    description:
      "A practical system monitoring project for observing Linux system resources and understanding system performance.",
    category: "Cloud / DevOps",
    technologies: ["Python"],
    github: "https://github.com/Prince8879/linux-system-monitor",
  },

  {
    title: "RAG-System",
    description:
      "A Retrieval-Augmented Generation system that combines document retrieval with Large Language Models to provide context-aware responses.",
    category: "Generative AI",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/Prince8879/RAG-System",
  },

  {
    title: "Fake-News-Detection",
    description:
      "A machine learning project focused on detecting potentially fake or misleading news using data-driven techniques.",
    category: "Machine Learning",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/Prince8879/Fake-News-Detection",
  },

  {
    title: "Fine-Tuning-Transformer-Model",
    description:
      "Fine-tuning DistilBERT on a custom sentiment dataset using Hugging Face Transformers.",
    category: "NLP / GenAI",
    technologies: ["Jupyter Notebook"],
    github:
      "https://github.com/Prince8879/Fine-Tuning-Transformer-Model",
  },
];