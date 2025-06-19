import { useRef, useState, useEffect } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Menu, X } from "lucide-react";
import BrandLogo from "../../assets/brand-logo-latest.png";
import BrandIcon from "../../assets/brand-icon-latest.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "0";
    }
  };

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "-350px";
    }
  };

  const handleMenuClick = () => {
    closeMenu();
  };

  return (
    <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <AnchorLink href="#home" className="anchor-link">
        <img src={BrandLogo} alt="" className="name-logo" />
        <img src={BrandIcon} alt="" className="brand-logo" />
      </AnchorLink>
      <span className="nav-mob-open" onClick={openMenu}>
        <Menu />
      </span>
      <ul ref={menuRef} className="nav-menu">
        <span className="nav-mob-close" onClick={closeMenu}>
          <X />
        </span>
        <li
          onClick={() => {
            setMenu("home");
            handleMenuClick();
          }}
        >
          <AnchorLink href="#home" className="anchor-link">
            <p>Home</p>
            {menu === "home" ? <div className="menu-underline" /> : <></>}
          </AnchorLink>
        </li>
        <li
          onClick={() => {
            setMenu("about");
            handleMenuClick();
          }}
        >
          <AnchorLink offset={50} href="#about" className="anchor-link">
            <p>About</p>
            {menu === "about" ? <div className="menu-underline" /> : <></>}
          </AnchorLink>
        </li>
        <li
          onClick={() => {
            setMenu("skills");
            handleMenuClick();
          }}
        >
          <AnchorLink offset={80} href="#skills" className="anchor-link">
            <p>Skills</p>
            {menu === "skills" ? <div className="menu-underline" /> : <></>}
          </AnchorLink>
        </li>
        <li
          onClick={() => {
            setMenu("projects");
            handleMenuClick();
          }}
        >
          <AnchorLink offset={80} href="#projects" className="anchor-link">
            <p>Projects</p>
            {menu === "projects" ? <div className="menu-underline" /> : <></>}
          </AnchorLink>
        </li>
        <li
          onClick={() => {
            setMenu("experience");
            handleMenuClick();
          }}
        >
          <AnchorLink offset={50} href="#experience" className="anchor-link">
            <p>Experience</p>
            {menu === "experience" ? <div className="menu-underline" /> : <></>}
          </AnchorLink>
        </li>
        <li
          onClick={() => {
            setMenu("contact");
            handleMenuClick();
          }}
        >
          <AnchorLink offset={60} href="#contact" className="anchor-link">
            <p>Contact</p>
            {menu === "contact" ? <div className="menu-underline" /> : <></>}
          </AnchorLink>
        </li>
      </ul>

      <AnchorLink
        offset={60}
        href="#contact"
        className=""
        style={{ textDecoration: "none" }}
      >
        <div className="nav-connect">Connect With Me</div>
      </AnchorLink>
    </div>
  );
};

export default Navbar;
