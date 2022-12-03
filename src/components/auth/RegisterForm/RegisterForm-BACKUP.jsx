import React, { useState } from 'react';
import isMobilePhone from 'validator/lib/isMobilePhone';
import { toast } from 'react-toastify';
import eyeImg from 'data/img/eye.png';
import eyeClosedImg from 'data/img/eye-blocked.png';
import { useSignUpMutation } from 'redux/authApi';
import { validationErrMsg } from 'constants/constants';
import {
  isCity,
  isPassword,
  isName,
  dataFormConverter,
  isDomenName,
  isEmail,
} from 'helpers';
import {
  FormTitle,
  FormInput,
  MaskInput,
  FormText,
  FormWrapper,
  MainButton,
  SpinnerFixed,
} from 'components';
import { Wrapper, InputWrapper, Button, EyeBtn } from './RegisterForm.styled';

export const RegisterForm = () => {
  const [signUp, { isLoading }] = useSignUpMutation();
  const [step, setStep] = useState(0);
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
    confirmPassword: {
      value: '',
      isValid: true,
    },
    name: {
      value: '',
      isValid: true,
    },
    city: {
      value: '',
      isValid: true,
    },
    phone: {
      value: '',
      isValid: true,
    },
  });

  const handleChange = ({ target: { name, value, isValid = true } }) =>
    setFormState(prev => ({ ...prev, [name]: { value, isValid } }));

  const handleSubmit = async () => {
    try {
      const data = dataFormConverter(formState);
      await signUp(data).unwrap();
    } catch (err) {
      if (err.status === 409) {
        toast.error(err.data.message);
      }
      console.log(err);
    }
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <FormTitle title={'Registration'} />
        <div style={{ display: step === 0 ? 'block' : 'none' }}>
          <FormInput
            placeholder={'Email'}
            type={'Email'}
            name={'email'}
            onChange={handleChange}
            isvalid={formState.email.isValid ? 1 : 0}
            errorMessage={validationErrMsg.email}
          />
          <InputWrapper>
            <FormInput
              placeholder={'Password'}
              name={'password'}
              type={showPassword ? 'text' : 'password'}
              id={'password'}
              onChange={handleChange}
              isvalid={formState.password.isValid ? 1 : 0}
              errorMessage={validationErrMsg.password}
            />
            <EyeBtn
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              <img
                src={showPassword ? eyeClosedImg : eyeImg}
                alt="eye"
                width={20}
              />
            </EyeBtn>
          </InputWrapper>
          <InputWrapper>
            <FormInput
              placeholder={'Confirm Password'}
              name={'confirmPassword'}
              type={showPassword ? 'text' : 'password'}
              id={'password'}
              onChange={handleChange}
              isvalid={formState.confirmPassword.isValid ? 1 : 0}
              errorMessage="Password and Confirm Password are not equal"
            />
            <EyeBtn
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              <img
                src={showPassword ? eyeClosedImg : eyeImg}
                alt="eye"
                width={20}
              />
            </EyeBtn>
          </InputWrapper>
        </div>
        <div style={{ display: step === 1 ? 'block' : 'none' }}>
          <FormInput
            placeholder={'Name'}
            type={'name'}
            name={'name'}
            onChange={handleChange}
            isvalid={formState.name.isValid ? 1 : 0}
            errorMessage={validationErrMsg.name}
          />
          <FormInput
            placeholder={'City, Region'}
            name={'city'}
            type={'City'}
            onChange={handleChange}
            isvalid={formState.city.isValid ? 1 : 0}
            errorMessage={validationErrMsg.city}
          />
          <MaskInput
            placeholder={'Mobile Phone'}
            mask={'+380999999999'}
            name={'phone'}
            type={'phone'}
            onChange={handleChange}
            isvalid={formState.phone.isValid ? 1 : 0}
            errorMessage={validationErrMsg.phone}
          />
        </div>
        <Wrapper>
          <MainButton
            btnType={'submit'}
            disabled={isLoading}
            onClick={e => {
              if (step === 0) {
                e.preventDefault();
                const isEmailValid =
                  isEmail(formState.email.value) &&
                  isDomenName(formState.email.value);
                const isPasswordValid = isPassword(formState.password.value);
                const isConfirmPasswordValid =
                  isPasswordValid &&
                  formState.password.value === formState.confirmPassword.value;
                if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
                  setStep(1);
                } else {
                  setFormState(prevState => ({
                    ...prevState,
                    email: {
                      value: formState.email.value,
                      isValid: isEmailValid,
                    },
                    password: {
                      value: formState.password.value,
                      isValid: isPasswordValid,
                    },
                    confirmPassword: {
                      value: formState.confirmPassword.value,
                      isValid: isConfirmPasswordValid,
                    },
                  }));
                }
              } else {
                const isNameValid = isName(formState.name.value);
                const isCityValid = isCity(formState.city.value);
                const isPhoneValid = isMobilePhone(
                  formState.phone.value,
                  'uk-UA',
                  { strictMode: true }
                );

                if (!isNameValid || !isCityValid || !isPhoneValid) {
                  setFormState(prevState => ({
                    ...prevState,
                    name: {
                      value: formState.name.value,
                      isValid: isNameValid,
                    },
                    city: {
                      value: formState.city.value,
                      isValid: isCityValid,
                    },
                    phone: {
                      value: formState.phone.value,
                      isValid: isPhoneValid,
                    },
                  }));

                  e.preventDefault();
                } else {
                  handleSubmit();
                }
              }
            }}
          >
            {step === 0 ? 'Next' : 'Register'}
          </MainButton>
          {step === 1 && (
            <Button>
              <MainButton
                option={'black'}
                btnType={'submit'}
                isLoading={isLoading}
                onClick={() => {
                  setStep(0);
                }}
              >
                Back
              </MainButton>
            </Button>
          )}
        </Wrapper>
        <FormText
          text={'Already have an account?'}
          routesPath={'/login'}
          link={'Login'}
        />
      </form>
      {isLoading && <SpinnerFixed />}
    </FormWrapper>
  );
};
