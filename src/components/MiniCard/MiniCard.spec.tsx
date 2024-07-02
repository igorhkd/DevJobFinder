import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { MiniCard } from ".";

describe("MiniCard Component", () => {
  const props = {
    title: "Test Title",
    subtitle: "Test Subtitle",
    linkUrl: "/test-url",
    badges: [
      { id: 1, name: "Badge 1", color: "ff0000" },
      { id: 2, name: "Badge 2", color: "00ff00" },
    ],
  };

  it("should render title and subtitle", () => {
    const { getByText } = render(
      <Router>
        <MiniCard {...props} />
      </Router>
    );

    expect(getByText(props.title)).toBeInTheDocument();
    expect(getByText(props.subtitle!)).toBeInTheDocument();
  });

  it("should render badges", () => {
    const { getByText } = render(
      <Router>
        <MiniCard {...props} />
      </Router>
    );

    props.badges?.forEach((badge) => {
      expect(getByText(badge.name)).toBeInTheDocument();
    });
  });

  it("should render link with correct URL", () => {
    const { container } = render(
      <Router>
        <MiniCard {...props} />
      </Router>
    );

    const linkElement = container.querySelector("a");
    expect(linkElement).toHaveAttribute("href", props.linkUrl);
  });

  it("should not render title and subtitle", () => {
    const { queryByText } = render(
      <Router>
        <MiniCard {...props} title="" subtitle="" />
      </Router>
    );

    expect(queryByText(props.title)).toBeNull();
    expect(queryByText(props.subtitle!)).toBeNull();
  });
});
