import "./index.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container navbar">
        <h2 className="logo">Tiffin Box</h2>

        <ul className="nav-links">
          <li>Home</li>
          <li>Menu</li>
          <li>About</li>
          <li>Experience</li>
          <li>Contact</li>
        </ul>

        <button className="menu-btn">
          View Menu
        </button>
      </div>
    </header>
  );
};

export default Header;