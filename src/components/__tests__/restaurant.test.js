import { render, screen } from "@testing-library/react";
import RestrauntMenu from "../RestrauntMenu";
import mockData from "../../utils/mockData";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(mockData);
    },
  });
});

test("restaurant page", () => {
  render(<RestrauntMenu />);

  let restaurant = screen.getByText("Pipabu");
  expect(restaurant).toBeInTheDocument();
});
