
import { DiFirebase, DiReact, DiPython, DiJava, DiJavascript1, DiDatabase, DiGit, DiCode, DiZend, DiTerminal } from 'react-icons/di';
import { SiCplusplus, SiSpring, SiTensorflow, SiKeras, SiApachespark, SiTableau, SiPowerbi, SiPostman, SiAmazonaws, SiMysql, SiKaggle, SiLeetcode } from 'react-icons/si';
import { FaSnowflake } from 'react-icons/fa';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export const SocialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/meet-oza-9324041bb/',
    icon: AiFillLinkedin,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/MEETOZA123',
    icon: AiFillGithub,
  },
  {
    name: 'Kaggle',
    url: 'https://www.kaggle.com/meet25oza',
    icon: SiKaggle,
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/meet12oza/',
    icon: SiLeetcode,
  },
  {
    name: 'GeeksForGeeks',
    url: 'https://www.geeksforgeeks.org/profile/meet12oza?tab=activity',
    icon: DiTerminal,
  },
];

export const projects = [
  {
    title: 'Real-time Emotion Detection',
    description: "Designed a CNN model for emotion recognition, integrated with OpenCV for real-time detection from live camera. Achieved 68% accuracy in real-time emotion prediction, showcasing enhanced precision.",
    image: '/images/cnn.png',
    tags: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
    visit: 'https://github.com/MEETOZA123/Human-Emotion-Detection',
    id: 0,
  },
  {
    title: 'Walmart-Sales-Time-Series-Analysis-Forecasting',
    description: "Presents a comprehensive end-to-end machine learning pipeline for time series analysis and forecasting of Walmart store sales. Explored the dataset, visualize trends and seasonality, performed advanced feature engineering, and built predictive models using Facebook Prophet and XGBoost.",
    image: '/images/Gemini_Generated_Image_i6taabi6taabi6ta.png',
    tags: ['Python', 'Prophet', 'XGBoost', 'Time Series Analysis'],
    visit: 'https://github.com/MEETOZA123/Walmart-Sales-Time-Series-Analysis-Forecasting',
    id: 1,
  },
];

export const TimeLineData = [
  { year: 2020, text: 'Started Bachelor of Engineering in IT', },
  { year: 2023, text: 'Machine Learning Research Intern at IET DAVV', },
  { year: 2024, text: 'Graduated & Software Engineer Intern at Clappia', },
  { year: 2025, text: 'Software Engineer at Incedo Inc.', },
];

export const ExperienceData = [
  {
    company: 'Incedo Inc.',
    position: 'Software Engineer',
    date: 'January 2025 – Present',
    points: [
      'Architected backend for "Learning Path", cutting info-lookup time by 30%.',
      'Pioneered performance analytics dashboard, enhancing output by 15%.',
      'Engineered data migration framework (150M+ rows) using PySpark & AWS Glue.',
      'Orchestrated Lambda & Glue framework for financial logs, accelerating ML workflows.',
    ]
  },
  {
    company: 'Clappia No-Code Platform',
    position: 'Software Engineer Intern',
    date: 'October 2024 – December 2024',
    points: [
      'Integrated AI model selection logic, reducing server load by 18%.',
      'Worked with AWS, React.js, and JavaScript.',
    ]
  },
  {
    company: 'IET DAVV',
    position: 'Machine Learning Research Intern',
    date: 'September 2023 – May 2024',
    points: [
      'Pioneered advanced model optimization using Transfer Learning.',
      'Delivered 7% improvement in classification accuracy.',
      'Published research paper in Procedia Computer Science.',
    ]
  },
];

export const SkillsData = [
  {
    slug: "languages",
    Component: DiCode,
    title: "Programming Languages",
    skills: [
      { name: "C++", icon: SiCplusplus },
      { name: "Python", icon: DiPython },
      { name: "Java", icon: DiJava },
      { name: "JavaScript", icon: DiJavascript1 },
      { name: "SQL", icon: DiDatabase },
    ],
  },
  {
    slug: "frameworks",
    Component: DiReact,
    title: "Frameworks & Libraries",
    skills: [
      { name: "React.js", icon: DiReact },
      { name: "Spring Boot", icon: SiSpring }, // Replaced SiSpringboot
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Keras", icon: SiKeras },
      { name: "LangChain", icon: DiCode }, // Fallback
    ],
  },
  {
    slug: "ml",
    Component: DiZend,
    title: "Data & ML Ecosystem",
    skills: [
      { name: "Machine Learning", icon: DiCode },
      { name: "Deep Learning", icon: DiCode },
      { name: "PySpark", icon: SiApachespark },
      { name: "Snowflake", icon: FaSnowflake }, // Replaced SiSnowflake
      { name: "Embeddings", icon: DiDatabase },
      { name: "Vector Search", icon: DiDatabase },
    ],
  },
  {
    slug: "tools",
    Component: DiFirebase,
    title: "Tools & Platforms",
    skills: [
      { name: "Tableau", icon: SiTableau },
      { name: "Power BI", icon: SiPowerbi },
      { name: "Postman", icon: SiPostman },
      { name: "Git", icon: DiGit },
      { name: "AWS", icon: SiAmazonaws },
    ],
  },
  {
    slug: "core",
    Component: DiDatabase,
    title: "Core Concepts",
    skills: [
      { name: "OOP", icon: DiCode },
      { name: "DSA", icon: DiCode },
      { name: "DBMS", icon: DiDatabase },
      { name: "Networks", icon: DiCode },
      { name: "Microservices", icon: DiCode },
    ],
  },
];