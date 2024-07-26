import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/Redux/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("header text cases", () => {
  it("should load with login button", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    let img = screen.getAllByRole("link", { name: "Home" });
    expect(img[0]).toBeInTheDocument();
  });

  it("check cart values", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    let cart = screen.getByText("Cart");
    console.log(cart);
  });
});
