import footerLogo from "../../assets/footerLogo.png";
import "../../App.css";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer flex flex-wrap justify-between h-80 mt-86 text-white">
      <div className="headline nav-box ">
        <img src={footerLogo} alt="" className="h-12" />
        <p className="text-white mt-4">
          Lokaar is your trusted marketplace <br /> for booking local
          professionals <br /> quickly and easily
        </p>
      </div>
      <div className="service nav-box ">
        <h2 className="text-2xl  font-medium">Services</h2>
        <a href="">Electrician</a>
        <a href="">Plumber</a>
        <a href="">Painter</a>
        <a href="">Carpenter</a>
        <a href="">Tutor</a>
      </div>
      <div className="company nav-box">
        <h2 className="text-2xl font-medium">Company</h2>
        <a href="">About Us</a>
        <a href="">How It Works</a>
        <a href="">Careers</a>
        <a href="">Blog</a>
        <a href="">Contact Us</a>
      </div>
      <div className="contact nav-box ">
        <h2 className="text-2xl font-medium">Contact</h2>
        <a href="">abc@gmail.com</a>
        <a href="">+92 300 0000000</a>
        <div className="links flex gap-2">
          <a href="">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="">
            {" "}
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </div>
      <p className="seprator"></p>
      <p className="copy">
        Built By <b>Qazi Abdul Ghafoor</b>
      </p>
    </div>
  );
};

export default Footer;
