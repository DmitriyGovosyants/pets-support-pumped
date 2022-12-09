import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { addNoticePageOneSchema } from 'helpers';
import { InputBirthdate, InputErrorBox, MainButton } from 'components';
import {
  Form,
  Text,
  InputWrapper,
  Label,
  RadioGroupCategory,
  CategoryInput,
  CategoryLabel,
  BtnBox,
  LabelAboveInput,
} from './ModalAddNotice.styled';

const categoryOptions = [
  { label: 'Sell', value: 'sell' },
  { label: 'Lost/found', value: 'lost-found' },
  { label: 'In good hands', value: 'in-good-hands' },
];

export const ModalAddNoticePageOne = ({
  closeModal,
  formState,
  handlePageOne,
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addNoticePageOneSchema),
    mode: 'onBlur',
    defaultValues: {
      category: formState.category || '',
      title: formState.title || '',
      name: formState.name || '',
      birthdate: formState.birthdate || null,
      breed: formState.breed || '',
    },
  });

  return (
    <Form onSubmit={handleSubmit(handlePageOne)}>
      <Text>
        You can sell your pet, find your lost pet, create notice with lost pet
        or give pet in good hands
      </Text>

      <RadioGroupCategory>
        <Controller
          name="category"
          control={control}
          render={({ field: { onChange, ...props } }) =>
            categoryOptions.map(({ label, value }) => (
              <Fragment key={label}>
                <CategoryInput
                  {...props}
                  onChange={e => {
                    onChange(e.target.value);
                  }}
                  type="radio"
                  value={value}
                  id={value}
                  defaultChecked={formState.category === value}
                />
                <CategoryLabel htmlFor={value}>{label}</CategoryLabel>
              </Fragment>
            ))
          }
        />
        <InputErrorBox>{errors?.category?.message}</InputErrorBox>
      </RadioGroupCategory>

      <InputWrapper>
        <Label>
          Notice title *
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <input {...field} type="text" placeholder="Type title" />
            )}
          />
        </Label>
        <InputErrorBox>{errors?.title?.message}</InputErrorBox>
      </InputWrapper>

      <InputWrapper>
        <Label>
          Pet name
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <input {...field} type="text" placeholder="Type pet name" />
            )}
          />
        </Label>
        <InputErrorBox>{errors?.name?.message}</InputErrorBox>
      </InputWrapper>

      <InputWrapper>
        <LabelAboveInput htmlFor="birthdate-add-notice">
          Date of birth
        </LabelAboveInput>
        <InputBirthdate control={control} birthdate={formState?.birthdate} />
        <InputErrorBox>{errors?.birthdate?.message}</InputErrorBox>
      </InputWrapper>

      <InputWrapper last>
        <Label>
          Breed
          <Controller
            name="breed"
            control={control}
            render={({ field }) => (
              <input {...field} type="text" placeholder="Type breed" />
            )}
          />
        </Label>
        <InputErrorBox>{errors?.breed?.message}</InputErrorBox>
      </InputWrapper>

      <BtnBox>
        <MainButton size="medium" width="fixed" type="submit">
          Next
        </MainButton>
        <MainButton
          option="black"
          size="medium"
          width="fixed"
          onClick={() => closeModal()}
        >
          Cancel
        </MainButton>
      </BtnBox>
    </Form>
  );
};

ModalAddNoticePageOne.propTypes = {
  closeModal: PropTypes.func.isRequired,
  formState: PropTypes.object.isRequired,
  handlePageOne: PropTypes.func.isRequired,
};
