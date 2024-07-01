import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Header } from ".";

describe("Header Component", () => {
  it("renders Header component with default title", () => {
    const { container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const linkElement = container.querySelector("a");
    expect(linkElement).toBeInTheDocument();
  });

  it("renders Header component with given title", () => {
    const title = "Test Title";
    const { getByText } = render(
      <BrowserRouter>
        <Header title={title} />
      </BrowserRouter>
    );

    const linkElement = getByText(title);
    expect(linkElement).toBeInTheDocument();
  });
});
