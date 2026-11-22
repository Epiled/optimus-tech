import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Menu from ".";

describe("Menu", () => {
  it("should render the menu", () => {
    render(
      <MemoryRouter>
        <Menu />
      </MemoryRouter>,
    );

    const menu = screen.getByRole("navigation");

    expect(menu).toBeInTheDocument();
  });
});
