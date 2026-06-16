import "./index.css";

const Newsletter = () => {
  return (
    <section className="newsletter-section">
        
      <img
        src="https://res.cloudinary.com/dsfheyxan/image/upload/v1781616639/Group_33_mg77rt.png"
        alt="Tiffin Box"
        className="newsletter-logo"
      />

      <h2 className="newsletter-title">
        SUBSCRIBE TO
        <br />
        OUR NEWSLETTER
      </h2>

      <div className="newsletter-form">
        <input
          type="email"
          placeholder="EMAIL ADDRESS"
        />

        <button>
          Subscribe →
        </button>
      </div>
    </section>
  );
};

export default Newsletter;