import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "./input";

describe("Input component", () => {
  it("renders with default props", () => {
    render(<Input placeholder="Enter email" />);
    const input = screen.getByPlaceholderText("Enter email");

    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("bg-lavender");
    expect(input).toHaveClass("rounded-sm");
    expect(input).toHaveAttribute("type", "text"); // default HTML input type
  });

  it("renders with a specific type", () => {
    render(<Input type="email" placeholder="Your email" />);
    const input = screen.getByPlaceholderText("Your email");

    expect(input).toHaveAttribute("type", "email");
  });

  it("applies additional className", () => {
    render(<Input className="custom-class" placeholder="Custom Input" />);
    const input = screen.getByPlaceholderText("Custom Input");

    expect(input).toHaveClass("custom-class");
  });

  it("supports typing into the input", () => {
    render(<Input placeholder="Type here" />);
    const input = screen.getByPlaceholderText("Type here") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "hello" } });
    expect(input.value).toBe("hello");
  });
});
