import { useMemo } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaLocationArrow, FaDownload, FaLink } from "react-icons/fa";
import ProfileImg from "./images/myphoto.jpg";

const NAME = "Jatin Hans";
const ROLE = "Software Developer & IT Support Specialist";
const TAGLINE = "JavaScript | C/C++ | Python | Cloud (AWS, Azure, Oracle) | React | SQL";
const EMAIL = "Jatinhans2002@gmail.com";
const LOCATION = "Canada";
const GITHUB = "https://github.com/jhans2";
const LINKEDIN = "https://www.linkedin.com/in/jatin-hans-97229023b/";
const RESUME_URL = "./resume.pdf";

const skills = [
  { group: "Programming & Scripting", items: ["JavaScript (React, Node.js)", "Python", "Java", "C/C++", "PowerShell", "SQL", "PL/SQL", "Groovy"] },
  { group: "Web & Software Development", items: ["HTML", "CSS", "REST APIs", "API Development", ".NET", "SAP Cloud Platform"] },
  { group: "Databases", items: ["Oracle HCM", "MySQL", "SQLite", "MongoDB", "Talend", "RDBMS"] },
  { group: "Cloud & OS", items: ["AWS", "Azure", "Oracle Cloud", "Linux", "Windows", "iOS", "Git/GitHub"] },
  { group: "Tools & Security", items: ["Active Directory", "Citrix", "Troubleshooting", "Technical Support", "Security Operations"] },
  { group: "Soft Skills", items: ["Agile", "Scrum", "Waterfall", "Critical Thinking", "Problem Solving", "Communication"] },
];

const certifications = [
  "AWS Certified Cloud Practitioner (Mar 2025)",
  "IBM Data Analytics (Jul 2025)",
  "Microsoft Azure AI-900 (May 2025)",
  "IBM IT Fundamentals (Mar 2025)",
  "Oracle HCM Certified Associate (Apr 2025)",
];

const projects = [
  {
    title: "Capstone Project - Python & Data Visualization",
    description: "Built interactive dashboards using SQL, Python & Cognos for data-driven decision making.",
    impact: "Boosted reporting efficiency by 30% and improved decision-making accuracy by 25%.",
    link: "https://github.com/Jhans2/CAPSTONE_PROJECT"
  },
  {
    title: "Food Ordering Database",
    description: "Designed a full system for managing customers, clerks, and automated order billing.",
    impact: "Improved user experience with 60% efficiency increase.",
    link: "https://github.com/Jhans2/WEB322-ASSIGNMENT"
  },
  {
    title: "Music Streaming Website",
    description: "Developed a full-stack web app for streaming and playlist management.",
    impact: "Implemented complete front-end & back-end features with 80% user satisfaction.",
    link: "https://github.com/Jhans2/SenecaMusic-WEB422"
  },
  {
    title: "Assembly Line Simulation",
    description: "Developed a simulation to process orders based on inventory availability.",
    impact: "Designed 70% of the core functionality and optimized overall performance for greater efficiency and accuracy.",
    link: "https://github.com/Jhans2/Assembly-Line-Simulator"
  }
];

const experience = [
  {
    role: "IT Admin",
    company: "Cabela's / Bass Pro Shops Inc.",
    period: "Sep 2024 - Jan 2025",
    bullets: [
      "Developed and enforced IT policies to streamline operations.",
      "Monitored system performance and troubleshot technical issues."
    ],
  },
  {
    role: "Junior Software Developer Intern",
    company: "Oops Tech Inc.",
    period: "May 2024 - Aug 2024",
    bullets: [
      "Developed and debugged applications using JavaScript, React, and Node.js.",
      "Contributed to cloud modernization efforts with AWS."
    ],
  },
  {
    role: "Rogers Technical & Customer Support Specialist",
    company: "IO Solutions Inc.",
    period: "Feb 2023 - May 2024",
    bullets: [
      "Provided technical troubleshooting and customer support.",
      "Created written status reports for leadership and supported sales expansion."
    ],
  },
  {
    role: "Developer Intern",
    company: "Brain Birds Inc.",
    period: "May 2022 - Aug 2022",
    bullets: [
      "Built web applications with React.js, Node.js, and MongoDB.",
      "Gained hands-on cloud development and backend optimization experience."
    ],
  },
];

