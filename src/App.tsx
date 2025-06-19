import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import About from "./Component/About/About";
import MyWork from "./Component/MyWork/MyWork";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer.tsx";
import Skills from "./Component/Skills/Skills.tsx";
import Experience from "./Component/Experience/Experience.tsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <MyWork />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
