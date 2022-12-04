import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInSchemaPageOne } from 'helpers';
import { MainButton } from 'components';
import { ErrorBox, Input } from './Auth.styled';

export const RegisterPageOne = ({ registerData, handlePageOne }) => {
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
    <form onSubmit={handleSubmit(handlePageOne)}>
      <Controller
        name="email"
        value={registerData?.email}
        control={control}
        render={({ field }) => (
          <Input {...field} type="email" placeholder="Email*" />
        )}
      />
      <ErrorBox>{errors?.email?.message}</ErrorBox>

      <Controller
        name="password"
        value={registerData?.password}
        control={control}
        render={({ field }) => (
          <Input {...field} type="password" placeholder="Password*" />
        )}
      />
      <ErrorBox>{errors?.password?.message}</ErrorBox>

      <Controller
        name="confirmPassword"
        value={registerData?.confirmPassword}
        control={control}
        render={({ field }) => (
          <Input {...field} type="password" placeholder="Confirm password*" />
        )}
      />
      <ErrorBox>{errors?.confirmPassword?.message}</ErrorBox>

      <MainButton type={'submit'}>Next</MainButton>
    </form>
  );
};