function Section({ id, title, subtitle, children, className = "" }) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">{title}</h2>
        {subtitle && <p className="text-gray-600 mb-10 text-sm sm:text-base">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}

export default function App() {
  const initials = useMemo(() => NAME.split(" ").map(w => w[0]).slice(0,2).join("").toUpperCase(), []);

  return (
    <div className="font-sans text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b shadow-sm">
        <div className="container mx-auto flex items-center justify-between h-16 px-4 sm:px-6">
          <a href="#home" className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
            Jatin H. • Dev & Cloud
          </a>

          {/* Navigation - placeholder for mobile, currently hidden */}
          <nav className="hidden md:flex items-center gap-6 font-medium text-gray-700">
            {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="relative group hover:text-indigo-600 transition">
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Resume Button */}
<a 
  href={RESUME_URL} 
  target="_blank" 
  rel="noreferrer" 
  className="ml-2 sm:ml-4 px-3 sm:px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:scale-105 transition transform flex items-center gap-2"
>
  <FaDownload /> Resume
</a>

        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 overflow-hidden flex items-center">
        {/* Floating particles */}
        <div className="absolute w-full h-full top-0 left-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div key={i} animate={{ y: ["0%", "100%"] }} transition={{ repeat: Infinity, duration: 8 + i }} className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full opacity-40" style={{ top: `${Math.random()*100}%`, left: `${Math.random()*100}%` }} />
          ))}
        </div>

        <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="flex-1 text-center md:text-left">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">{NAME}</motion.h1>
            <p className="mt-2 text-base sm:text-lg text-blue-700">{ROLE}</p>
            <p className="mt-2 text-sm sm:text-base text-gray-700">{TAGLINE}</p>
            <div className="mt-4 sm:mt-6 flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
<a 
  href={RESUME_URL} 
  target="_blank" 
  rel="noreferrer" 
  className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center gap-2 shadow-lg hover:scale-105 transition"
>
  <FaDownload /> Resume
