import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FormWrapper from "../components/FormWrapper";

test("renders FormWrapper with title and children", () => {
  render(
    <FormWrapper title="Test Form" onSubmit={jest.fn()}>
      <div>Child Component</div>
    </FormWrapper>
  );

  expect(screen.getByText(/test form/i)).toBeInTheDocument();
  expect(screen.getByText(/child component/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
});
