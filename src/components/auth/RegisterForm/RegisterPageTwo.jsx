import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInSchemaPageTwo } from 'helpers';
import { MainButton } from 'components';
import { BtnWrapper, ErrorBox, Input } from './Auth.styled';

export const RegisterPageTwo = ({
  registerData,
  handleBackToPageOne,
  onSubmit,
}) => {
  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchemaPageTwo),
    mode: 'onBlur',
    defaultValues: {
      name: registerData.name || '',
      city: registerData.city || '',
      phone: registerData.phone || '',
    },
  });

  const handleSavePageTwoData = () => {
    const values = getValues();
    handleBackToPageOne(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        value={registerData?.name}
        control={control}
        render={({ field }) => (
          <Input {...field} type="text" placeholder="Name*" />
        )}
      />
      <ErrorBox>{errors?.name?.message}</ErrorBox>
      <Controller
        name="city"
        value={registerData?.city}
        control={control}
        render={({ field }) => (
          <Input {...field} type="text" placeholder="City, Region*" />
        )}
      />
      <ErrorBox>{errors?.city?.message}</ErrorBox>
      <Controller
        name="phone"
        value={registerData?.phone}
        control={control}
        render={({ field }) => (
          <Input {...field} type="text" placeholder="Mobile phone*" />
        )}
      />
      <ErrorBox>{errors?.phone?.message}</ErrorBox>

      <BtnWrapper>
        <MainButton type={'submit'}>Register</MainButton>
        <MainButton option={'black'} onClick={handleSavePageTwoData}>
          Back
        </MainButton>
      </BtnWrapper>
    </form>
  );
};
