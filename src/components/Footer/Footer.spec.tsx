// Footer.test.tsx
import { render } from "@testing-library/react";
import { Footer } from ".";

describe("Footer Component", () => {
  it("should render with the default message", () => {
    const { container } = render(<Footer />);
    const paragraphElement = container.querySelector("p");
    expect(paragraphElement).toBeInTheDocument();
  });

  it("should render with a given message", () => {
    const message = "Message";
    const { getByText } = render(<Footer message={message} />);
    expect(getByText(message)).toBeInTheDocument();
  });
});
