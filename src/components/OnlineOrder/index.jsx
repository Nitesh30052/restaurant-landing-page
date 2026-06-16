import "./index.css";

const OnlineOrder = () => {
  return (
    <section className="online-order-section" id="order">
      <div className="online-order-container">
        
        <div className="online-order-left">
          <p className="section-tag">
            ONLINE ORDER
          </p>

          <h2 className="online-order-title">
            FRESH SOUTH
            <br />
            INDIAN FLAVORS
            <br />
            DELIVERED!
          </h2>

          <p className="online-order-description">
            Craving your favorite South Indian dishes?
            Enjoy the rich, authentic flavors of The Tiffin Box
            from the comfort of your home. Order online for
            quick and easy delivery straight to your doorstep.
            Our dishes are prepared fresh and delivered fast,
            ensuring a delicious experience every time.
          </p>

          <button className="online-order-btn">
            Order Online →
          </button>
        </div>

        <div className="online-order-right">
          <img
            src="https://res.cloudinary.com/dsfheyxan/image/upload/v1781614987/image_13_aqtlwg.png"
            alt="South Indian Bowl"
            className="online-order-image"
          />
        </div>

      </div>
    </section>
  );
};

export default OnlineOrder;