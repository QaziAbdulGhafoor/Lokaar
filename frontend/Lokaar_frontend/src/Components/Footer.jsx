import footerLogo from "../assets/footerLogo.png";
import "../App.css";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer flex flex-wrap justify-between h-72 mt-94 text-white">
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
        <a href="">qzgh986@gmail.com</a>
        <p>+92 318 8913035</p>
        <div className="links flex gap-2">
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
