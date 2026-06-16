import "./index.css";

const BookTable = () => {
  return (
    <section className="book-table-section" id="book-table">
      <div className="book-table-container">

        <div className="book-table-image-container">
          <img
            src="https://res.cloudinary.com/dsfheyxan/image/upload/v1781615610/4454cz_1_t28wfo.png"
            alt="Book Table"
            className="book-table-image"
          />
        </div>

        <div className="book-table-content">
          <p className="book-table-tag">
            BOOK TABLE
          </p>

          <h2 className="book-table-title">
            PLANNING A
            <br />
            MEAL AT THE
            <br />
            TIFFIN BOX?
          </h2>

          <p className="book-table-description">
            Craving your favorite South Indian dishes?
            Enjoy the rich, authentic flavors of The Tiffin Box
            from the comfort of your home. Order online for a quick
            and easy delivery straight to your doorstep. Our dishes
            are prepared fresh and delivered fast, ensuring a delicious
            experience every time.
          </p>

          <button
  className="book-table-btn"
  onClick={() =>
    document
      .getElementById("community")
      .scrollIntoView({ behavior: "smooth" })
  }
>
  Book Table →
</button>
        </div>

      </div>
    </section>
  );
};

export default BookTable;