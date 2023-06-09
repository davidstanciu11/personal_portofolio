import "./About.style.css";
import LaptopImg from "../../assets/laptop_work.jpg";
import Icon from "../../assets/developer_icon.svg"
import CV from "../../../Stanciu-David-CV.pdf";
import bookIcon from "../../assets/book_icon.png";



function About() {
  return (
    <>
      <section className="about" id="about" data-aos="fade-down" data-aos-delay="500">
          <div className="about_img">
            <img src={LaptopImg} alt="laptopImg" className="laptop_img" />
            <span className="circle_dev"><img src={Icon} alt="icon" className="developer_icon" /></span>
            <img src={bookIcon} alt="bookIcon" className="book_icon learning_icon_circle" />
          </div>
          <div className="about_desc">
            <p className="about_par_title">ABOUT ME</p>
            <h2 className="about_desc_title">
              Emerging Talent: Unleashing Potential in a Junior Developer&#39;s
              Journey 📈
            </h2>
            <p className="about_par">
              Hello! I&#39;m David, a junior front-end web developer with a
              passion for crafting engaging and user-friendly digital
              experiences. My journey into web development started with a
              genuine curiosity for coding and a desire to bring ideas to life
              on the internet. I am continuously expanding my knowledge and
              staying up-to-date with the latest trends and best practices in
              the industry. I enjoy taking online courses, attending web
              development conferences, and exploring new technologies to enhance
              my skills.
            </p>
            <a href={CV} download={CV}><button className="btn_dark">Download Resume</button></a>
          </div>
      </section>
    </>
  );
}

export default About;
