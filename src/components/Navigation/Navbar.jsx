import { Link } from "react-router-dom";
import "./Navbar.style.css";
import { useState, useEffect } from "react";

function Navigation() {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200) 
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  })

  return (
    <> 
    <nav className={`${sticky ? "sticky" : ""}`}>
      <div className="navbar">
        <div>
          <h2 className="navbar_title">Davi.dev</h2>
        </div>
        <div className="navbar_links">
          <Link  className="nav_li" to="home">
            Home
          </Link>
          <Link className="nav_li" to="about">
            About
          </Link>
          <Link className="nav_li" to="projects">
            Projects
          </Link>
        </div>
      </div>
      </nav>
    </>
  );
}

export default Navigation;
