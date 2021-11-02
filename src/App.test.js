import { render, screen } from "@testing-library/react";
import App from "./App";

// testing a component app
describe("test All Component", () => {
  test("should render react link", () => {
    // where component want to render
    render(<App />);
    // find a element if you want to render
    const linkElement = screen.getByText(/Learn React/i);
    expect(linkElement).toBeInTheDocument();
  });
});
