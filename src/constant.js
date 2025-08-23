// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Soft Skills
import communicationLogo from './assets/communicationLogo.webp';
import teamworkLogo from './assets/teamworkLogo.jpg';
import leadershipLogo from './assets/leadershipLogo.webp';
import adaptabilityLogo from './assets/adaptabilityLogo.webp';
import problemSolvingLogo from './assets/problemSolvingLogo.webp';

// Fundamentals
import oopLogo from './assets/oopLogo.png';
import dbmsLogo from './assets/dbmsLogo.png';
import osLogo from './assets/osLogo.jpeg';
import cnLogo from './assets/cnLogo.jpeg';
import aimlLogo from './assets/aimlLogo.png';

// Work / Projects
import airbnbLogo from './assets/airbnbLogo.webp';
import pongLogo from './assets/pongLogo.jpeg';

// Education
import nitkkrLogo from './assets/nitkkrLogo.png';
import gsssLogo from './assets/gsssLogo.webp';
import swamiLogo from './assets/swamiLogo.webp';
import sleepmonitorLogo from './assets/sleepmonitorLogo.webp';
import rewearLogo from './assets/rewearLogo.webp';
import summarizeLogo from './assets/summarizeLogo.jpg';
import glareLogo from './assets/glareLogo.webp';
import financeLogo from './assets/financeLogo.jpg';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
  {
  title: 'Fundamentals',
  skills: [
    { name: 'OOP', logo: oopLogo },
    { name: 'DBMS', logo: dbmsLogo },
    { name: 'Operating Systems', logo: osLogo },
    { name: 'Computer Networks', logo: cnLogo },
    { name: 'AI & ML', logo: aimlLogo },
  ],
},
{
  title: 'Soft Skills',
  skills: [
    { name: 'Communication', logo: communicationLogo },
    { name: 'Teamwork', logo: teamworkLogo },
    { name: 'Leadership', logo: leadershipLogo },
    { name: 'Adaptability', logo: adaptabilityLogo },
    { name: 'Problem Solving', logo: problemSolvingLogo },
  ],
},

];

export const experiences = [
  {
    id: 0,
    img: nitkkrLogo,
    role: "IoT Developer",
    company: "NIT Kurukshetra",
    date: "August 2024 - October 2024",
    desc: "I developed an IoT-based Smart Sleep Monitoring System using ESP8266 microcontroller and multiple sensors, integrated via the Wokwi Simulator. The system captures real-time environmental and physiological data to monitor and enhance sleep quality. I engineered a data pipeline that processed over 10,000 data points, enabling predictive analytics using AI/ML techniques to detect trends and anomalies. The project also featured adaptive automation to control room lighting and humidity, boosting sleep efficiency by 30%. Data visualization and processing were implemented using Pandas and NumPy, demonstrating the project's scalability and analytical depth.",
    skills: [
      "C",
      "IOT",
      "ThingSpeak",
      "Wokwi",
      "AI",
      "Data Analytics",
    ],
  },
  {
    id: 2,
    img: problemSolvingLogo, 
    role: "Competitive Programmer",
    company: "Self-Learning",
    date: "2023 - Present",
    desc: "Sharpened problem-solving skills by solving 250+ problems across platforms like LeetCode and GeeksforGeeks. Focused on mastering core topics such as trees, graphs, dynamic programming, and object-oriented principles. Actively participated in contests to improve speed, logic building, and coding efficiency.",
    skills: [
      "C++",
      "Data Structures",
      "Algorithms",
      "Dynamic Programming",
      "Graph Theory",
      "OOP",
    ],
  }
  ,
];

export const education = [
  {
    id: 0,
    img: nitkkrLogo,
    school: "National Institute of Technology, Kurukshetra",
    date: "2023 – 2027",
    grade: "8.78 CGPA (Till Now)",
    desc: "Currently pursuing a Bachelor of Technology (B.Tech) in Information Technology at NIT Kurukshetra. My curriculum covers core subjects including Data Structures, Algorithms, Operating Systems, DBMS, Computer Networks, and Artificial Intelligence. I’ve actively engaged in development projects and hackathons, enhancing both technical and team collaboration skills.",
    degree: "Bachelor of Technology - B.Tech in Information Technology",
  },
  {
    id: 1,
    img: gsssLogo, 
    school: "Government Senior Secondary School, Bijjuwali",
    date: "2022 – 2023",
    grade: "96.6%",
    desc: "Completed my Class XII under the HBSE board with a focus on science subjects. Demonstrated academic excellence by securing 96.6% and building a strong foundation in analytical thinking and discipline.",
    degree: "HBSE (Class XII)",
  },
  {
    id: 2,
    img: swamiLogo, 
    school: "Swami Dayanand Senior Secondary School",
    date: "2020 – 2021",
    grade: "100%",
    desc: "Achieved 100% in Class X under the HBSE board. Gained fundamental exposure to science and computer education, building the groundwork for future academic pursuits in the tech domain.",
    degree: "HBSE (Class X)",
  },
];


