import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Resume from "../../assets/Sandeep_Madiki_Resume.pdf";
import ProfileImg from "../../assets/profile-1 (1).jpg";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            <span>Hi, I'm Sandeep</span>
            <br />
            Full Stack Developer
          </h1>
          <p>
            A passionate developer with 2+ years of experience in frontend
            development, now expanding into full-stack. Specialized in building
            responsive, scalable web applications using React, TypeScript, and
            modern web technologies.
          </p>
          <div className="hero-action">
            <AnchorLink
              offset={60}
              href="#contact"
              style={{ textDecoration: "none" }}
            >
              <div className="hero-connect">Let's Connect</div>
            </AnchorLink>

            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-resume"
            >
              View Resume
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={ProfileImg} alt="Sandeep - Full Stack Developer" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
