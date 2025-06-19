import "./Experience.css";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "React Developer",
    company: "KloudWorx Technologies Pvt Ltd",
    period: "Apr 2023 – Present",
    location: "Chennai, India",
    achievements: [
      "Developed dynamic, scalable web applications using ReactJS and TypeScript for improved performance and maintainability.",
      "Optimized app load times by 20% using React Suspense, lazy loading, and code splitting.",
      "Enhanced test coverage by 30% with Jest and React Testing Library, reducing production bugs.",
      "Built reusable and modular UI components with Redux Toolkit and Context API for efficient state management.",
      "Collaborated with cross-functional teams (Design, Backend, QA) in Agile sprints to ensure seamless API integrations.",
      "Utilized Webpack and Git for optimized builds and version control.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-title">
        <h1>Experience</h1>
        <div className="heading-strike" />
      </div>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <div className="experience-role">
                <Briefcase size={24} />
                <h2>{exp.role}</h2>
              </div>
              <div className="experience-company">
                <h3>{exp.company}</h3>
                <div className="experience-meta">
                  <div className="experience-period">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="experience-period">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="experience-content">
              <ul className="achievements-list">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="achievement-item">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
