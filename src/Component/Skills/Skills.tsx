import "./Skills.css";
import ReduxIcon from "../../assets/Tech-icons/Redux.png";
import Nexticon from "../../assets/Tech-icons/nextjs-icon.webp";
import ReactIcon from "../../assets/Tech-icons/React.png";
import HTMLIcon from "../../assets/Tech-icons/HTML5.png";
import CSSIcon from "../../assets/Tech-icons/CSS3.png";
import TaiwindIcon from "../../assets/Tech-icons/Tailwind CSS.png";
import BootstrapIcon from "../../assets/Tech-icons/Bootstrap.png";
// import SCSSIcon from "../../assets/Tech-icons/sass.svg";
import JSIcon from "../../assets/Tech-icons/JavaScript.png";
import TSIcon from "../../assets/Tech-icons/TypeScript.png";
import NodeIcon from "../../assets/Tech-icons/Node.js.png";
import ExpressIcon from "../../assets/Tech-icons/Express.png";
import MongoDBIcon from "../../assets/Tech-icons/MongoDB.png";
// import MongooseIcon from "../../assets/Tech-icons/Mongoose.js.png";
import SqlIcon from "../../assets/Tech-icons/SQLite.png";
import GitIcon from "../../assets/Tech-icons/Git.png";
import VSCodeIcon from "../../assets/Tech-icons/Visual Studio Code (VS Code).png";
import PostmanIcon from "../../assets/Tech-icons/Postman.png";
import VercelIcon from "../../assets/Tech-icons/Vercel.png";
// import NetlifyIcon from "../../assets/Tech-icons/Netlify.webp";
// import DockerIcon from "../../assets/Tech-icons/Docker.png";
// import FigmaIcon from "../../assets/Tech-icons/Figma.png";
import JSONIcon from "../../assets/Tech-icons/JSON.png";

const skills1 = [
  { name: "React JS", icon: ReactIcon },
  { name: "Next JS", icon: Nexticon },
  { name: "Redux Toolkit", icon: ReduxIcon },
  { name: "JavaScript", icon: JSIcon },
  { name: "TypeScript", icon: TSIcon },

  { name: "HTML", icon: HTMLIcon },
  { name: "CSS", icon: CSSIcon },
  { name: "Tailwind CSS", icon: TaiwindIcon },
  { name: "Bootstrap", icon: BootstrapIcon },

  { name: "Node JS", icon: NodeIcon },
  { name: "Express JS", icon: ExpressIcon },
  { name: "MongoDB", icon: MongoDBIcon },
  { name: "SQL", icon: SqlIcon },

  { name: "Git", icon: GitIcon },
  { name: "Postman", icon: PostmanIcon },
  { name: "VSCode", icon: VSCodeIcon },
  { name: "Vercel", icon: VercelIcon },

  { name: "JSON", icon: JSONIcon },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-title">
        <h1>Skills</h1>
        <div className="heading-strike" />
      </div>

      <div className="skills-container">
        {skills1.map((skill) => (
          <div key={skill.name} className="skill-card">
            <div className="skill-icon">
              <img src={skill.icon} alt={skill.name} />
            </div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
