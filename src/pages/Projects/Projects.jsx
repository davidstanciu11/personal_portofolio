import "./Projects.style.css";
import { Link } from "react-router-dom";
import firstProject from "../../assets/firstPortofolio.png";
import slackDesign from "../../assets/slackDesign.png";
import geolocationapp from "../../assets/SeeYa.png";
import outstock from "../../assets/outstock.png";
import bankapp from "../../assets/bankapp.png";
import github from "../../assets/github.png";
import externalLink from "../../assets/external_link.png";

function Projects() {
  return (
    <>
      <section className="projects" id="projects">
        <div className="projects_header">
          <p className="projects_header_title">PORTOFOLIO</p>
          <h3 className="projects_header_desc">
            A brief look on my journey working on Projects
          </h3>
        </div>
        <div className="project_container">
          <div className="project_image">
            <Link to={"https://firstportofolio-davidst.netlify.app"}>
              <img
                src={firstProject}
                alt="projectPhoto"
                className="project_img"
              />
            </Link>
          </div>
          <div className="project_desc">
            <h3 className="project_title">First Portofolio 💼</h3>
            <p className="project_par">
              In my first portofolio project I learned how to master HTML, CSS
              and Js.Throughout the development process, I have
              encountered various challenges and learned how to troubleshoot and
              debug issues in my code.
            </p>
            <div className="project_links">
              <div className="project_github">
                <Link to={""} className="links_to">Code <img src={github} alt="github" /></Link>
              </div>
              <div className="project_live">
              <Link to={""} className="links_to">Live Demo <img src={externalLink} alt="externaLink" /></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="project_container">
          <div className="project_image">
            <Link to={"https://slackdesign-david.netlify.app"}>
              <img
                src={slackDesign}
                alt="projectPhoto"
                className="project_img"
              />
            </Link>
          </div>
          <div className="project_desc">
            <h3 className="project_title"></h3>
            <p className="project_par"></p>
            <div className="project_links">
              <div className="project_github"></div>
              <div className="project_live"></div>
            </div>
          </div>
        </div>
        <div className="project_container">
          <div className="project_image">
            <Link to={"https://bankapp-david.netlify.app"}>
              <img src={bankapp} alt="projectPhoto" className="project_img" />
            </Link>
          </div>
          <div className="project_desc">
            <h3 className="project_title"></h3>
            <p className="project_par"></p>
            <div className="project_links">
              <div className="project_github"></div>
              <div className="project_live"></div>
            </div>
          </div>
        </div>
        <div className="project_container">
          <div className="project_image">
            <Link to={"https://geolocationapp-david.netlify.app"}>
              <img
                src={geolocationapp}
                alt="projectPhoto"
                className="project_img"
              />
            </Link>
          </div>
          <div className="project_desc">
            <h3 className="project_title"></h3>
            <p className="project_par"></p>
            <div className="project_links">
              <div className="project_github"></div>
              <div className="project_live"></div>
            </div>
          </div>
        </div>
        <div className="project_container">
          <div className="project_image">
            <Link to={"https://outstock-react-project.netlify.app"}>
              <img src={outstock} alt="projectPhoto" className="project_img" />
            </Link>
          </div>
          <div className="project_desc">
            <h3 className="project_title"></h3>
            <p className="project_desc"></p>
            <div className="project_links">
              <div className="project_github"></div>
              <div className="project_live"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
