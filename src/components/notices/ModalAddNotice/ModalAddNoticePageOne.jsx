import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addNoticePageOneSchema } from 'helpers';
import { MainButton } from 'components';
import {
  Form,
  Text,
  InputWrapper,
  Label,
  SelectCategory,
  CategoryInput,
  CategoryLabel,
  ErrorBox,
  BtnBox,
  InputDateWrapper,
  LabelDate,
} from './ModalAddNotice.styled';

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
      birthdate: formState.birthdate || '',
      breed: formState.breed || '',
    },
  });

  return (
    <>
      <Form onSubmit={handleSubmit(handlePageOne)}>
        <Text>
          You can sell your pet, find your lost pet, create notice with lost pet
          or give pet in good hands
        </Text>

        <SelectCategory>
          <Controller
            name="category"
            control={control}
            render={({ field: { onChange, ...props } }) => (
              <CategoryInput
                {...props}
                onChange={e => onChange(e.target.checked)}
                type="radio"
                required
                id="lost-found"
              />
            )}
          />
          {/* <CategoryInput
            id="lost-found"
            type="radio"
            name="category"
            value="lost-found"
            // onChange={handleChange}
            required
          /> */}
          <CategoryLabel htmlFor="lost-found">Lost/found</CategoryLabel>
          <Controller
            name="category"
            control={control}
            render={({ field: { onChange, ...props } }) => (
              <CategoryInput
                {...props}
                onChange={e => onChange(e.target.checked)}
                type="radio"
                id="in-good-hands"
              />
            )}
          />
          {/* <CategoryInput
            id="in-good-hands"
            type="radio"
            name="category"
            value="in-good-hands"
            // onChange={handleChange}
          /> */}
          <CategoryLabel htmlFor="in-good-hands">In good hands</CategoryLabel>
          <Controller
            name="category"
            control={control}
            render={({ field: { onChange, ...props } }) => (
              <CategoryInput
                {...props}
                onChange={e => onChange(e.target.checked)}
                type="radio"
                id="sell"
              />
            )}
          />
          {/* <CategoryInput
            id="sell"
            type="radio"
            name="category"
            value="sell"
            // onChange={handleChange}
          /> */}
          <CategoryLabel htmlFor="sell">Sell</CategoryLabel>
        </SelectCategory>

        <InputWrapper>
          <Label>
            Notice title
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
                id="birthdate-add-notice"
                placeholderText="Type date of birth"
                onChange={date => field.onChange(date)}
                selected={field.value}
                dateFormat="dd.MM.yyyy"
                maxDate={new Date()}
                minDate={new Date(Date.UTC(1900, 0, 1))}
                showMonthDropdown={true}
                showYearDropdown={true}
                scrollableYearDropdown={true}
                yearDropdownItemNumber={100}
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
    </>
  );
};
