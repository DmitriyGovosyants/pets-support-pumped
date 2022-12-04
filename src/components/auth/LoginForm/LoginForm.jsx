import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useLogInMutation } from 'redux/authApi';
import { routesPath } from 'router';
import { loginSchema } from 'helpers';
import eyeImg from 'data/img/eye.png';
import eyeClosedImg from 'data/img/eye-blocked.png';
import { MainButton, SpinnerFixed } from 'components';
import {
  Wrapper,
  Title,
  Text,
  FormNavLink,
  ErrorBox,
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
      toast.info(`${email} is logined`);
    } catch (error) {
      if (error.status === 401) {
        toast.error(error.data.message);
      }
      if (error.status === 404) {
        toast.error('Resourses not found');
      }
      if (error.status === 500) {
        toast.error('Server not response');
      }
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
          <ErrorBox>{errors?.email?.message}</ErrorBox>
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
          <ErrorBox>{errors?.password?.message}</ErrorBox>
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
