import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { ReactComponent as CloseIcon } from 'data/img/close-icon.svg';
import plusImg from 'data/img/plus.png';
import { useEditPetMutation } from 'redux/usersApi';
import {
  isName,
  isBreed,
  isComments,
  isDate,
  isDatePast,
  handleUploadFile,
} from 'helpers';
import { MainButton, SpinnerFixed } from 'components';
import {
  ModalWrap,
  BtnClose,
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
} from './ModalEditPet.styled';

export const ModalEditPet = ({
  id,
  image,
  name,
  birthdate,
  breed,
  comments,
  closeModal,
}) => {
  const [editPet, { isLoading }] = useEditPetMutation();
  const [avatarData, setAvatarData] = useState();
  const [avatar, setAvatar] = useState(image);
  const [step, setStep] = useState(0);

  const [formState, setFormState] = useState({
    name: {
      value: name,
      isValid: true,
    },
    birthdate: {
      value: birthdate,
      isValid: true,
    },
    breed: {
      value: breed,
      isValid: true,
    },
    comments: {
      value: comments,
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
      closeModal();
    }
    if (step === 1) {
      setStep(0);
    }
  };

  const validateFirstPage = () => {
    const { name, birthdate, breed } = formState;

    const isNameValid = isName(name.value);
    const isDateValid = isDatePast(birthdate.value) && isDate(birthdate.value);
    const isBreedValid = isBreed(breed.value);

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
      await editPet({ id, formData }).unwrap();
      closeModal();
      toast.success('Your pet has been changed');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ModalWrap onSubmit={handleSubmit}>
      <BtnClose type="button" onClick={() => closeModal()}>
        <CloseIcon />
      </BtnClose>
      <div style={{ display: step === 0 ? 'block' : 'none' }}>
        <Title>Edit pet</Title>
        <Label htmlFor="name">Name pet</Label>
        <Input
          placeholder={'Type name pet'}
          type={'text'}
          name={'name'}
          value={formState.name.value}
          onChange={handleChange}
        />
        {!formState.name.isValid && (
          <div style={{ color: 'red' }}>Name should have only 2-16 letters</div>
        )}
        <Label htmlFor="birthdate">Date of birth</Label>
        <Input
          placeholder={'Type date of birth'}
          type={'text'}
          name={'birthdate'}
          value={formState.birthdate.value}
          onChange={handleChange}
        />
        {!formState.birthdate.isValid && (
          <div style={{ color: 'red' }}>
            Please, type in DD.MM.YYYY format and past date
          </div>
        )}
        <Label htmlFor="breed">Breed</Label>
        <Input
          placeholder={'Type breed'}
          type={'text'}
          name={'breed'}
          value={formState.breed.value}
          onChange={handleChange}
        />
        {!formState.breed.isValid && (
          <div style={{ color: 'red' }}>
            Breed should have only 2-16 letters
          </div>
        )}
      </div>
      <div style={{ display: step === 1 ? 'block' : 'none' }}>
        <SubTitle htmlFor="addPhoto">Edit photo and some comments</SubTitle>
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
        <Label htmlFor="name">Comments</Label>
        <Textarea
          name={'comments'}
          value={formState.comments.value}
          onChange={handleChange}
          placeholder={'Type comments'}
          rows="3"
        />
        {!formState.comments.isValid && (
          <div style={{ color: 'red' }}>
            Comments should have only 8-120 letters
          </div>
        )}
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
      {isLoading && <SpinnerFixed />}
    </ModalWrap>
  );
};

ModalEditPet.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  birthdate: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
