import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useCreatePetMutation } from 'redux/usersApi';
import plusImg from 'data/img/plus.png';
import { validationErrMsg } from 'constants/constants';
import {
  isName,
  isBreedAddPet,
  isComments,
  isDate,
  isDatePast,
  handleUploadFile,
} from 'helpers';
import {
  MainButton,
  ModalBtnClose,
  SpinnerFixed,
  ValidationError,
} from 'components';
import {
  ModalWrap,
  Label,
  Input,
  BtnBox,
  Textarea,
  Title,
  SubTitle,
  FormInputLoadWrapper,
  FormInputLoad,
  FormInputLoadImg,
  FormInputLoadPlus,
  RequiredSymbol,
} from './ModalAddsPets.styled';

export const ModalAddsPet = ({ toggleModal }) => {
  const [addPet, { isLoading }] = useCreatePetMutation();
  const [avatarData, setAvatarData] = useState();
  const [avatar, setAvatar] = useState();
  const [step, setStep] = useState(0);

  const [formState, setFormState] = useState({
    name: {
      value: '',
      isValid: true,
    },
    birthdate: {
      value: '',
      isValid: true,
    },
    breed: {
      value: '',
      isValid: true,
    },
    comments: {
      value: '',
      isValid: true,
    },
  });

  const handleFirstBtn = () => {
    if (step === 0) {
      validateFirstPage();
    }
    if (step === 1) {
      validateSecondPage();
    }
  };

  const handleSecondBtn = () => {
    if (step === 0) {
      toggleModal();
    }
    if (step === 1) {
      setStep(0);
    }
  };

  const validateFirstPage = () => {
    const { name, birthdate, breed } = formState;

    const isNameValid = isName(name.value);
    const isDateValid = isDatePast(birthdate.value) && isDate(birthdate.value);
    const isBreedValid = isBreedAddPet(breed.value);

    if (!isNameValid || !isDateValid || !isBreedValid) {
      setFormState(prevState => ({
        ...prevState,
        name: {
          value: name.value,
          isValid: isNameValid,
        },
        birthdate: {
          value: birthdate.value,
          isValid: isDateValid,
        },
        breed: {
          value: breed.value,
          isValid: isBreedValid,
        },
      }));
      return;
    }

    setStep(1);
  };

  const validateSecondPage = () => {
    const { comments } = formState;

    const isCommentsValid = isComments(comments.value);

    if (!isCommentsValid) {
      setFormState(prevState => ({
        ...prevState,
        comments: {
          value: comments.value,
          isValid: isCommentsValid,
        },
      }));
      return;
    }

    handleSubmit();
  };

  const handleChange = ({ target: { name, value, isValid = true } }) => {
    if (name !== 'avatar') {
      setFormState(prev => ({ ...prev, [name]: { value, isValid } }));
      return;
    }

    const fileInput = document.getElementById('file-id');
    const file = fileInput.files[0];

    handleUploadFile(file, setAvatar, setAvatarData);
  };

  const handleSubmit = async () => {
    const data = Object.entries(formState);
    const formData = new FormData();

    for (let i = 0; i < data.length; i += 1) {
      formData.append(data[i][0], data[i][1].value);
    }

    if (avatarData) {
      formData.append('avatar', avatarData);
    }

    try {
      await addPet(formData);
      toggleModal();
      toast.success('Your pet is added');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ModalWrap onSubmit={handleSubmit}>
      <Title>Add pet</Title>
      <div style={{ display: step === 0 ? 'block' : 'none' }}>
        <Label htmlFor="name">
          Name pet<RequiredSymbol>*</RequiredSymbol>
        </Label>
        <Input
          placeholder={'Type name pet'}
          type={'text'}
          name={'name'}
          onChange={handleChange}
        />
        <ValidationError
          message={validationErrMsg.petName}
          isHidden={formState.name.isValid}
        />
        <Label htmlFor="birthdate">
          Date of birth<RequiredSymbol>*</RequiredSymbol>
        </Label>
        <Input
          placeholder={'Type date of birth'}
          type={'text'}
          name={'birthdate'}
          onChange={handleChange}
        />
        <ValidationError
          message={validationErrMsg.birthdate}
          isHidden={formState.birthdate.isValid}
        />
        <Label htmlFor="breed">
          Breed<RequiredSymbol>*</RequiredSymbol>
        </Label>
        <Input
          placeholder={'Type breed'}
          type={'text'}
          name={'breed'}
          onChange={handleChange}
        />
        <ValidationError
          message={validationErrMsg.breedAddPet}
          isHidden={formState.breed.isValid}
        />
      </div>
      <div style={{ display: step === 1 ? 'block' : 'none' }}>
        <SubTitle htmlFor="addPhoto">Add photo and some comments</SubTitle>
        <FormInputLoadWrapper>
          <FormInputLoad
            type={'file'}
            name={'avatar'}
            onChange={handleChange}
            id={'file-id'}
            accept=".png, .jpeg, .jpg, .webp"
          />
          <FormInputLoadPlus src={plusImg} alt="" />
          {avatar && <FormInputLoadImg src={avatar} alt="" />}
        </FormInputLoadWrapper>
        <Label htmlFor="name">
          Comments<RequiredSymbol>*</RequiredSymbol>
        </Label>
        <Textarea
          name={'comments'}
          onChange={handleChange}
          placeholder={'Type comments'}
          rows="3"
        />
        <ValidationError
          message={validationErrMsg.comments}
          isHidden={formState.comments.isValid}
        />
      </div>
      <BtnBox>
        <MainButton
          size={'medium'}
          width={'fixed'}
          disabled={isLoading}
          onClick={() => handleFirstBtn()}
        >
          {step === 0 ? 'Next' : 'Done'}
        </MainButton>
        <MainButton
          option={'black'}
          size={'medium'}
          width={'fixed'}
          onClick={() => handleSecondBtn()}
        >
          {step === 0 ? 'Cancel' : 'Back'}
        </MainButton>
      </BtnBox>
      <ModalBtnClose toggleModal={toggleModal} />
      {isLoading && <SpinnerFixed />}
    </ModalWrap>
  );
};

ModalAddsPet.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
