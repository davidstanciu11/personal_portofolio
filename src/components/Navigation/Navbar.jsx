import { Link } from "react-router-dom";
import "./Navbar.style.css";

function Navigation() {
  return (
    <>
      <div className="navbar">
        <div>
          <h2 className="navbar_title">Davi.dev</h2>
        </div>
        <div className="navbar_links">
          <Link className="nav_li" to={"/home"}>
            Home
          </Link>
          <Link className="nav_li" to={"/about"}>
            About
          </Link>
          <Link className="nav_li" to={"/projects"}>
            Projects
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navigation;
