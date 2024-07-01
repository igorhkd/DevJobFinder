import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Card } from ".";

describe("Card Component", () => {
  const props = {
    imageUrl: "https://example.com/image.jpg",
    title: "Test Title",
    description: "Test Description",
    redirectUrl: "/test-url",
  };

  it("should render the Card component with given props", () => {
    const { getByText, getByAltText, getByRole } = render(
      <Router>
        <Card {...props} />
      </Router>
    );

    const imgElement = getByAltText(props.title);
    expect(imgElement).toHaveAttribute("src", props.imageUrl);

    expect(getByText(props.title)).toBeInTheDocument();
    expect(getByText(props.description)).toBeInTheDocument();

    const linkElement = getByRole("link");
    expect(linkElement).toHaveAttribute("href", props.redirectUrl);
  });
});
