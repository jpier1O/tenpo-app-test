import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./button";

describe("Button component", () => {
  it("renders with default variant and size", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-[#03ff94]");
    expect(button).toHaveClass("text-black");
    expect(button).toHaveClass("rounded-sm");
    expect(button).toHaveClass("px-3");
  });

  it("renders with outline variant", () => {
    render(<Button variant="outline">Outline</Button>);
    const button = screen.getByRole("button", { name: /outline/i });

    expect(button).toHaveClass("border");
    expect(button).toHaveClass("text-[#19d3c3]");
  });

  it("renders with big size", () => {
    render(<Button size="big">Big Button</Button>);
    const button = screen.getByRole("button", { name: /big button/i });

    expect(button).toHaveClass("text-[30px]");
    expect(button).toHaveClass("px-4");
  });

  it("triggers onClick event", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    const button = screen.getByRole("button", { name: /click/i });

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders as child when asChild=true", () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    );
    const link = screen.getByRole("link", { name: /link button/i });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/test");
  });
});
