import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Resume from "../../assets/Sandeep-Madiki.pdf";
// import Resume from "../../assets/Sandeep_Madiki_Resume.pdf";
// import ProfileImg from "../../assets/profile-1 (1).jpg";
// import ProfileImg from "../../assets/prof-profile-full.png";
import ProfileImg from "../../assets/prof-profile-crop.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-10% 0px -10% 0px", amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.div
      id="home"
      className="hero"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } },
      }}
    >
      {/* Animated floating gradient blob */}
      <div className="hero-blob" />
      <motion.div
        className="hero-content"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.18,
            },
          },
        }}
      >
        <motion.div
          className="hero-text"
          variants={{
            hidden: { x: -60, opacity: 0 },
            visible: {
              x: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
        >
          <motion.h1
            variants={{
              hidden: { y: 40, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.7, ease: "easeOut" },
              },
            }}
          >
            <motion.span
              variants={{
                hidden: { scale: 0.8, opacity: 0 },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.7, delay: 0.2, ease: "backOut" },
                },
              }}
            >
              Hi, I'm Sandeep
            </motion.span>
            <br />
            <span className="role-text">{useTypewriterText()}</span>
          </motion.h1>
          <motion.p
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.7, delay: 0.3, ease: "easeOut" },
              },
            }}
          >
            Frontend Developer with 2.6+ years of experience, crafting
            responsive and scalable web applications. Specialized in React,
            TypeScript, and modern web technologies, with a strong focus on
            delivering clean, user-friendly interfaces.
          </motion.p>
          <motion.div
            className="hero-action"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, delay: 0.5, ease: "easeOut" },
              },
            }}
          >
            <AnchorLink
              offset={60}
              href="#contact"
              style={{ textDecoration: "none" }}
            >
              <motion.div
                className="hero-connect"
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 10px 30px -15px rgba(100,255,218,0.4)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Let's Connect
              </motion.div>
            </AnchorLink>

            <motion.a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-resume"
              whileHover={{
                scale: 1.08,
                backgroundColor: "rgba(100,255,218,0.13)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              View Resume
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-image"
          variants={{
            hidden: { opacity: 0, scale: 0.92, y: 40 },
            visible: {
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { duration: 1, delay: 0.6, ease: "backOut" },
            },
          }}
        >
          <motion.img
            src={ProfileImg}
            alt="Sandeep - Full Stack Developer"
            variants={{
              hidden: { filter: "blur(8px)", scale: 0.95 },
              visible: {
                filter: "blur(0px)",
                scale: 1,
                transition: { duration: 1.1, delay: 0.8, ease: "easeOut" },
              },
            }}
            whileHover={{ scale: 1.04, rotate: 2 }}
            whileTap={{ scale: 0.98, rotate: -2 }}
            style={{ boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Custom hook for typewriter effect
function useTypewriterText() {
  const [text] = useTypewriter({
    // words: ["Full Stack Developer", "Frontend Developer"],
    words: [
      "React JS Developer",
      "Frontend Developer",
      "TypeScript Specialist",
      "Full Stack Learner",
    ],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1200,
  });
  return (
    <span style={{ display: "flex" }}>
      {text}
      <span className="typewriter-cursor">|</span>
    </span>
  );
}

export default Hero;
