import footerLogo from "../assets/footerLogo.png";
import "../App.css";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer flex  h-60 text-white">
      <div className="headline bg-red-800 ">
        <img src={footerLogo} alt="" className="h-10" />
        <p className="text-white">
          Lokaar is your trusted marketplace <br /> for booking local
          professionals <br /> quickly and easily
        </p>
      </div>
      <div className="service flex flex-col bg-green-800">
        <h2 className="text-2xl font-medium">Services</h2>
        <a href="">Electrician</a>
        <a href="">Plumber</a>
        <a href="">Painter</a>
        <a href="">Carpenter</a>
        <a href="">Tutor</a>
      </div>
      <div className="company flex flex-col bg-blue-800">
        <h2>Company</h2>
        <a href="">About Us</a>
        <a href="">How It Works</a>
        <a href="">Careers</a>
        <a href="">Blog</a>
        <a href="">Contact Us</a>
      </div>
      <div className="contact bg-yellow-800">
        <h2>Contact</h2>
        <a href="">qzgh986@gmail.com</a>
        <p>+92 318 8913035</p>

        <div className="links">
          <i class="fa-brands fa-linkedin-in"></i>
          <i class="fa-brands fa-github"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-x-twitter"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
