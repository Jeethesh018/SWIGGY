import React from "react";
import ReactDOM from "react-dom/client";

let headiing = (
  <>
    <h1 className="helloS" style={{ color: "red" }}>
      hello
    </h1>
    <h1 className="helloS" style={{ color: "red" }}>
      hello
    </h1>
  </>
);
console.log(headiing);
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headiing);
