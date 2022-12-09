import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import eyeImg from 'data/img/eye.png';
import eyeClosedImg from 'data/img/eye-blocked.png';
import { signInPageOneSchema } from 'helpers';
import { InputErrorBox, MainButton } from 'components';
import { Form, InputWrapper, EyeBtn } from '../Auth.styled';

export const RegisterFormPageOne = ({ formState, handlePageOne }) => {
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
        <InputErrorBox>{errors?.email?.message}</InputErrorBox>
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
        <InputErrorBox>{errors?.password?.message}</InputErrorBox>
        <EyeBtn type="button" onClick={() => setShowPassword(!showPassword)}>
          <img
            src={showPassword ? eyeClosedImg : eyeImg}
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
        <InputErrorBox>{errors?.confirmPassword?.message}</InputErrorBox>
        <EyeBtn type="button" onClick={() => setShowPassword(!showPassword)}>
          <img
            src={showPassword ? eyeClosedImg : eyeImg}
            alt="eye"
            width={20}
          />
        </EyeBtn>
      </InputWrapper>

      <MainButton type={'submit'}>Next</MainButton>
    </Form>
  );
};
