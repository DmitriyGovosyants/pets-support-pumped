import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { MainButton } from 'components';
import { signInSchemaPageTwo } from 'helpers';

export const RegisterPageTwo = ({
  registerData,
  setStep,
  setRegisterData,
  onSubmit,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchemaPageTwo),
    defaultValues: {
      name: registerData.name || '',
      city: registerData.city || '',
      phone: registerData.phone || '',
    },
  });

  const handleSaveData = ({ target: { name, value } }) => {
    setRegisterData(p => ({ ...p, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        {...register('name')}
        placeholder="Name*"
        onChange={handleSaveData}
        autoComplete={'disabled'}
      />
      <div>{errors?.name?.message}</div>

      <input
        type="text"
        {...register('city')}
        placeholder="City, Region*"
        onChange={handleSaveData}
        autoComplete={'disabled'}
      />
      <div>{errors?.city?.message}</div>

      <input
        type="text"
        {...register('phone')}
        placeholder="Mobile phone*"
        onChange={handleSaveData}
        autoComplete={'disabled'}
      />
      <div>{errors?.phone?.message}</div>

      <MainButton type={'submit'}>Register</MainButton>
      <MainButton option={'black'} onClick={() => setStep(1)}>
        Back
      </MainButton>
    </form>
  );
};
