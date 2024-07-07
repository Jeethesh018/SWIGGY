import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import logo from "./public/images/logo.png";
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

const RestroCards = () => {
  return (
    <div className="res-card">
      <h3>Meghana Foods</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input placeholder="search" />
        <Button style={{ color: "black" }}>search</Button>
      </div>
      <div className="restro-container">
        <RestroCards />
      </div>
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
