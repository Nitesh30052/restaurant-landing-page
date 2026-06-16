import "./index.css";

const communityImages = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dsfheyxan/image/upload/v1781621305/image_ct4lb7.png",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dsfheyxan/image/upload/v1781621254/image_1_qlpxic.png",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dsfheyxan/image/upload/v1781621254/image_2_gn0tmf.png",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dsfheyxan/image/upload/v1781621251/image_3_klnqxr.png",
  },
];

const Community = () => {
  return (
    <section className="community-section" id="community">
      <p className="community-tag">
        INSTAGRAM
      </p>

      <h2 className="community-title">
        JOIN OUR
        <br />
        COMMUNITY
      </h2>

      <div className="community-gallery">
        {communityImages.map((item) => (
          <div
            key={item.id}
            className="community-card"
          >
            <img
              src={item.image}
              alt="Community"
              className="community-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Community;