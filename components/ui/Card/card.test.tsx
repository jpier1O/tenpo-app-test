import { render, screen } from "@testing-library/react";
import { Card } from "./card";

describe("Card component", () => {
  it("renders children content", () => {
    render(<Card>Hola Tenpo</Card>);
    expect(screen.getByText("Hola Tenpo")).toBeInTheDocument();
  });

  it("applies default classes", () => {
    render(<Card>Test Card</Card>);
    const card = screen.getByText("Test Card");

    expect(card).toHaveClass("rounded-2xl");
    expect(card).toHaveClass("bg-card");
    expect(card).toHaveClass("text-card-foreground");
    expect(card).toHaveClass("shadow-[0px_2px_2px_0px_#00000059]");
  });

  it("applies additional className prop", () => {
    render(<Card className="custom-class">Custom Card</Card>);
    const card = screen.getByText("Custom Card");

    expect(card).toHaveClass("custom-class");
  });
});
