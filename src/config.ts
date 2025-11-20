export const siteConfig = {
  name: "Al-Khadeem H. Abubakar",
  title: "Aspiring Data Engineer",
  description: "Portfolio website of Ryan Fitzgerald",
  accentColor: "#f26628",
  social: {
    email: "alkhadeemabubakar@gmail.com",
    linkedin: "https://linkedin.com/in/al-khadeem-abubakar",
    github: "https://github.com/khnnyy",
  },
  aboutMe:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quos asperiores nihil consequatur tempore cupiditate architecto natus commodi corrupti quas quasi facere est, dignissimos odit nam veniam sapiente ut, vitae eligendi ipsum dolor, nostrum ullam impedit! Corrupti ratione mollitia temporibus necessitatibus, consectetur reiciendis recusandae id, dolorum quaerat, vero pariatur. Ratione!",
  skills: ["Snowflake", "dbt", "SQL", "Airflow", "Python", "Java", "Docker","Arduino","Azure", "AWS", "n8n"],
  projects: [
    {
      name: "AI Dev Roundup Newsletter",
      description:
        "One concise email. Five minutes. Every Tuesday. Essential AI news & trends, production-ready libraries, powerful AI tools, and real-world code examples",
      link: "https://aidevroundup.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "Chrome Extension Mastery: Build Full-Stack Extensions with React & Node.js",
      description:
        "Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "ExtensionKit",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
  ],
  experience: [
    {
      company: "Center for Information Technology Services (CITS), Ateneo de Zamboanga University",
      title: "Computer Engineer Intern (Practicum) ",
      dateRange: "May 2024 - April 2025",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "Lenin Computer Systems, Inc.",
      title: "Computer Programmer Intern",
      dateRange: "June 2024 - August 2025",
      bullets: [
        "Developed an automated job order management system, streamlining manual creation and tracking. ",
        "Assembled, configured, and deployed 40+ personal computers for clients with operating system installation.",
        "Provided technical support to customers, facilitated sales transactions, and audited daily sales and inventory records.",
      ],
    },
  ],
  education: [
    {
      school: "Ateneo de Zamboanga University",
      degree: "Bachelor of Science in Computer Engineering",
      dateRange: "May 2025",
      achievements: [
        "Part of the Active Learners Program (ALP)",
        "Team Leader in all of the school projects",
        "P",
      ],
    }
  ],
  currentFocus: {
    inProgress: [
      {
        name: "This Portfolio Website",
        description: "Nothing in this site is final. This is a continuous work in progress."
      },
      {
        name: "IoT Home Automation System",
        description: "Developing a smart home system with Arduino and cloud integration for energy monitoring."
      }
    ],
    backlog: [
      {
        name: "Personal Finance Tracker",
        description: "A web app to track expenses and investments using React and Node.js."
      },
      {
        name: "Machine Learning Model for Predictive Maintenance",
        description: "Creating ML models to predict equipment failures in manufacturing using Python and TensorFlow."
      }
    ],
    courses: [
      {
        name: "AWS Certified Solutions Architect",
        description: "Preparing for AWS certification to deepen cloud computing skills."
      },
      {
        name: "Advanced Data Structures and Algorithms",
        description: "Online course to improve problem-solving and coding efficiency."
      }
    ]
  }
};
