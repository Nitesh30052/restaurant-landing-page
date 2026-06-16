import "./index.css";

const Chef = () => {
  return (
   <section className="chef-section" id="chef">
      <div className="chef-header">
        <p className="chef-tag">CHEF</p>

        <h2 className="chef-title">
          OUR BRAND CHEF
        </h2>
      </div>

      <div className="chef-container">
        <div className="chef-image-container">
          <img
            src="https://res.cloudinary.com/dsfheyxan/image/upload/v1781615868/447811980_18437712034009784_105850652782027639_nd_1_arjchw.png"
            alt="Chef Jomon"
            className="chef-image"
          />
        </div>

        <div className="chef-content">
          <h3 className="chef-name">
            CHEF JOMON
          </h3>

          <p className="chef-role">
            senior chef at tiffin box
          </p>

          <p className="chef-description">
            Craving your favorite South Indian dishes?
            Enjoy the rich, authentic flavors of The Tiffin Box
            from the comfort of your home. Order online for a quick
            and easy delivery straight to your doorstep. Our dishes
            are prepared fresh and delivered fast, ensuring a
            delightful dining experience every time.
          </p>

          <p className="chef-description">
            Craving your favorite South Indian dishes?
            Enjoy the rich, authentic flavors of The Tiffin Box
            from the comfort of your home. Order online for a quick
            and easy delivery straight to your doorstep.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Chef;