import {
  FieldError,
  UseFormRegister,
  Path,
  FieldValues,
  Merge,
  FieldErrorsImpl,
} from "react-hook-form";

interface TextInputProps<T extends FieldValues> {
  id: Path<T>;
  label: string;
  type: string;
  register: UseFormRegister<T>;
  errors?: FieldError | Merge<FieldError, FieldErrorsImpl<T>>;
}

const TextInput = <T extends FieldValues>({
  id,
  label,
  type,
  register,
  errors,
}: TextInputProps<T>) => (
  <div className="mb-4">
    <label className="block mb-1" htmlFor={id}>
      {label}
    </label>
    <input
      id={id}
      type={type}
      {...register(id)}
      className={`w-full p-2 border ${
        errors ? "border-red-500" : "border-gray-300"
      } rounded`}
    />
    {errors && (
      <p className="text-red-500 text-sm mt-1">{String(errors.message)}</p>
    )}
  </div>
);

export default TextInput;
