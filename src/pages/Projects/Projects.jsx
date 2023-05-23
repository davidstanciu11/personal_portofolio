import "./Projects.style.css";
import { Link } from "react-router-dom";
import slackDesign from "../../assets/slackdesign.png";
import geolocationapp from "../../assets/SeeYa.png";
import outstock from "../../assets/outstock.png";
import bankapp from "../../assets/bankapp.png";
import github from "../../assets/github.png";
import externalLink from "../../assets/external_link.png";
import Footer from "../../components/Footer/Footer";
import EasyMindImg from "../../assets/easyMind.png";

function Projects() {
  return (
    <>
      <section className="projects" id="projects">
        <div
          className="projects_header"
          data-aos="fade-down"
          data-aos-delay="500"
        >
          <p className="projects_header_title">PORTOFOLIO</p>
          <h3 className="projects_header_desc">
            A brief look on my journey working on Projects
          </h3>
        </div>{" "}
        <div
          className="project_container"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          <div className="project_image">
            <Link to={"https://easymind-react.netlify.app"}>
              <img
                src={EasyMindImg}
                alt="projectPhoto"
                className="project_img"
              />
            </Link>
          </div>
          <div className="project_desc">
            <h3 className="project_title">EasyMind 🧘</h3>
            <p className="project_par">
              EasyMind 🧘 is a soothing and immersive web application that
              offers a serene environment for meditation and mindfulness
              practices. Developed using <b>React</b>, a popular JavaScript library,
              and enhanced with <b>Tailwind CSS</b>, a utility-first CSS framework.
            </p>
            <div className="project_links">
              <div className="project_github">
                <Link
                  to={"https://github.com/davidstanciu11/meditationApp_project"}
                  className="links_to"
                >
                  Code{" "}
                </Link>
                <Link to={"https://github.com/davidstanciu11/meditationApp_project"}>
                  <img src={github} alt="github" className="code_links_img" />
                </Link>
              </div>
              <div className="project_live">
                <Link
                  to={"https://easymind-react.netlify.app"}
                  className="links_to"
                >
                  Live Demo
                </Link>
                <Link to={"https://easymind-react.netlify.app"}>
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
        <div
          className="project_container"
          data-aos="fade-right"
          data-aos-delay="500"
        >
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
        <div
          className="project_container project_container_reverse"
          data-aos="fade-right"
          data-aos-delay="500"
        >
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
        <div
          className="project_container"
          data-aos="fade-right"
          data-aos-delay="500"
        >
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
        <div
          className="project_container project_container_reverse"
          data-aos="fade-right"
          data-aos-delay="500"
        >
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
      </section>
      <Footer />
    </>
  );
}

export default Projects;
