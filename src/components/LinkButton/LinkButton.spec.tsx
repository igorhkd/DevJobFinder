import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { LinkButton } from ".";

describe("LinkButton Component", () => {
  it("should render with the correct children", () => {
    const { getByText } = render(
      <BrowserRouter>
        <LinkButton to="/">Button</LinkButton>
      </BrowserRouter>
    );
    expect(getByText("Button")).toBeInTheDocument();
  });

  it("should render with additional props", () => {
    const { getByText } = render(
      <BrowserRouter>
        <LinkButton to="/">Button</LinkButton>
      </BrowserRouter>
    );
    const linkElement = getByText("Button");
    expect(linkElement.closest("a")).toHaveAttribute("href", "/");
  });
});
