import { Link } from "react-router-dom";
import logo from "../../public/images/logo.png";
import Home from "../../public/images/Home.png";
import About from "../../public/images/About.png";
import contact from "../../public/images/contact.jpg";
import cart from "../../public/images/cart.png";

const Header = () => {
  return (
    <div className="flex justify-between shadow-2xl bg-stone-200">
      <div className="logo-container">
        <img className="w-28 p-0 ml-5" src={logo} />
      </div>
      <div className="">
        <ul className="flex">
          <Link to="/" className="p-10 flex font-bold">
            Home <img className="w-5 h-5 pl-1" src={Home} />
          </Link>
          <Link className="p-10 flex font-bold" to="/about">
            About US
            <img className="w-5 h-5 pl-1" src={About} />
          </Link>
          <Link className="p-10 flex font-bold" to="/contact">
            Contact Us
            <img className="w-5 h-5 pl-1" src={contact} />
          </Link>
          <Link to="cart" className="p-10 flex font-bold">
            Cart
            <img className="w-5 h-5 pl-1" src={cart} />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
