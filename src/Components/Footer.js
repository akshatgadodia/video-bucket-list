import "./Stylesheets/Footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CallIcon from "@mui/icons-material/Call";
const Footer = () =>
  <div className="foot">
    <p id="footer-developed">Developed by Akshat Gadodia</p>
    <div className="footer-icon-container" id="footer-icons">
      <a
        href="https://www.linkedin.com/in/akshat-gadodia"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon style={{ color: "black", fontSize: "20px" }} />{" "}
      </a>
      <a
        href="https://www.github.com/akshatgadodia/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon style={{ color: "black", fontSize: "20px" }} />{" "}
      </a>
      <a
        href="https://www.instagram.com/akshat_gadodia/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon style={{ color: "black", fontSize: "20px" }} />{" "}
      </a>
      <a
        href="https://www.facebook.com/akshat.gadodia"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon style={{ color: "black", fontSize: "20px" }} />
      </a>
      <a href="mailto:akshatgadodia@gmail.com">
        <AlternateEmailIcon style={{ color: "black", fontSize: "20px" }} />{" "}
      </a>
      <a href="tel:+917737152961">
        <CallIcon style={{ color: "black", fontSize: "20px" }} />{" "}
      </a>
    </div>
    <p id="footer-copyright">
      © {new Date().getFullYear()} VIDEO BUCKET LIST.
    </p>
  </div>;
export default Footer;
