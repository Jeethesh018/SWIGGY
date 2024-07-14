import { Link } from "react-router-dom";
import logo from "../../public/images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul className="items">
          <Link to="/" className="link">
            Home
          </Link>
          <Link className="link" to="/about">
            About US
          </Link>
          <Link className="link" to="/contact">
            Contact us
          </Link>
          <Link to="cart" className="link">
            Cart
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
