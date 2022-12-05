import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import eyeImg from 'data/img/eye.png';
import eyeClosedImg from 'data/img/eye-blocked.png';
import { signInPageOneSchema } from 'helpers';
import { MainButton } from 'components';
import { ErrorBox, Form, InputWrapper, EyeBtn } from '../Auth.styled';

export const RegisterPageOne = ({ formState, handlePageOne }) => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInPageOneSchema),
    mode: 'onBlur',
    defaultValues: {
      email: formState.email || '',
      password: formState.password || '',
      confirmPassword: formState.confirmPassword || '',
    },
  });

  return (
    <Form onSubmit={handleSubmit(handlePageOne)}>
      <InputWrapper>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <input {...field} type="email" placeholder="Email*" />
          )}
        />
        <ErrorBox>{errors?.email?.message}</ErrorBox>
      </InputWrapper>

      <InputWrapper>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type={showPassword ? 'text' : 'password'}
              placeholder="Password*"
            />
          )}
        />
        <ErrorBox>{errors?.password?.message}</ErrorBox>
        <EyeBtn type="button" onClick={() => setShowPassword(!showPassword)}>
          <img
            src={showPassword ? eyeImg : eyeClosedImg}
            alt="eye"
            width={20}
          />
        </EyeBtn>
      </InputWrapper>

      <InputWrapper last>
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type={showPassword ? 'text' : 'password'}
              placeholder="Confirm password*"
            />
          )}
        />
        <ErrorBox>{errors?.confirmPassword?.message}</ErrorBox>
        <EyeBtn type="button" onClick={() => setShowPassword(!showPassword)}>
          <img
            src={showPassword ? eyeImg : eyeClosedImg}
            alt="eye"
            width={20}
          />
        </EyeBtn>
      </InputWrapper>

      <MainButton type={'submit'}>Next</MainButton>
    </Form>
  );
};
