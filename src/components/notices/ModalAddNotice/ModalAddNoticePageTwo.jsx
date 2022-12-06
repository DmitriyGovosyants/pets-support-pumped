import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addNoticePageTwoSchema } from 'helpers';
import { MainButton } from 'components';
import {
  Form,
  // Text,
  // InputWrapper,
  // Label,
  // SelectCategory,
  // CategoryInput,
  // CategoryLabel,
  // ErrorBox,
  BtnBox,
  // InputDateWrapper,
  // LabelDate,
} from './ModalAddNotice.styled';

export const ModalAddNoticePageTwo = ({
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
    resolver: yupResolver(addNoticePageTwoSchema),
    mode: 'onBlur',
    defaultValues: {
      sex: formState.sex || '',
      // city: formState.city || '',
      // phone: formState.phone || '',
    },
  });

  const handleSavePageTwoData = () => {
    const values = getValues();
    handleBackToPageOne(values);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <BtnBox>
        <MainButton
          disabled={isLoading}
          size={'medium'}
          width={'fixed'}
          type={'submit'}
        >
          Done
        </MainButton>
        <MainButton
          option={'black'}
          size={'medium'}
          width={'fixed'}
          onClick={handleSavePageTwoData}
        >
          Back
        </MainButton>
      </BtnBox>
    </Form>
  );
};
