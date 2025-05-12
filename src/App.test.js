import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/I was changed at the feature branch/i);
  expect(linkElement).toBeInTheDocument();
});
