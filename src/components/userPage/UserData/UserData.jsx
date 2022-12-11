import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { format } from 'date-fns';
import { toast } from 'react-toastify';
import InputMask from 'comigo-tech-react-input-mask';
import { BsCheckLg } from 'react-icons/bs';
import { HiCamera } from 'react-icons/hi';
import { MdEdit } from 'react-icons/md';
import { theme } from 'styles';
import { ReactComponent as CloseIcon } from 'data/img/close-icon.svg';
import imageNotFound from 'data/img/no-image.webp';
import { useGetUserQuery, useUpdateUserMutation } from 'redux/usersApi';
import { editUserSchema } from '../../../helpers/formValidationNew';
import { orderUserFields } from 'constants/constants';
import {
  Logout,
  SpinnerFixed,
  UserDataItem,
  InputBirthdate,
  InputErrorBox,
} from 'components';
import { handleUploadFile } from 'helpers';
import {
  UserDataTitle,
  Wrap,
  Form,
  Label,
  InputWrapper,
  InfoEditBtn,
  AvatarWrapper,
  UserAvatar,
  UserDataList,
  UploadLabel,
  UploadInput,
  Btn,
  BtnBox,
} from './UserData.styled';

export const UserData = () => {
  const [avatarData, setAvatarData] = useState();
  const [avatar, setAvatar] = useState();
  const [isConfirmFileBox, seIsConfirmFileBox] = useState(false);
  const [formState, setFormState] = useState({});
  const [isDisabledInput, setIsDisabledInput] = useState('');
  const {
    data: {
      data: { user: userData },
    },
    refetch,
  } = useGetUserQuery();
  const [editContact, { isLoading: isEditLoading }] = useUpdateUserMutation();
  let birthdateParse;
  if (userData.birthdate) {
    const birthdateArray = userData.birthdate.split('.');
    const birthdateString =
      birthdateArray[1] + '.' + birthdateArray[0] + '.' + birthdateArray[2];
    birthdateParse = parseInt(Date.parse(birthdateString), 10);
  }

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editUserSchema),
    mode: 'onBlur',
    defaultValues: {
      name: userData.name || '',
      email: userData.email || '',
      birthdate: birthdateParse || null,
      phone: userData.phone || '',
      city: userData.city || '',
    },
  });

  const onSubmit = async values => {
    const dataToSend = { ...values };
    const formData = new FormData();
    for (let key in dataToSend) {
      if (key === 'birthdate') {
        const birthdate = format(new Date(dataToSend.birthdate), 'dd.MM.yyyy');
        formData.append(key, birthdate);
        continue;
      }
      formData.append(key, dataToSend[key]);
    }
    if (avatarData) {
      formData.append('avatar', avatarData);
    }

    try {
      await editContact(formData).unwrap();
      toast.success('Your info is edited');
      seIsConfirmFileBox(false);
      return;
    } catch (error) {
      if (error.status === 400) {
        toast.error(error.data.message);
      }
      if (error.status === 404) {
        toast.error('Resourses not found');
      }
      if (error.status === 500) {
        toast.error('Server not response');
      }
    }
  };

  const handleFile = e => {
    const file = e.target.files[0];
    handleUploadFile(file, setAvatar, setAvatarData);
    seIsConfirmFileBox(true);
  };

  const handleDisable = e => {
    const id = e.currentTarget.getAttribute('id');
    const inputValue = e.currentTarget.parentNode.firstChild.value;
    console.log(inputValue);
    if (id === isDisabledInput) {
      setIsDisabledInput('');
      if (inputValue === userData[id]) {
        return;
      }
      e.currentTarget.setAttribute('type', 'submit');
      return;
    }
    setIsDisabledInput(id);
  };

  const onCancelSubmit = () => {
    setAvatar();
    setAvatarData();
    seIsConfirmFileBox(false);
  };

  return (
    <>
      <UserDataTitle>My information:</UserDataTitle>
      <Wrap>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <AvatarWrapper>
            <UserAvatar
              src={avatar || userData?.avatarURL || imageNotFound}
              alt="user avatar"
              onError={e => {
                e.target.src = imageNotFound;
              }}
            />
            {(!avatarData || !isConfirmFileBox) && (
              <UploadLabel>
                <HiCamera size={20} color={theme.colors.accent} />
                <UploadInput
                  type="file"
                  name="photo"
                  disabled={isDisabledInput}
                  accept=".png, .jpeg, .jpg, .webp"
                  onChange={handleFile}
                />
                <p>Edit photo</p>
              </UploadLabel>
            )}
            {avatarData && isConfirmFileBox && (
              <BtnBox>
                <Btn type="button" onClick={() => onCancelSubmit()}>
                  <CloseIcon style={{ fill: 'black' }} />
                </Btn>
                <Btn type="submit">
                  <BsCheckLg />
                </Btn>
              </BtnBox>
            )}
          </AvatarWrapper>
          <div>
            <Label disabled={!(isDisabledInput === 'name')}>
              Name:
              <InputWrapper>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      disabled={!(isDisabledInput === 'name')}
                    />
                  )}
                />
                <InputErrorBox>{errors?.name?.message}</InputErrorBox>
                <InfoEditBtn
                  type="button"
                  id={'name'}
                  onClick={handleDisable}
                  focused={isDisabledInput === 'name'}
                >
                  {isDisabledInput === 'name' ? <BsCheckLg /> : <MdEdit />}
                </InfoEditBtn>
              </InputWrapper>
            </Label>
            <Label disabled={!(isDisabledInput === 'email')}>
              Email:
              <InputWrapper>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="email"
                      disabled={!(isDisabledInput === 'email')}
                    />
                  )}
                />
                <InputErrorBox>{errors?.email?.message}</InputErrorBox>
                <InfoEditBtn
                  type="button"
                  id={'email'}
                  onClick={handleDisable}
                  focused={isDisabledInput === 'email'}
                >
                  {isDisabledInput === 'email' ? <BsCheckLg /> : <MdEdit />}
                </InfoEditBtn>
              </InputWrapper>
            </Label>
            <Label disabled={!(isDisabledInput === 'birthday')}>
              Birthday:
              <InputWrapper>
                <InputBirthdate
                  control={control}
                  birthdate={birthdateParse}
                  disabled={!(isDisabledInput === 'birthday')}
                />
                <InputErrorBox>{errors?.email?.message}</InputErrorBox>
                <InfoEditBtn
                  type="button"
                  id={'birthday'}
                  onClick={handleDisable}
                  focused={isDisabledInput === 'birthday'}
                >
                  {isDisabledInput === 'birthday' ? <BsCheckLg /> : <MdEdit />}
                </InfoEditBtn>
              </InputWrapper>
            </Label>
            <Label disabled={!(isDisabledInput === 'phone')}>
              Phone:
              <InputWrapper>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <InputMask
                      {...field}
                      mask={'+38(099)999-99-99'}
                      type="text"
                      alwaysShowMask={true}
                      disabled={!(isDisabledInput === 'phone')}
                    />
                  )}
                />
                <InputErrorBox>{errors?.phone?.message}</InputErrorBox>
                <InfoEditBtn
                  type="button"
                  id={'phone'}
                  onClick={handleDisable}
                  focused={isDisabledInput === 'phone'}
                >
                  {isDisabledInput === 'phone' ? <BsCheckLg /> : <MdEdit />}
                </InfoEditBtn>
              </InputWrapper>
            </Label>
            <Label disabled={!(isDisabledInput === 'city')}>
              City:
              <InputWrapper>
                <Controller
                  name="city"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      disabled={!(isDisabledInput === 'city')}
                    />
                  )}
                />
                <InputErrorBox>{errors?.city?.message}</InputErrorBox>
                <InfoEditBtn
                  type="button"
                  id={'city'}
                  onClick={handleDisable}
                  focused={isDisabledInput === 'city'}
                >
                  {isDisabledInput === 'city' ? <BsCheckLg /> : <MdEdit />}
                </InfoEditBtn>
              </InputWrapper>
            </Label>
          </div>
        </Form>
        <Logout />
      </Wrap>

      {isEditLoading && <SpinnerFixed />}
    </>
  );
};
