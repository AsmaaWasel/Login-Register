import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { LoginFormFields } from '../types/FormField';
import FormWrapper from '../components/FormWrapper';
import TextInput from '../components/TextInput';

const LoginForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormFields>();

  const onSubmit: SubmitHandler<LoginFormFields> = data => {
    console.log(data);
  };

  return (
    <FormWrapper title="Login" onSubmit={handleSubmit(onSubmit)}>
      <TextInput<LoginFormFields> id="email" label="Email" type="email" register={register} errors={errors.email} />
      <TextInput<LoginFormFields> id="password" label="Password" type="password" register={register} errors={errors.password} />
    </FormWrapper>
  );
};

export default LoginForm;
