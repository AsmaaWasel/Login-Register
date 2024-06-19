import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { RegisterFormFields } from "../types/FormField";
import FormWrapper from "../components/FormWrapper";
import TextInput from "../components/TextInput";

const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormFields>();

  const onSubmit: SubmitHandler<RegisterFormFields> = (data) => {
    console.log(data);
  };

  return (
    <FormWrapper title="Register" onSubmit={handleSubmit(onSubmit)}>
      <TextInput<RegisterFormFields>
        id="username"
        label="Username"
        type="text"
        register={register}
        errors={errors.username}
      />
      <TextInput<RegisterFormFields>
        id="email"
        label="Email"
        type="email"
        register={register}
        errors={errors.email}
      />
      <TextInput<RegisterFormFields>
        id="password"
        label="Password"
        type="password"
        register={register}
        errors={errors.password}
      />
    </FormWrapper>
  );
};

export default RegisterForm;
