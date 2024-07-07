import React from "react";
import ReactDOM from "react-dom/client";

const Header = ({ children }) => <header>{children}</header>;
const Footer = () => <footer>copyright 2024</footer>;

const ParentComponet = () => (
  <div>
    <Header>parent component Header</Header>
    <h1>ParentComponet</h1>
    {Footer()}
  </div>
);
const HeadingComponent = () => {
  function hello() {
    console.log("hello");
  }
  return (
    <>
      <Header>Namaste React</Header>
      <h1 className="helloS" style={{ color: "red" }}>
        Namaste
      </h1>
      <Footer />
      {Footer()}
      <Footer></Footer>

      {ParentComponet()}
      <ParentComponet />
      <ParentComponet></ParentComponet>
    </>
  );
};

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(HeadingComponent());
