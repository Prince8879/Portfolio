export type SkillCategory = {
  title: string;
  description: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    description:
      "Programming languages I use for problem solving, scripting, and application development.",
    skills: [
      "Python",
      "JavaScript",
      "C",
    ],
  },

  {
    title: "Data Analytics",
    description:
      "Tools and technologies I use to work with data, analysis, visualization, and reporting.",
    skills: [
      "SQL",
      "Power BI",
      "Pandas",
      "NumPy",
      "Data Analysis",
    ],
  },

  {
    title: "Data Science & Machine Learning",
    description:
      "Concepts and tools I use while working with data science and machine learning.",
    skills: [
      "Data Science",
      "Machine Learning",
      "Scikit-learn",
      "Generative AI",
    ],
  },

  {
    title: "Cloud & DevOps",
    description:
      "Technologies and practices I am learning and applying in cloud and DevOps workflows.",
    skills: [
      "AWS",
      "Linux",
      "Git",
      "GitHub",
      "Docker",
      "CI/CD",
    ],
  },

  {
    title: "Web Technologies",
    description:
      "Technologies I use for building modern web interfaces and applications.",
    skills: [
      "HTML",
      "CSS",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
];