import { useState } from 'react';
import { toast } from 'react-toastify';
import { useSignUpMutation } from 'redux/authApi';
import { routesPath } from 'router';
import { RegisterPageOne } from './RegisterPageOne';
import { RegisterPageTwo } from './RegisterPageTwo';
import { SpinnerFixed } from 'components';
import { Wrapper, Title, Text, FormNavLink } from '../Auth.styled';

export const RegisterForm = () => {
  const [signUp, { isLoading }] = useSignUpMutation();
  const [step, setStep] = useState(1);
  const [registerData, setRegisterData] = useState({});

  const handlePageOne = values => {
    setRegisterData(p => ({ ...p, ...values }));
    setStep(2);
  };

  const handleBackToPageOne = values => {
    setRegisterData(p => ({ ...p, ...values }));
    setStep(1);
  };

  const onSubmit = async ({ name, city, phone }) => {
    const { email, password } = registerData;
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
      if (error.status === 400) {
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
      <Title>Registration</Title>
      {step === 1 && (
        <RegisterPageOne
          registerData={registerData}
          handlePageOne={handlePageOne}
        />
      )}
      {step === 2 && (
        <RegisterPageTwo
          registerData={registerData}
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
