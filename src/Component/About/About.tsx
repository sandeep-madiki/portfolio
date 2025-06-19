import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <div className="heading-strike" />
      </div>

      <div className="about-section">
        <div className="about-content">
          <div className="about-para">
            <p>
              A detail-oriented and adaptable Frontend Developer with 2+ years
              of experience specializing in ReactJS, TypeScript, and modern
              frontend frameworks. I excel at building scalable, modular web
              applications and integrating RESTful APIs aligned with
              microservices architecture.
            </p>
            <p>
              Beyond technical expertise, I bring a strong focus on user
              experience and accessibility. My experience includes Node.js
              backend development, Git version control, and testing automation
              (Jest, RTL). I've successfully delivered performance-optimized
              solutions that improved app load time by 20% and increased
              development efficiency by 25%.
            </p>
            <p>
              Currently expanding my expertise in backend development, cloud
              technologies, and DevOps practices to transition into a Full Stack
              role. I'm passionate about creating maintainable, efficient code
              while following best practices in software development.
            </p>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h2>2+</h2>
          <p>Years of Experience</p>
        </div>
        <div className="achievement-divider" />
        <div className="about-achievement">
          <h2>5+</h2>
          <p>Projects Completed</p>
        </div>
        <div className="achievement-divider" />
        <div className="about-achievement">
          <h2>3+</h2>
          <p>Happy Clients</p>
        </div>
      </div>
    </section>
  );
};

export default About;
