import "./Footer.style.css"
import EmailIcon from "../../assets/email_icon.png";
import LinkedinContact from "../../assets/linkedin_contact.png";
import LocationIcon from "../../assets/location.png";




function Footer() {
    return(
        <>
        <footer className="footer_projects">
            <div className="footer_header">
                <p className="footer_title">CONTACT</p>
                <h2 className="footer_desc">Here are some ways to contact me 👇</h2>
            </div>
            <div className="footer_contact">
                <div className="email">
                    <a href="mailto:stanciudavid169@gmail.com"><img src={EmailIcon} alt="emailicon" className="contact_icons"/></a>
                    <div id="contact_flex_desc"><h2 className="contact_name">Email</h2>
                    <a href="mailto:stanciudavid169@gmail.com" className="email_name">stanciudavid169@gmail.com</a></div>
                </div>
                <div className="email">
                    <a href="https://www.linkedin.com/in/david-stanciu-ab9374257/"><img src={LinkedinContact} alt="linkedincotacticon" className="contact_icons"/></a>
                    <div id="contact_flex_desc"><h2 className="contact_name">Linkedin</h2>
                    <a href="https://www.linkedin.com/in/david-stanciu-ab9374257/" className="email_name">Stanciu David</a></div>
                </div>
                <div className="email">
                    <img src={LocationIcon} alt="locationicon" className="contact_icons"/>
                    <div id="contact_flex_desc"><h2 className="contact_name">Location</h2>
                    <p className="email_name">Bucharest, Romania</p></div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;