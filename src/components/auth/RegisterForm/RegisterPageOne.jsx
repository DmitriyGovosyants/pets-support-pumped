import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import eyeImg from 'data/img/eye.png';
import eyeClosedImg from 'data/img/eye-blocked.png';
import { signInSchemaPageOne } from 'helpers';
import { MainButton } from 'components';
import { ErrorBox, Form, InputWrapper, EyeBtn } from '../Auth.styled';

export const RegisterPageOne = ({ registerData, handlePageOne }) => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchemaPageOne),
    mode: 'onBlur',
    defaultValues: {
      email: registerData.email || '',
      password: registerData.password || '',
      confirmPassword: registerData.confirmPassword || '',
    },
  });

  return (
    <Form onSubmit={handleSubmit(handlePageOne)}>
      <InputWrapper>
        <Controller
          name="email"
          value={registerData?.email}
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
          value={registerData?.password}
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
          value={registerData?.confirmPassword}
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
