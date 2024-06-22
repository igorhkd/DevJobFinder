import { render, screen } from "@testing-library/react";
import { Footer } from ".";

describe("jest", () => {
  it("dwadwad", () => {
    render(<Footer message="teste" />);

    expect(screen.getByText(`teste2`)).toBeInTheDocument();
  });
});
