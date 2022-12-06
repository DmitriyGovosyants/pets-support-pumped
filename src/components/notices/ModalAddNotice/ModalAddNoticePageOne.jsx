import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Fragment, useRef } from 'react';
import { addNoticePageOneSchema } from 'helpers';
import { MainButton } from 'components';
import {
  Form,
  Text,
  InputWrapper,
  Label,
  RadioGroupCategory,
  CategoryInput,
  CategoryLabel,
  ErrorBox,
  BtnBox,
  InputDateWrapper,
  LabelDate,
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
  const nodeRef = useRef();
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
        <ErrorBox>{errors?.category?.message}</ErrorBox>
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
        <ErrorBox>{errors?.title?.message}</ErrorBox>
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
        <ErrorBox>{errors?.name?.message}</ErrorBox>
      </InputWrapper>

      <InputDateWrapper>
        <LabelDate htmlFor="birthdate-add-notice">Date of birth</LabelDate>
        <Controller
          name="birthdate"
          control={control}
          render={({ field }) => (
            <DatePicker
              ref={nodeRef}
              id="birthdate-add-notice"
              placeholderText="Type date of birth"
              onChange={date => {
                field.onChange(parseInt(Date.parse(date), 10));
              }}
              value={formState.birthdate}
              selected={field.value}
              dateFormat="dd.MM.yyyy"
              maxDate={new Date()}
              minDate={new Date(Date.UTC(1900, 0, 1))}
              showMonthDropdown={true}
              showYearDropdown={true}
              scrollableYearDropdown={true}
              yearDropdownItemNumber={100}
              autoComplete="off"
            />
          )}
        />
        <ErrorBox>{errors?.birthdate?.message}</ErrorBox>
      </InputDateWrapper>

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
        <ErrorBox>{errors?.breed?.message}</ErrorBox>
      </InputWrapper>

      <BtnBox>
        <MainButton size={'medium'} width={'fixed'} type={'submit'}>
          Next
        </MainButton>
        <MainButton
          option={'black'}
          size={'medium'}
          width={'fixed'}
          onClick={() => closeModal()}
        >
          Cancel
        </MainButton>
      </BtnBox>
    </Form>
  );
};
