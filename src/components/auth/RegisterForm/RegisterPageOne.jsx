import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { MainButton } from 'components';
import { signInSchemaPageOne } from 'helpers';

export const RegisterPageOne = ({ registerData, setStep, setRegisterData }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchemaPageOne),
    defaultValues: {
      email: registerData.email || '',
      password: registerData.password || '',
      confirmPassword: registerData.confirmPassword || '',
    },
  });

  const handlePageOne = ({ email, password, confirmPassword }) => {
    setRegisterData(p => ({ ...p, email, password, confirmPassword }));
    setStep(2);
  };

  return (
    <form onSubmit={handleSubmit(handlePageOne)}>
      <input
        type="email"
        {...register('email')}
        placeholder="Email*"
        autoComplete="off"
      />
      <div>{errors?.email?.message}</div>

      <input
        type="password"
        {...register('password')}
        placeholder="Password*"
        autoComplete="off"
      />
      <div>{errors?.password?.message}</div>

      <input
        type="password"
        {...register('confirmPassword')}
        placeholder="Confirm password*"
        autoComplete="off"
      />
      <div>{errors?.confirmPassword?.message}</div>

      <MainButton type={'submit'}>Next</MainButton>
    </form>
  );
};
