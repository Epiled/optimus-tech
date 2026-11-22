import { render, screen, within } from "@testing-library/react";
import PublicLayout from "./PublicLayout";
import { MemoryRouter } from "react-router";

describe("PublicLayout", () => {
  it("should render the menu", () => {
    render(
      <MemoryRouter>
        <PublicLayout />
      </MemoryRouter>,
    );

    const menu = screen.getByRole("navigation");

    expect(menu).toBeInTheDocument();
  });

  it("should render the newsletter form", () => {
    render(
      <MemoryRouter>
        <PublicLayout />
      </MemoryRouter>,
    );

    const newsletter = screen.getByRole("complementary");

    const newsLetterTitle = within(newsletter).getByRole("heading", {
      name: "Acompanhe as nossas oportunidades",
    });

    const button = within(newsletter).getByRole("button", {
      name: "Cadastrar",
    });

    expect(newsLetterTitle).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
