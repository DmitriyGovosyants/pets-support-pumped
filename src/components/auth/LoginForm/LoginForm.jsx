import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useLogInMutation } from 'redux/authApi';
import { routesPath } from 'router';
import { loginSchema, requestErrorPopUp } from 'helpers';
import eyeImg from 'data/img/eye.png';
import eyeClosedImg from 'data/img/eye-blocked.png';
import { InputErrorBox, MainButton, SpinnerFixed } from 'components';
import {
  Wrapper,
  Title,
  Text,
  FormNavLink,
  Form,
  InputWrapper,
  EyeBtn,
} from '../Auth.styled';

export const LoginForm = () => {
  const [login, { isLoading }] = useLogInMutation();
  const [showPassword, setShowPassword] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async ({ email, password }) => {
    try {
      await login({
        email,
        password,
      }).unwrap();
      toast.info(`${email} is logged in`);
    } catch (error) {
      requestErrorPopUp(error);
    }
  };

  return (
    <Wrapper>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
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

        <InputWrapper last>
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

        <MainButton type={'submit'}>Login</MainButton>
      </Form>
      <Text>
        Don't have an account?
        <FormNavLink to={routesPath.register}>Register</FormNavLink>
      </Text>
      {isLoading && <SpinnerFixed />}
    </Wrapper>
  );
};
