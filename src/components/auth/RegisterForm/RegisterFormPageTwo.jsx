import InputMask from 'comigo-tech-react-input-mask';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInPageTwoSchema } from 'helpers';
import { InputErrorBox, MainButton } from 'components';
import { BtnWrapper, Form, InputWrapper } from '../Auth.styled';

export const RegisterFormPageTwo = ({
  formState,
  handleBackToPageOne,
  onSubmit,
  isLoading,
}) => {
  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInPageTwoSchema),
    mode: 'onBlur',
    defaultValues: {
      name: formState.name || '',
      city: formState.city || '',
      phone: formState.phone || '',
    },
  });

  const handleSavePageTwoData = () => {
    const values = getValues();
    handleBackToPageOne(values);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <input {...field} type="text" placeholder="Name*" />
          )}
        />
        <InputErrorBox>{errors?.name?.message}</InputErrorBox>
      </InputWrapper>

      <InputWrapper>
        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <input {...field} type="text" placeholder="City, Region*" />
          )}
        />
        <InputErrorBox>{errors?.city?.message}</InputErrorBox>
      </InputWrapper>

      <InputWrapper last>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <InputMask
              {...field}
              mask={'+38(099)999-99-99'}
              type="text"
              alwaysShowMask={true}
            />
          )}
        />
        <InputErrorBox>{errors?.phone?.message}</InputErrorBox>
      </InputWrapper>

      <BtnWrapper>
        <MainButton type={'submit'} disabled={isLoading}>
          Register
        </MainButton>
        <MainButton option={'black'} onClick={handleSavePageTwoData}>
          Back
        </MainButton>
      </BtnWrapper>
    </Form>
  );
};
