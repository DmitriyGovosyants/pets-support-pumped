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
} from './ModalEditPet.styled';

export const ModalEditPetPageOne = ({
  closeModal,
  formState,
  handlePageOne,
  name,
  birthdate,
  breed,
}) => {
  const birthdateArray = birthdate.split('.');
  const birthdateString =
    birthdateArray[1] + '.' + birthdateArray[0] + '.' + birthdateArray[2];
  const birthdateParse = parseInt(Date.parse(birthdateString), 10);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addPetPageOneSchema),
    mode: 'onBlur',
    defaultValues: {
      name: formState.name || name,
      birthdate: formState.birthdate || birthdateParse,
      breed: formState.breed || breed,
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
        <InputBirthdate control={control} birthdate={formState?.birthdate} />
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

ModalEditPetPageOne.propTypes = {
  closeModal: PropTypes.func.isRequired,
  formState: PropTypes.object.isRequired,
  handlePageOne: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  birthdate: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
};
