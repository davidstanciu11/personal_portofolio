import { Link } from "react-router-dom";
import "./Navbar.style.css";
import { Component } from "react";
import menuIcon from "../../assets/menu_icon.png";


const menuToggle = () => {
  let nav = document.getElementsByClassName("#navbar_links");
  let i = document.getElementById("bar");
  if(nav[0].classList.contains("active")){
    nav[0].classList.remove("active");
    i.src= menuIcon;
} else {
    nav[0].classList.add("active");
}
}

class Navigation extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  
  render() {
    return (
      <>
        <div className="navbar">
          <div>
            <h2 className="navbar_title">Davi.dev</h2>
          </div>
          <div
            id="navbar_links"
            className={
              this.state.clicked ? "#navbar_links active" : "#navbar_links"
            }
            onClick={menuToggle}
          >
            <Link className="nav_li" to="home">
              Home
            </Link>
            <Link className="nav_li" to="about">
              About
            </Link>
            <Link className="nav_li" to="projects">
              Projects
            </Link>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <img
              id="bar"
              src={menuIcon}
            ></img>
          </div>
        </div>
      </>
    );
  }
}

export default Navigation;
