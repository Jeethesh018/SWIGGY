import { Link } from "react-router-dom";
// // import logo from "../../public/images/logo.png";
// import Home from "../../public/images/Home.png";
// import About from "../../public/images/About.png";
// import contact from "../../public/images/contact.jpg";
// import cart from "../../public/images/cart.png";
import { useSelector } from "react-redux";

const Header = () => {
  const cartitems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between shadow-2xl bg-stone-200">
      <div className="logo-container">
        <img className="w-[140px] h-[90px] pt-2 " />
      </div>
      <div className="">
        <ul className="flex">
          <Link to="/" className="p-10 flex font-bold">
            Home <img className="w-5 h-5 pl-1" />
          </Link>
          <Link className="p-10 flex font-bold" to="/about">
            About US
            <img className="w-5 h-5 pl-1" />
          </Link>
          <Link className="p-10 flex font-bold" to="/contact">
            Contact Us
            <img className="w-5 h-5 pl-1" />
          </Link>
          <Link to="cart" className="p-10 flex font-bold">
            Cart {cartitems.length > 0 ? cartitems.length : ""}
            <img className="w-5 h-5 pl-1" />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
