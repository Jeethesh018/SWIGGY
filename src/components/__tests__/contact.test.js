import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("load contact page", () => {
  render(<Contact />);

  let heading = screen.getByRole("button");
  expect(heading).toBeInTheDocument();
});

test("load contact page", () => {
  render(<Contact />);

  let heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("load contact page", () => {
  render(<Contact />);

  let input = screen.getAllByRole("textbox");
  expect(input[0]).toBeInTheDocument();
});
