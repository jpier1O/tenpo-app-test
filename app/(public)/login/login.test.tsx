import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./page";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

jest.mock("lucide-react");

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("@/context/AuthContext", () => ({
  useAuth: jest.fn(),
}));

describe("Login page", () => {
  const mockReplace = jest.fn();
  const mockLogin = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({ replace: mockReplace });
  });

  it("renders login form fields", () => {
    (useAuth as jest.Mock).mockReturnValue({
      token: null,
      login: mockLogin,
      loading: false,
    });

    render(<Login />);

    expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /log in/i })).toBeInTheDocument();
  });

  it("shows error if email or password are empty", () => {
    (useAuth as jest.Mock).mockReturnValue({
      token: null,
      login: mockLogin,
      loading: false,
    });

    render(<Login />);
    fireEvent.click(screen.getByRole("button", { name: /log in/i }));

    expect(screen.getByText(/por favor ingresa email y contraseña/i)).toBeInTheDocument();
    expect(mockLogin).not.toHaveBeenCalled();
  });

  it("calls login when both fields are filled", () => {
    (useAuth as jest.Mock).mockReturnValue({
      token: null,
      login: mockLogin,
      loading: false,
    });

    render(<Login />);
    fireEvent.change(screen.getByPlaceholderText(/e-mail/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: "123456" },
    });
    fireEvent.click(screen.getByRole("button", { name: /log in/i }));

    expect(mockLogin).toHaveBeenCalledWith("test@example.com", "123456");
  });

  it("redirects to /home if user is logged in", () => {
    (useAuth as jest.Mock).mockReturnValue({
      token: "fake-token",
      login: mockLogin,
      loading: false,
    });

    render(<Login />);

    expect(mockReplace).toHaveBeenCalledWith("/home");
  });
});
