import { useState } from "react";
import "./MyWork.css";
import { Link2 } from "lucide-react";

const projects = [
  {
    title: "Heritage Admin Panel",
    description:
      "Developed a comprehensive admin panel for managing heritage properties, bookings, and user data.",
    features: [
      "Implemented real-time booking management with calendar integration",
      "Created dynamic dashboards with data visualization using Chart.js",
      "Built a robust user management system with role-based access control",
    ],
    impact:
      "Streamlined property management operations by 60% and improved booking efficiency by 45%.",
    technologies: [
      "ReactJS",
      "TypeScript",
      "Material-UI",
      "Chart.js",
      "Redux",
      "REST APIs",
    ],
    link: "https://heritage-admin.example.com",
    note: "Internal project; link not publicly accessible.",
  },
  {
    title: "Onboarding SaaS Product",
    description:
      "Engineered a multi-tenant onboarding platform with dynamic form builders and modular templates.",
    features: [
      "Integrated Mapbox for geolocation and React-Phone-Input-2 for phone validation; secured access via JWT and React Router.",
      "Developed advanced forms (conditional fields, file uploads) and seamless REST API sync.",
    ],
    impact: "Boosted data accuracy by 25% and improved HR efficiency by 40%.",
    technologies: [
      "ReactJS",
      "TypeScript",
      "CSS Modules",
      "Formik",
      "Yup",
      "JWT",
      "REST APIs",
      "Mapbox",
      "React-Phone-Input-2",
    ],
    note: "Internal project; link not publicly accessible.",
  },
];

const PROJECTS_PER_PAGE = 2;

const MyWork = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects?.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const visibleProjects = projects.slice(
    startIndex,
    startIndex + PROJECTS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Prevent default scroll behavior
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      const currentScroll = window.scrollY;
      setTimeout(() => {
        window.scrollTo(0, currentScroll);
      }, 0);
    }
  };

  return (
    <section id="projects" className="work">
      <div className="work-title">
        <h1>My Work</h1>
        <div className="heading-strike" />
      </div>
      <div className="work-container">
        {visibleProjects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h2>{project.title}</h2>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <Link2 size={20} />
                  <span>Live Demo</span>
                </a>
              )}
              {project.note && <p className="project-note">{project.note}</p>}
            </div>
            <div className="project-content">
              <p className="project-description">{project.description}</p>
              <div className="project-features">
                {project.features.map((feature, idx) => (
                  <p key={idx} className="feature">
                    {feature}
                  </p>
                ))}
              </div>
              <div className="project-impact">
                <h3>Impact</h3>
                <p>{project.impact}</p>
              </div>
              <div className="project-tech">
                <h3>Technologies Used</h3>
                <div className="tech-tags">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`pagination-button ${
                currentPage === page ? "active" : ""
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default MyWork;