</a>

              <a href={`mailto:${EMAIL}`} className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 rounded-full flex items-center gap-2 hover:bg-gray-100 transition">
                <FaEnvelope /> Contact
              </a>
              <a href={GITHUB} target="_blank" rel="noreferrer" className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 rounded-full flex items-center gap-2 hover:bg-gray-100 transition">
                <FaGithub /> GitHub
              </a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 rounded-full flex items-center gap-2 hover:bg-gray-100 transition">
                <FaLinkedin /> LinkedIn
              </a>
            </div>
            <div className="mt-3 sm:mt-4 flex items-center gap-2 text-gray-500 text-xs sm:text-sm justify-center md:justify-start">
              <FaLocationArrow /> {LOCATION}
            </div>
          </div>

          <div className="flex-shrink-0">
            <img
              src={ProfileImg}
              alt={NAME}
              className="w-36 sm:w-48 md:w-52 h-36 sm:h-48 md:h-52 rounded-full object-cover shadow-2xl select-none border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About Me" subtitle="A passionate IT professional with a flair for innovation." className="bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card md:col-span-2 p-4 sm:p-6">
            <p className="leading-relaxed text-gray-800 text-sm sm:text-base">
              I craft impactful solutions blending software development, cloud technologies, and IT operations. 
              From coding in React, Python, and SQL to optimizing workflows, I thrive in solving complex challenges. 
              My goal is to create products and experiences that combine functionality with elegance.
            </p>
          </div>
          <div className="glass-card p-4 sm:p-6 flex flex-col justify-center">
            <h3 className="font-semibold mb-2 sm:mb-3 text-indigo-700 text-base sm:text-lg">Highlights</h3>
            <ul className="list-disc ml-4 sm:ml-5 space-y-1 text-gray-700 text-xs sm:text-sm">
              <li>Expertise in React, Python, SQL & Cloud platforms</li>
              <li>Strong Linux & IT support foundation</li>
              <li>Leadership & teamwork from retail & technical roles</li>
              <li>Passionate about creating intuitive, high-quality solutions</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills & Certifications" subtitle="Tools and technologies I excel at." className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(s => (
            <div key={s.group} className="glass-card p-4 sm:p-6 hover:shadow-lg transition transform hover:-translate-y-2">
              <h4 className="font-semibold mb-2 sm:mb-3 text-indigo-700 text-sm sm:text-base">{s.group}</h4>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {s.items.map(i => (
                  <span key={i} className="px-2 sm:px-3 py-1 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 text-white text-xs sm:text-sm">{i}</span>
                ))}
              </div>
            </div>
          ))}
          <div className="glass-card p-4 sm:p-6 col-span-full hover:shadow-lg transition transform hover:-translate-y-2">
            <h4 className="font-semibold mb-2 sm:mb-3 text-indigo-700 text-sm sm:text-base">Certifications & Badges</h4>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {certifications.map(c => (
                <span key={c} className="px-2 sm:px-3 py-1 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 text-white text-xs sm:text-sm">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects" subtitle="Building impactful solutions." className="bg-gradient-to-r from-pink-50 via-red-50 to-yellow-50">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(p => (
            <div key={p.title} className="glass-card p-4 sm:p-6 hover:shadow-lg transition transform hover:-translate-y-2">
              <h3 className="text-lg sm:text-xl font-semibold text-indigo-700">{p.title}</h3>
              <p className="mt-1 sm:mt-2 text-gray-800 text-sm sm:text-base">{p.description}</p>
              {p.impact && <p className="mt-1 sm:mt-2 text-gray-500 text-xs sm:text-sm"><strong>Impact:</strong> {p.impact}</p>}
              <a href={p.link} target="_blank" rel="noreferrer" className="mt-2 sm:mt-4 inline-block px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:scale-105 transition text-xs sm:text-sm">
                <FaLink className="inline mr-1 sm:mr-2" /> View Project
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="IT Experience" subtitle="Where I built my skills & expertise." className="bg-gradient-to-r from-yellow-50 via-green-50 to-teal-50">
        <div className="grid gap-6">
          {experience.map((e) => (
            <div key={e.role} className="glass-card p-4 sm:p-6 hover:shadow-lg transition transform hover:-translate-y-2">
              <div className="flex flex-wrap items-baseline justify-between gap-1 sm:gap-2">
                <h4 className="text-sm sm:text-base font-semibold text-indigo-700">{e.role} — <span className="text-gray-600">{e.company}</span></h4>
                <span className="text-xs sm:text-sm text-gray-500">{e.period}</span>
              </div>
              <ul className="list-disc ml-4 sm:ml-5 mt-1 sm:mt-2 space-y-1 text-gray-700 text-xs sm:text-sm">
                {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" subtitle="Let's build something great together." className="bg-gradient-to-r from-teal-50 via-blue-50 to-indigo-50">
        <div className="glass-card p-4 sm:p-6 flex flex-wrap gap-2 sm:gap-4 justify-center md:justify-start hover:shadow-lg transition transform hover:-translate-y-2">
          <a className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center gap-2 text-xs sm:text-sm" href={`mailto:${EMAIL}`}><FaEnvelope /> Email Me</a>
          <a className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 rounded-full flex items-center gap-2 text-xs sm:text-sm hover:bg-gray-100 transition" href={GITHUB} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
          <a className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 rounded-full flex items-center gap-2 text-xs sm:text-sm hover:bg-gray-100 transition" href={LINKEDIN} target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
        </div>
        <p className="mt-2 sm:mt-4 text-xs sm:text-sm text-gray-500 text-center md:text-left">Based in {LOCATION}. Let’s create something extraordinary.</p>
      </Section>

      {/* Footer */}
      <footer className="py-6 sm:py-10 border-t border-gray-300 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto text-center text-xs sm:text-sm text-gray-500">
          © {new Date().getFullYear()} {NAME}. Built with React + Tailwind.
        </div>
      </footer>
    </div>
  );
}
