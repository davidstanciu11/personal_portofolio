import "./Projects.style.css";
import { Link } from "react-router-dom";
import firstProject from "../../assets/firstPortofolio.png";
import slackDesign from "../../assets/slackdesign.png";
import geolocationapp from "../../assets/SeeYa.png";
import outstock from "../../assets/outstock.png";
import bankapp from "../../assets/bankapp.png";
import github from "../../assets/github.png";
import externalLink from "../../assets/external_link.png";
import Footer from "../../components/Footer/Footer";

function Projects() {
  return (
    <>
      <section className="projects" id="projects">
        <div className="projects_header">
          <p className="projects_header_title">PORTOFOLIO</p>
          <h3 className="projects_header_desc">
            A brief look on my journey working on Projects
          </h3>
        </div>{" "}
        <div className="project_container">
            <Link to={"https://outstock-react-project.netlify.app"}>
              <img src={outstock} alt="projectPhoto" className="project_img" />
            </Link>
          <div className="project_desc project_desc_outstock">
            <h3 className="project_title">OutStock 🛒 </h3>
            <p className="project_par">
              Outstock 🛒 is an ecommerce project that allows users to search,
              filter, sort and add to cart products from an API. For this
              project it is used <b>React.js.</b>
            </p>
            <div className="project_links">
              <div className="project_github">
                <Link
                  to={"https://github.com/davidstanciu11/eCommerce_project"}
                  className="links_to"
                >
                  Code{" "}
                </Link>
                <Link
                  to={"https://github.com/davidstanciu11/eCommerce_project"}
                >
                  <img src={github} alt="github" className="code_links_img" />
                </Link>
              </div>
              <div className="project_live">
                <Link
                  to={"https://outstock-react-project.netlify.app"}
                  className="links_to"
                >
                  Live Demo
                </Link>
                <Link to={"https://outstock-react-project.netlify.app"}>
                  <img
                    src={externalLink}
                    alt="externaLink"
                    className="code_links_img"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="project_container project_container_reverse">
          <div className="project_image project_image_reverse">
            <Link to={"https://bankapp-david.netlify.app"}>
              <img src={bankapp} alt="projectPhoto" className="project_img" />
            </Link>
          </div>
          <div className="project_desc project_desc_bank">
            <h3 className="project_title">LionSociety 💸</h3>
            <p className="project_par">
              LionSociety 💸 is an online banking design made with <b>HTML</b>,
              <b>CSS</b> and <b>Javasript</b>. The user interface is designed to
              be intuitive and visually appealing. With a clean and responsive
              design, customers can easily navigate through different sections
              of the platform.{" "}
            </p>
            <div className="project_links">
              <div className="project_github">
                <Link
                  to={"https://github.com/davidstanciu11/bank_app"}
                  className="links_to"
                >
                  Code{" "}
                </Link>
                <Link to={"https://github.com/davidstanciu11/bank_app"}>
                  <img src={github} alt="github" className="code_links_img" />
                </Link>
              </div>
              <div className="project_live">
                <Link
                  to={"https://bankapp-david.netlify.app"}
                  className="links_to"
                >
                  Live Demo
                </Link>
                <Link to={"https://bankapp-david.netlify.app"}>
                  <img
                    src={externalLink}
                    alt="externaLink"
                    className="code_links_img"
                  />
                </Link>
              </div>
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
            <h3 className="project_title">SeeYa 🌏</h3>
            <p className="project_par">
              SeeYa 🌏 empowers users to create and track tasks in real-time,
              visualizing them on an interactive map interface. It offers a
              seamless and efficient solution for individuals and teams to
              organize and complete tasks efficiently.
            </p>
            <div className="project_links">
              <div className="project_github">
                <Link
                  to={"https://github.com/davidstanciu11/GeoLocation_app"}
                  className="links_to"
                >
                  Code{" "}
                </Link>
                <Link to={"https://github.com/davidstanciu11/GeoLocation_app"}>
                  <img src={github} alt="github" className="code_links_img" />
                </Link>
              </div>
              <div className="project_live">
                <Link
                  to={"https://geolocationapp-david.netlify.app"}
                  className="links_to"
                >
                  Live Demo
                </Link>
                <Link to={"https://geolocationapp-david.netlify.app"}>
                  <img
                    src={externalLink}
                    alt="externaLink"
                    className="code_links_img"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="project_container project_container_reverse">
          <div className="project_image project_image_reverse">
            <Link to={"https://slackdesign-david.netlify.app"}>
              <img
                src={slackDesign}
                alt="projectPhoto"
                className="project_img"
              />
            </Link>
          </div>
          <div className="project_desc">
            <h3 className="project_title">Slack Replica 🧩</h3>
            <p className="project_par">
              Slack Replica 🧩 aims to recreate the visual and interactive
              elements of the original Slack website, offering a realistic user
              experience and demonstrating the power of front-end web
              development.
            </p>
            <div className="project_links">
            <div className="project_github">
                <Link
                  to={"https://github.com/davidstanciu11/slackDesign"}
                  className="links_to"
                >
                  Code{" "}
                </Link>
                <Link to={"https://github.com/davidstanciu11/slackDesign"}>
                  <img src={github} alt="github" className="code_links_img" />
                </Link>
              </div>
              <div className="project_live">
                <Link
                  to={"https://slackdesign-david.netlify.app"}
                  className="links_to"
                >
                  Live Demo
                </Link>
                <Link to={"https://slackdesign-david.netlify.app"}>
                  <img
                    src={externalLink}
                    alt="externaLink"
                    className="code_links_img"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="project_container ">
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
              In my first portofolio project I learned how to master <b>HTML</b>
              ,<b>CSS</b> and <b>Javasript</b>.Throughout the development
              process, I have encountered various challenges and learned how to
              troubleshoot and debug issues in my code.
            </p>
            <div className="project_links">
              <div className="project_github">
                <Link
                  to={"https://github.com/davidstanciu11/firstPortofolio"}
                  className="links_to"
                >
                  Code{" "}
                </Link>
                <Link to={"https://github.com/davidstanciu11/firstPortofolio"}>
                  <img src={github} alt="github" className="code_links_img" />
                </Link>
              </div>
              <div className="project_live">
                <Link
                  to={"https://firstportofolio-davidst.netlify.app"}
                  className="links_to"
                >
                  Live Demo
                </Link>
                <Link to={"https://firstportofolio-davidst.netlify.app"}>
                  <img
                    src={externalLink}
                    alt="externaLink"
                    className="code_links_img"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Projects;
