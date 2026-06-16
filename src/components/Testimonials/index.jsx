import "./index.css";

const reviews = [
  {
    id: 1,
    name: "Anna Mathew",
    review:
      "Bavette delivers an unforgettable steak experience! The food, service, and ambiance are second to none.",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "Gerrin Tom",
    review:
      "Bavette delivers an unforgettable steak experience! The food, service, and ambiance are second to none.",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "Mery Elza",
    review:
      "Bavette delivers an unforgettable steak experience! The food, service, and ambiance are second to none.",
    image: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: 4,
    name: "Mery Elza",
    review:
      "Bavette delivers an unforgettable steak experience! The food, service, and ambiance are second to none.",
    image: "https://i.pravatar.cc/100?img=4",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="reviews">
      <p className="testimonial-tag">TESTIMONIAL</p>

      <h2 className="testimonial-title">
        WHAT OUR
        <br />
        CUSTOMERS SAYS
      </h2>

      <div className="testimonial-grid">
        {reviews.map((review) => (
          <div key={review.id} className="testimonial-card">
            <div className="stars">★★★★★</div>

            <p className="review-text">
              {review.review}
            </p>

            <div className="review-user">
              <img
                src={review.image}
                alt={review.name}
                className="review-avatar"
              />

              <div>
                <h4>{review.name}</h4>
                <span>one day ago</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;