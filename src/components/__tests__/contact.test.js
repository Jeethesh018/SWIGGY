import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("load contact page", () => {
  render(<Contact />);

  let heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
