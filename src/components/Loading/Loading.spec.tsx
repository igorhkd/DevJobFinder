// Loading.test.tsx
import { render } from "@testing-library/react";
import { Loading } from ".";

describe("Loading Component", () => {
  it("should render the loading spinner", () => {
    const { container } = render(<Loading />);
    const spinnerElement = container.querySelector(
      "div.w-16.h-16.border-4.border-blue-500.border-dotted.rounded-full.animate-spin"
    );
    expect(spinnerElement).toBeInTheDocument();
  });
});
