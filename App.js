let div = React.createElement("div", { id: "maindiv" }, [
  React.createElement("div", { id: "childiv" }, [
    React.createElement("h1", {}, "hello"),
    React.createElement("h1", {}, "hello h2"),
  ]),
  React.createElement("div", { id: "childiv2" }, [
    React.createElement("h1", {}, "hello"),
    React.createElement("h1", {}, "hello h4"),
  ]),
]);

let heading = React.createElement(
  "h1",
  { style: { color: "red" } },
  "hello world"
);
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
