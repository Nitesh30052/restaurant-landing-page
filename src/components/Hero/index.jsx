import { useState } from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import "./index.css";

const Hero = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <section className="hero" id="home">
      {/* Top */}
      <div className="hero-top">
        <div
          className="menu-circle"
          onClick={() => setShowMenu(!showMenu)}
        >
          <span></span>
          <span></span>
        </div>

        <button
          className="view-menu-btn"
          onClick={() =>
            document
              .getElementById("menu")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          View Menu →
        </button>
      </div>

      {/* Mobile/Desktop Menu */}
      {showMenu && (
        <div className="mobile-menu">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#chef">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      )}

      {/* Hero Content */}
      <div className="hero-content">
        <div className="hero-left">
          <img
            src="https://res.cloudinary.com/dsfheyxan/image/upload/v1781599369/Group_50_futae0.png"
            alt="Authentic South Indian Cuisine"
            className="hero-title-image"
          />

          <button
            className="order-btn"
            onClick={() =>
              document
                .getElementById("menu")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Order Now →
          </button>
        </div>

        <div className="hero-right">
          <img
            src="https://res.cloudinary.com/dsfheyxan/image/upload/v1781598572/2147894625_1_wskxh5.png"
            alt="Food"
            className="food-image"
          />

          <div className="social-icons">
            <a href="/">
              <FaInstagram />
            </a>

            <a href="/">
              <FaFacebookF />
            </a>

            <a href="/">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;