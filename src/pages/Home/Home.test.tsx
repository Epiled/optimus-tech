import { render, screen } from "@testing-library/react";
import { Home } from "./Home";

describe("Home", () => {
  it("should render about section", () => {
    render(<Home />);

    const about = screen.getByRole("heading", {
      name: "Por que somos diferentes?",
    });

    expect(about).toBeInTheDocument();
  });

  it("should render jobs section", () => {
    render(<Home />);

    const jobs = screen.getByRole("heading", {
      name: "Estamos procurando por talentos",
    });

    expect(jobs).toBeInTheDocument();
  });

  it("should render the testimonials section", () => {
    render(<Home />);

    const testimonials = screen.getByRole("heading", {
      name: "OptimusTech se importa com a saúde dos seus colaboradores e sempre procura nos dar todo tipo de auxílio possível.",
    });

    expect(testimonials).toBeInTheDocument();
  });
});
