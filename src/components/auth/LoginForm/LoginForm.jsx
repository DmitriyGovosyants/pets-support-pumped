import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { isPassword, dataFormConverter, isDomenName, isEmail } from 'helpers';
import { useLogInMutation } from 'redux/authApi';
import eyeImg from 'data/img/eye.png';
import eyeClosedImg from 'data/img/eye-blocked.png';
import {
  FormTitle,
  FormInput,
  FormText,
  FormWrapper,
  MainButton,
  SpinnerFixed,
} from 'components';
import { Wrapper, EyeBtn, InputWrapper } from './LoginForm.styled';

export const LoginForm = () => {
  const [login, { isError, isLoading }] = useLogInMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [formState, setFormState] = useState({
    email: {
      value: '',
      isValid: true,
    },
    password: {
      value: '',
      isValid: true,
    },
  });

  useEffect(() => {
    if (isError) {
      toast.error('Wrong email or password!');
    }
  }, [isError]);

  const handleChange = ({ target: { name, value, isValid = true } }) =>
    setFormState(prev => ({ ...prev, [name]: { value, isValid } }));

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      !isEmail(formState.email.value) ||
      !isDomenName(formState.email.value)
    ) {
      setFormState(prevState => ({
        ...prevState,
        email: {
          ...prevState.email,
          isValid: false,
        },
      }));
      return;
    }

    if (!isPassword(formState.password.value)) {
      setFormState(prevState => ({
        ...prevState,
        password: {
          ...prevState.password,
          isValid: false,
        },
      }));
      return;
    }

    try {
      const data = dataFormConverter(formState);
      await login(data).unwrap();
    } catch (err) {
      if (err.status === 401) {
        toast.error(err.data.message);
      }
      console.log(err);
    }
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <FormTitle title={'Login'} />
        <FormInput
          placeholder={'Email'}
          type={'text'}
          name={'email'}
          onChange={handleChange}
          isvalid={formState.email.isValid ? 1 : 0}
          errorMessage="Invalid Email"
        />
        <InputWrapper>
          <FormInput
            placeholder={'Password'}
            type={showPassword ? 'text' : 'password'}
            name={'password'}
            id={'password'}
            onChange={handleChange}
            isvalid={formState.password.isValid ? 1 : 0}
            errorMessage="Invalid Password"
          />
          <EyeBtn type="button" onClick={() => setShowPassword(!showPassword)}>
            <img
              src={showPassword ? eyeClosedImg : eyeImg}
              alt="eye"
              width={20}
            />
          </EyeBtn>
        </InputWrapper>
        <Wrapper>
          <MainButton type={'submit'} disabled={isLoading}>
            Login
          </MainButton>
        </Wrapper>
        <FormText
          text={"Don't have an account?"}
          routesPath={'/register'}
          link={'Register'}
        />
      </form>
      {isLoading && <SpinnerFixed />}
    </FormWrapper>
  );
};
