import { useSignUpMutation } from 'redux/authApi';
import { FormTitle, FormWrapper, SpinnerFixed } from 'components';
import { useState } from 'react';
import { RegisterPageOne } from './RegisterPageOne';
import { RegisterPageTwo } from './RegisterPageTwo';
import { toast } from 'react-toastify';

export const RegisterForm = () => {
  const [signUp, { isLoading }] = useSignUpMutation();
  const [step, setStep] = useState(1);
  const [registerData, setRegisterData] = useState({});

  const onSubmit = async () => {
    console.log(registerData);
    const { email, password, name, city, phone } = registerData;

    try {
      await signUp({ email, password, name, city, phone }).unwrap();
      toast.info(`${name} is registered`);
    } catch (error) {
      if (error.status === 400) {
        toast.error(error.data.message);
      }
      if (error.originalStatus === 404) {
        toast.error('Resourses not found');
      }
      if (error.status === 500) {
        toast.error('Server not response');
      }
    }
  };

  return (
    <FormWrapper>
      <FormTitle title={'Registration'} />
      {step === 1 && (
        <RegisterPageOne
          registerData={registerData}
          setStep={setStep}
          setRegisterData={setRegisterData}
        />
      )}
      {step === 2 && (
        <RegisterPageTwo
          registerData={registerData}
          setStep={setStep}
          setRegisterData={setRegisterData}
          onSubmit={onSubmit}
        />
      )}
      {isLoading && <SpinnerFixed />}
    </FormWrapper>
  );
};
