import React, { ReactNode } from "react";

interface FormWrapperProps {
  title: string;
  children: ReactNode;
  onSubmit: () => void;
}

const FormWrapper: React.FC<FormWrapperProps> = ({
  title,
  children,
  onSubmit,
}) => (
  <form
    onSubmit={onSubmit}
    className="max-w-md mx-auto mt-8 p-6 border border-gray-300 rounded-lg shadow-lg"
  >
    <h2 className="text-2xl mb-4">{title}</h2>
    {children}
    <button
      type="submit"
      className="w-full bg-blue-500 text-white p-2 rounded mt-4"
    >
      Submit
    </button>
  </form>
);

export default FormWrapper;