export const projects = [
  {
    id: 1,
    title: "AI-Powered Finance Platform",
    description:
      "An AI-driven financial intelligence platform leveraging Google Gemini API for real-time insights. Features include automated financial pattern recognition, anomaly detection, and personalized recommendations. Designed scalable workflows using serverless jobs and integrated monitoring with ArcJet for reliability.",
    image: financeLogo,
    tags: ["Next.js", "Supabase", "Prisma", "AI/ML", "Google Gemini API", "Serverless", "ArcJet"],
    github: "https://github.com/gagan-1307/ai-powered-finance-platform.git",
    webapp: "",
  },
  {
    id: 2,
    title: "Glare - Interview Preparation",
    description:
      "A smart interview preparation tool offering curated questions, AI-powered insights, and personalized practice sessions. Integrated authentication with Clerk and Supabase, real-time progress tracking, and a clean UI built with Tailwind & Shadcn components.",
    image: glareLogo,
    tags: ["Next.js", "Clerk", "Supabase", "Tailwind", "Shadcn", "AI"],
    github: "https://github.com/gagan-1307/Glare-Interview-Prep.git",
    webapp: "",
  },
  {
    id: 3,
    title: "Summarize.ai - AI Transcript Summarizer",
    description:
      "A transcript summarization platform that uses advanced NLP models to generate concise and structured summaries of long recordings. Built with Next.js and deployed on serverless infrastructure for fast, scalable processing.",
    image: summarizeLogo,
    tags: ["Next.js", "AI/ML", "NLP", "Serverless", "React"],
    github: "https://github.com/gagan-1307/Summarize.ai",
    webapp: "",
  },
  {
    id: 4,
    title: "Rewear - Sustainable Exchange of Clothes",
    description:
      "A sustainability-focused platform enabling users to exchange, donate, and repurpose clothes. Integrated with Supabase backend, JWT authentication, and a React-based UI for a smooth user experience. Encourages eco-friendly fashion choices.",
    image: rewearLogo,
    tags: ["React", "Supabase", "JWT", "Node.js", "Sustainability"],
    github: "https://github.com/gagan-1307/rewear.git",
    webapp: "",
  },
  {
    id: 5,
    title: "Smart Sleep Monitoring System",
    description:
      "An IoT-based system using ESP8266 and sensors to monitor sleep patterns. Processed 10,000+ real-time data points with Pandas/NumPy and applied AI-driven predictive analytics for anomaly detection. Improved sleep quality by 30% through automated room adjustments.",
    image: sleepmonitorLogo,
    tags: ["IoT", "ESP8266", "C", "AI/ML", "Pandas", "NumPy", "Wokwi", "Data Analytics"],
    github: "https://wokwi.com/projects/410982773289702401",
    webapp: "https://thingspeak.mathworks.com/channels/2684116",
  },
  {
    id: 6,
    title: "Airbnb Extended",
    description:
      "A full-stack rental platform with 100+ property listings. Built on MERN stack with JWT authentication, Google Maps API, and MongoDB Atlas. Migrated frontend from EJS to React for 40% faster load times and ensured 99.9% uptime with secure RESTful APIs.",
    image: airbnbLogo, 
    tags: ["MongoDB", "Express", "React JS", "Node.js", "JWT", "Google Maps API"],
    github: "https://github.com/gagan-1307/Airbnb-org.git",
    webapp: "", 
  },
  {
    id: 7,
    title: "Pong Game",
    description:
      "A high-performance Pong game built with Python's Turtle library. Features smooth 60 FPS gameplay, real-time collision detection, adaptive difficulty levels, and a polished GUI with live score tracking.",
    image: pongLogo,
    tags: ["Python", "Turtle", "Game Development", "GUI"],
    github: "https://github.com/gagan-1307/Pong-Game.git",
    webapp: "", 
  },
];
