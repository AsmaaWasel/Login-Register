import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import RegisterForm from "../ui/RegisterForm";

test("renders RegisterForm and performs user interaction", () => {
  render(<RegisterForm />);

  const usernameInput = screen.getByLabelText(/username/i);
  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const submitButton = screen.getByRole("button", { name: /submit/i });

  expect(usernameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();

  fireEvent.change(usernameInput, { target: { value: "testuser" } });
  fireEvent.change(emailInput, { target: { value: "test@example.com" } });
  fireEvent.change(passwordInput, { target: { value: "password123" } });
  fireEvent.click(submitButton);

  // Add assertions to check form submission and validation behavior
});
