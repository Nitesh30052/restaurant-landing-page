import "./index.css";

const Footer = () => {
  return (
    <footer className="footer-section" id="contact">

      <div className="contact-info">
        <h4>CONTACT US</h4>

        <p>0151 245 1500</p>

        <p>INFO@TIFFINBOX.CO.UK</p>

        <p>ALLERTON RD, LIVERPOOL L25 7RE</p>
      </div>

      <div className="footer-links">
        <a href="#menu">MENU</a>
        <span>|</span>

        <a href="#menu">ORDER ONLINE</a>
        <span>|</span>

        <a href="#contact">BOOK A TABLE</a>
        <span>|</span>

        <a href="#about">ABOUT US</a>
        <span>|</span>

        <a href="#contact">CONTACT US</a>
      </div>

    </footer>
  );
};

export default Footer;