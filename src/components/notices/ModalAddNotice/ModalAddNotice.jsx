import PropTypes from 'prop-types';
import { useState } from 'react';
import isEmpty from 'validator/lib/isEmpty';
import { toast } from 'react-toastify';
import { useAddNoticeMutation } from 'redux/noticesApi';
import maleImg from 'data/img/male.png';
import femaleImg from 'data/img/female.png';
import plusImg from 'data/img/plus.png';
import { validationErrMsg } from 'constants/constants';
import {
  addNoticeValidationModel,
  isBreed,
  isCity,
  isComments,
  isName,
  isPrice,
  isTitle,
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
  ModalCard,
  FormTitle,
  FormText,
  SelectCategory,
  CategoryLabel,
  CategoryInput,
  InputList,
  InputItem,
  FormInputLabel,
  RequiredSymbol,
  FormInput,
  FormTextarea,
  SelectSex,
  SexInput,
  SexLabel,
  ImgWrapper,
  FormInputLoadWrapper,
  FormInputLoad,
  FormInputLoadImg,
  FormInputLoadPlus,
  BtnBox,
} from './ModalAddNotice.styled';

export const ModalAddNotice = ({ toggleModal }) => {
  const [formState, setFormState] = useState(addNoticeValidationModel);
  const [addNotice, { isLoading }] = useAddNoticeMutation();
  const [step, setStep] = useState(1);
  const [avatarData, setAvatarData] = useState();
  const [avatar, setAvatar] = useState();

  const handleFirstBtn = () => {
    if (step === 1) {
      validateFirstPage();
    }
    if (step === 2) {
      validateSecondPage();
    }
  };

  const handleSecondBtn = () => {
    if (step === 1) {
      toggleModal();
    }
    if (step === 2) {
      setStep(1);
    }
  };

  const validateFirstPage = () => {
    const { category, title, name, birthdate, breed } = formState;

    const isCategoryValid = !isEmpty(category.value);
    const isTitleValid = isTitle(title.value);
    const isNameValid = isName(name.value) || isEmpty(name.value);
    const isDateValid =
      (isDatePast(birthdate.value) && isDate(birthdate.value)) ||
      isEmpty(birthdate.value);
    const isBreedValid = isBreed(breed.value) || isEmpty(breed.value);

    if (
      !isCategoryValid ||
      !isTitleValid ||
      !isNameValid ||
      !isDateValid ||
      !isBreedValid
    ) {
      setFormState(prevState => ({
        ...prevState,
        category: {
          value: category.value,
          isValid: isCategoryValid,
        },
        title: {
          value: title.value,
          isValid: isTitleValid,
        },
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

    setStep(2);
  };

  const validateSecondPage = () => {
    const { sex, location, price, comments, category } = formState;

    const handlePriceValidate = () => {
      if (category.value === 'sell') {
        return isPrice(price.value);
      }
      return true;
    };

    const isSexValid = !isEmpty(sex.value);
    const isLocationValid = isCity(location.value);
    const isPriceValid = handlePriceValidate();
    const isCommentsValid = isComments(comments.value);

    if (!isSexValid || !isLocationValid || !isPriceValid || !isCommentsValid) {
      setFormState(prevState => ({
        ...prevState,
        sex: {
          value: sex.value,
          isValid: isSexValid,
        },
        location: {
          value: location.value,
          isValid: isLocationValid,
        },
        price: {
          value: price.value,
          isValid: isPriceValid,
        },
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
      if (formState.category.value === 'sell') {
        formData.append(data[i][0], data[i][1].value);
      }
      if (formState.category.value !== 'sell' && data[i][0] !== 'price') {
        formData.append(data[i][0], data[i][1].value);
      }
    }

    if (avatarData) {
      formData.append('avatar', avatarData);
    }

    try {
      await addNotice(formData);
      toggleModal();
      toast.success('Your notice is added');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ModalCard onSubmit={() => handleSubmit()}>
      <FormTitle>Add notice</FormTitle>
      <div style={{ display: step === 1 ? 'block' : 'none' }}>
        <FormText>
          You can sell your pet, find your lost pet, create notice with lost pet
          or give pet in good hands
        </FormText>
        <SelectCategory>
          <CategoryInput
            id="lost-found"
            type="radio"
            name="category"
            value="lost-found"
            onChange={handleChange}
            required
          />
          <CategoryLabel htmlFor="lost-found">Lost/found</CategoryLabel>
          <CategoryInput
            id="in-good-hands"
            type="radio"
            name="category"
            value="in-good-hands"
            onChange={handleChange}
          />
          <CategoryLabel htmlFor="in-good-hands">In good hands</CategoryLabel>
          <CategoryInput
            id="sell"
            type="radio"
            name="category"
            value="sell"
            onChange={handleChange}
          />
          <CategoryLabel htmlFor="sell">Sell</CategoryLabel>
          <ValidationError
            message={validationErrMsg.category}
            isHidden={formState.category.isValid}
          />
        </SelectCategory>
        <InputList>
          <InputItem>
            <FormInputLabel>
              Tittle of ad<RequiredSymbol>*</RequiredSymbol>
            </FormInputLabel>
            <FormInput
              placeholder={'Type title'}
              type={'text'}
              name={'title'}
              onChange={handleChange}
            />
            <ValidationError
              message={validationErrMsg.title}
              isHidden={formState.title.isValid}
            />
          </InputItem>
          <InputItem>
            <FormInputLabel>Name pet</FormInputLabel>
            <FormInput
              placeholder={'Type name pet'}
              type={'text'}
              name={'name'}
              onChange={handleChange}
            />
            <ValidationError
              message={validationErrMsg.petName}
              isHidden={formState.name.isValid}
            />
          </InputItem>
          <InputItem>
            <FormInputLabel>Date of birth</FormInputLabel>
            <FormInput
              placeholder={'Type date of birth'}
              type={'text'}
              name={'birthdate'}
              onChange={handleChange}
            />
            <ValidationError
              message={validationErrMsg.birthdate}
              isHidden={formState.birthdate.isValid}
            />
          </InputItem>
          <InputItem>
            <FormInputLabel>Breed</FormInputLabel>
            <FormInput
              placeholder={'Type breed'}
              type={'text'}
              name={'breed'}
              onChange={handleChange}
            />
            <ValidationError
              message={validationErrMsg.breed}
              isHidden={formState.breed.isValid}
            />
          </InputItem>
        </InputList>
      </div>
      <div style={{ display: step === 2 ? 'block' : 'none' }}>
        <FormInputLabel indent={'big'}>
          The sex<RequiredSymbol>*</RequiredSymbol>
        </FormInputLabel>
        <SelectSex>
          <SexInput
            id="male"
            type="radio"
            name="sex"
            value="male"
            onChange={handleChange}
          />
          <SexLabel htmlFor="male">
            <ImgWrapper>
              <img src={maleImg} alt="male sex" />
            </ImgWrapper>
            Male
          </SexLabel>
          <SexInput
            id="female"
            type="radio"
            name="sex"
            value="female"
            onChange={handleChange}
          />
          <SexLabel htmlFor="female">
            <ImgWrapper>
              <img src={femaleImg} alt="female sex" />
            </ImgWrapper>
            Female
          </SexLabel>
          <ValidationError
            message={validationErrMsg.sex}
            isHidden={formState.sex.isValid}
          />
        </SelectSex>
        <InputList>
          <InputItem>
            <FormInputLabel>
              Location<RequiredSymbol>*</RequiredSymbol>
            </FormInputLabel>
            <FormInput
              placeholder={'City, Region'}
              type={'text'}
              name={'location'}
              onChange={handleChange}
            />
            <ValidationError
              message={validationErrMsg.city}
              isHidden={formState.location.isValid}
            />
          </InputItem>
          {formState.category.value === 'sell' && (
            <InputItem>
              <FormInputLabel>
                Price<RequiredSymbol>*</RequiredSymbol>
              </FormInputLabel>
              <FormInput
                placeholder={'Type price'}
                type={'text'}
                name={'price'}
                onChange={handleChange}
              />
              <ValidationError
                message={validationErrMsg.price}
                isHidden={formState.price.isValid}
              />
            </InputItem>
          )}
          <InputItem>
            <FormInputLabel>Load the pet’s image</FormInputLabel>
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
          </InputItem>
          <InputItem>
            <FormInputLabel>
              Comments<RequiredSymbol>*</RequiredSymbol>
            </FormInputLabel>
            <FormTextarea
              placeholder={'Type comments'}
              name={'comments'}
              rows={'3'}
              onChange={handleChange}
            />
            <ValidationError
              message={validationErrMsg.comments}
              isHidden={formState.comments.isValid}
            />
          </InputItem>
        </InputList>
      </div>
      <BtnBox>
        <MainButton
          size={'medium'}
          width={'fixed'}
          disabled={isLoading}
          onClick={() => handleFirstBtn()}
        >
          {step === 1 ? 'Next' : 'Done'}
        </MainButton>
        <MainButton
          option={'black'}
          size={'medium'}
          width={'fixed'}
          onClick={() => handleSecondBtn()}
        >
          {step === 1 ? 'Cancel' : 'Back'}
        </MainButton>
      </BtnBox>
      <ModalBtnClose toggleModal={toggleModal} />
      {isLoading && <SpinnerFixed />}
    </ModalCard>
  );
};

ModalAddNotice.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
