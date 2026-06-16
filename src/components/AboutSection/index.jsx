import "./index.css";

const AboutSection = () => {
  return (
   <section className="about-section" id="about">
      <div className="about-container">

        <div className="about-image-container">
          <img
            src="https://res.cloudinary.com/dsfheyxan/image/upload/v1781598547/image_4_duw43k.png"
            alt="Team"
            className="about-image"
          />
        </div>

        <div className="about-content">

          <img
            src="https://res.cloudinary.com/dsfheyxan/image/upload/v1781601142/Experience_Authentic_South_Indian_Flavors_at_The_Tiffin_Box_eckz8g.png"
            alt="Experience"
            className="about-text-image"
          />

          <button className="know-more-btn">
            Know More →
          </button>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;