import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./public/images/logo.png";
import meghanaFoods from "./public/images/meghanafoods.avif";
import "./public/css/style.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul className="items">
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Button = ({ children, onClick, style }) => {
  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
};

const swiggy = {
  id: "10575",
  name: "Pizza Hut",
  cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  locality: "Richmond Town",
  areaName: "Shanti Nagar",
  costForTwo: "₹600 for two",
  cuisines: ["Pizzas"],
  avgRating: 4.2,
  parentId: "721",
  avgRatingString: "4.2",
  totalRatingsString: "5K+",
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input placeholder="search" />
        <Button style={{ color: "black" }}>search</Button>
      </div>
      <div className="restro-container">
        <RestroCards swiggyobj={swiggy} />
        <RestroCards swiggyobj={swiggy} />
      </div>
    </div>
  );
};

const RestroCards = ({ swiggyobj }) => {
  return (
    <div className="res-card">
      <img className="meghanafood" src={meghanaFoods} />
      <h3>{swiggyobj.name}</h3>
      <h3>{swiggyobj.locality}</h3>
      <h4>{swiggyobj.avgRating}</h4>
      <h4>36 Minutes</h4>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
