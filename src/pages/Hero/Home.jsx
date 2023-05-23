import "./Home.style.css";
import ProfilePic from "../../assets/FTM_6953.jpg";
import LinkedinIcon from "../../assets/linkedin.png";
import Github from "../../assets/github.png";
import CSS from "../../assets/css.png";
import html from "../../assets/html.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import git from "../../assets/git.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="home_section" id="home" data-aos="fade-down" data-aos-delay="500">
        <div className="container">
          <div className="content">
            <div className="main_content">
              <div className="home_description">
                <h1 className="hero_title" >Front-End Developer</h1>
                <p className="hero_par"  >
                  Hi, I&#39;m David Stanciu. A passionate Front-End Developer
                  based in Bucharest, Romania. 📍
                </p>
                <div className="profile_links">
                  <Link
                    to={"https://www.linkedin.com/in/david-stanciu-ab9374257/"}
                  >
                    <img
                      src={LinkedinIcon}
                      alt="Linkedinicon"
                      className="profileLinks"
                      
                    />
                  </Link>
                  <Link to={"https://github.com/davidstanciu11"}>
                    <img src={Github} alt="github" className="profileLinks"  />
                  </Link>
                </div>
              </div>
              <div className="home_photo">
                <img
                  src={ProfilePic}
                  alt="profilePicture"
                  className="profile_pic"
                 
                />
              </div>
            </div>
            <div className="tehnologies">
              <h3 className="tech_names">
                Tech Stack <span className="line_tech">|</span>
              </h3>
              <div className="tech_icons_flex"  >
              <img src={html} alt="htmlIcon"className="tech_icon"/>
              <img src={CSS} alt="cssIcon"className="tech_icon"/>
              <img src={js} alt="jsIcon"className="tech_icon"/>
              <img src={react} alt="reactIcon"className="tech_icon"/>
              <img src={git} alt="gitIcon"className="tech_icon"/>
            </div></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
