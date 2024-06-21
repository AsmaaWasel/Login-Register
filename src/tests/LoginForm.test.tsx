import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginForm from "../ui/LoginForm";

test("renders LoginForm and performs user interaction", () => {
  render(<LoginForm />);

  // Check if email input is rendered
  const emailInput = screen.getByLabelText(/email/i);
  expect(emailInput).toBeInTheDocument();

  // Check if password input is rendered
  const passwordInput = screen.getByLabelText(/password/i);
  expect(passwordInput).toBeInTheDocument();

  // Check if submit button is rendered
  const submitButton = screen.getByRole("button", { name: /submit/i });
  expect(submitButton).toBeInTheDocument();

  // Simulate user interaction
  fireEvent.change(emailInput, { target: { value: "test@example.com" } });
  fireEvent.change(passwordInput, { target: { value: "password123" } });
  fireEvent.click(submitButton);
});
