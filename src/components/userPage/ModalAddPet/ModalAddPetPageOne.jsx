import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';
import { addPetPageOneSchema } from 'helpers';
import { InputBirthdate, InputErrorBox, MainButton } from 'components';
import {
  Form,
  InputWrapper,
  Label,
  LabelAboveInput,
  BtnBox,
} from './ModalAddPet.styled';

export const ModalAddPetPageOne = ({
  closeModal,
  formState,
  handlePageOne,
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addPetPageOneSchema),
    mode: 'onBlur',
    defaultValues: {
      name: formState.name || '',
      birthdate: formState.birthdate || null,
      breed: formState.breed || '',
    },
  });

  return (
    <Form onSubmit={handleSubmit(handlePageOne)}>
      <InputWrapper>
        <Label>
          Pet name *
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
          Date of birth *
        </LabelAboveInput>
        <InputBirthdate control={control} formState={formState} />
        <InputErrorBox>{errors?.birthdate?.message}</InputErrorBox>
      </InputWrapper>

      <InputWrapper last>
        <Label>
          Breed *
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

ModalAddPetPageOne.propTypes = {
  closeModal: PropTypes.func.isRequired,
  formState: PropTypes.object.isRequired,
  handlePageOne: PropTypes.func.isRequired,
};
