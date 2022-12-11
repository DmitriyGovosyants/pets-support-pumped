import { useState } from 'react';
import { toast } from 'react-toastify';
import { useSignUpMutation } from 'redux/authApi';
import { routesPath } from 'router';
import { RegisterFormPageOne } from './RegisterFormPageOne';
import { RegisterFormPageTwo } from './RegisterFormPageTwo';
import { requestErrorPopUp } from 'helpers';
import { SpinnerFixed } from 'components';
import { Wrapper, Title, Text, FormNavLink } from '../Auth.styled';

export const RegisterForm = () => {
  const [signUp, { isLoading }] = useSignUpMutation();
  const [step, setStep] = useState(1);
  const [formState, setFormState] = useState({});

  const handlePageOne = values => {
    setFormState(p => ({ ...p, ...values }));
    setStep(2);
  };

  const handleBackToPageOne = values => {
    setFormState(p => ({ ...p, ...values }));
    setStep(1);
  };

  const onSubmit = async ({ name, city, phone }) => {
    const { email, password } = formState;
    const phoneWithoutMask = phone.split(/[-()]+/).join('');

    try {
      await signUp({
        email,
        password,
        name,
        city,
        phone: phoneWithoutMask,
      }).unwrap();
      toast.info(`${email} is registered`);
    } catch (error) {
      requestErrorPopUp(error);
    }
  };

  return (
    <Wrapper>
      <Title>Registration</Title>
      {step === 1 && (
        <RegisterFormPageOne
          formState={formState}
          handlePageOne={handlePageOne}
        />
      )}
      {step === 2 && (
        <RegisterFormPageTwo
          formState={formState}
          handleBackToPageOne={handleBackToPageOne}
          onSubmit={onSubmit}
          isLoading={isLoading}
        />
      )}
      <Text>
        Already have an account?
        <FormNavLink to={routesPath.login}>Login</FormNavLink>
      </Text>
      {isLoading && <SpinnerFixed />}
    </Wrapper>
  );
};
