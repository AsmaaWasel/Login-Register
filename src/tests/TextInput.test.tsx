import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useForm } from "react-hook-form";
import TextInput from "../components/TextInput";

const TestComponent = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <TextInput
      id="test"
      label="Test Label"
      type="text"
      register={register}
      errors={errors.test}
    />
  );
};

test("renders TextInput with label", () => {
  render(<TestComponent />);

  expect(screen.getByLabelText(/test label/i)).toBeInTheDocument();
});
