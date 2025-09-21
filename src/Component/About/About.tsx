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
              I am a detail-oriented Frontend Developer with 2.6+ years of
              experience, specializing in{" "}
              <strong>
                ReactJS, TypeScript, and modern frontend frameworks
              </strong>
              . I focus on building{" "}
              <strong>
                scalable, modular, and high-performing web applications
              </strong>{" "}
              that integrate seamlessly with RESTful APIs and microservices
              architecture.
            </p>
            <p>
              With a strong emphasis on{" "}
              <strong>
                user experience, accessibility, and performance optimization
              </strong>
              , I have delivered solutions that reduced application load time by{" "}
              <strong>20%</strong> and boosted development efficiency by{" "}
              <strong>25%</strong>. My skill set also extends to{" "}
              <strong>
                Node.js backend development, Git version control, and automated
                testing
              </strong>{" "}
              (Jest, React Testing Library).
            </p>
            <p>
              Currently, I am expanding my expertise in{" "}
              <strong>
                backend development, cloud technologies, and DevOps practices
              </strong>{" "}
              to grow into a <strong>Full Stack Developer</strong>. I am
              passionate about writing clean, maintainable code and following{" "}
              <strong>industry best practices</strong> to create efficient and
              reliable software solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h2>2.6+</h2>
          <p>Years in Frontend Development</p>
        </div>
        <div className="achievement-divider" />
        <div className="about-achievement">
          <h2>7+</h2>
          <p>Web Applications Delivered</p>
        </div>
        <div className="achievement-divider" />
        <div className="about-achievement">
          <h2>20%</h2>
          <p>Performance Improvement</p>
        </div>
      </div>
    </section>
  );
};

export default About;
