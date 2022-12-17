import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { format } from 'date-fns';
import { toast } from 'react-toastify';
import InputMask from 'comigo-tech-react-input-mask';
import { BsCheckLg } from 'react-icons/bs';
import { HiCamera } from 'react-icons/hi';
import { MdEdit } from 'react-icons/md';
import { useState } from 'react';
import { useGetUserQuery, useUpdateUserMutation } from 'redux/usersApi';
import { ReactComponent as CloseIcon } from 'data/img/close-icon.svg';
import imageNotFound from 'data/img/no-image.webp';
import {
  handleUploadFile,
  editUserSchema,
  isNewData,
  requestErrorPopUp,
  handleDate,
} from 'helpers';
import {
  Logout,
  SpinnerFixed,
  InputBirthdate,
  InputErrorBox,
} from 'components';
import {
  UserDataTitle,
  Wrap,
  Form,
  MainWrap,
  Label,
  InputWrapper,
  EditBtn,
  SubmitBtn,
  AvatarWrapper,
  UserAvatar,
  UploadLabel,
  UploadInput,
  Btn,
  BtnBox,
} from './UserData.styled';

export const UserData = () => {
  const [avatarData, setAvatarData] = useState();
  const [avatar, setAvatar] = useState();
  const [selectedInputName, setSelectedInputName] = useState('');
  const {
    data: {
      data: { user },
    },
  } = useGetUserQuery();
  const [editContact, { isLoading: isEditLoading }] = useUpdateUserMutation();
  const userData = handleDate(user);

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
      birthdate: userData.birthdate || null,
      phone: userData.phone || '',
      city: userData.city || '',
    },
  });

  const onSubmit = async values => {
    if (!isNewData(values, userData) && !avatarData) {
      setSelectedInputName('');
      return;
    }

    const dataToSend = { ...values };
    const formData = new FormData();

    for (let key in dataToSend) {
      if (key === 'birthdate') {
        const birthdate = format(new Date(dataToSend.birthdate), 'dd.MM.yyyy');
        formData.append(key, birthdate);
        continue;
      }
      if (key === 'phone') {
        const phone = values.phone.split(/[-()]+/).join('');
        formData.append(key, phone);
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
      setSelectedInputName('');
      setAvatarData();
    } catch (error) {
      requestErrorPopUp(error);
    }
  };

  const handleFile = e => {
    const file = e.target.files[0];
    handleUploadFile(file, setAvatar, setAvatarData);
  };

  const onCancelSubmit = () => {
    setAvatar();
    setAvatarData();
  };

  const handleCurrentInput = e => {
    setSelectedInputName(e.currentTarget.name);
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
            {!avatarData && (
              <UploadLabel>
                <HiCamera size={26} />
                <UploadInput
                  type="file"
                  name="photo"
                  disabled={selectedInputName}
                  accept=".png, .jpeg, .jpg, .webp"
                  onChange={handleFile}
                />
                Edit photo
              </UploadLabel>
            )}
            {avatarData && (
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
          <MainWrap>
            <InputWrapper first>
              <Label>Name:</Label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    disabled={selectedInputName !== 'name'}
                  />
                )}
              />
              {selectedInputName !== 'name' ? (
                <EditBtn type="button" name="name" onClick={handleCurrentInput}>
                  <MdEdit />
                </EditBtn>
              ) : (
                <SubmitBtn type="submit">
                  <BsCheckLg />
                </SubmitBtn>
              )}
            </InputWrapper>
            <InputErrorBox>{errors?.name?.message}</InputErrorBox>

            <InputWrapper>
              <Label>Email:</Label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="email"
                    disabled={selectedInputName !== 'email'}
                  />
                )}
              />
              {selectedInputName !== 'email' ? (
                <EditBtn
                  type="button"
                  name="email"
                  onClick={handleCurrentInput}
                >
                  <MdEdit />
                </EditBtn>
              ) : (
                <SubmitBtn type="submit">
                  <BsCheckLg />
                </SubmitBtn>
              )}
            </InputWrapper>
            <InputErrorBox>{errors?.email?.message}</InputErrorBox>

            <InputWrapper>
              <Label>Birthday:</Label>
              <InputBirthdate
                control={control}
                birthdate={userData.birthdate}
                disabled={selectedInputName !== 'birthdate'}
              />
              {selectedInputName !== 'birthdate' ? (
                <EditBtn
                  type="button"
                  name="birthdate"
                  onClick={handleCurrentInput}
                >
                  <MdEdit />
                </EditBtn>
              ) : (
                <SubmitBtn type="submit">
                  <BsCheckLg />
                </SubmitBtn>
              )}
            </InputWrapper>
            <InputErrorBox>{errors?.birthdate?.message}</InputErrorBox>

            <InputWrapper>
              <Label>Phone:</Label>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <InputMask
                    {...field}
                    mask={'+38(099)999-99-99'}
                    type="text"
                    alwaysShowMask={true}
                    disabled={selectedInputName !== 'phone'}
                  />
                )}
              />
              {selectedInputName !== 'phone' ? (
                <EditBtn
                  type="button"
                  name="phone"
                  onClick={handleCurrentInput}
                >
                  <MdEdit />
                </EditBtn>
              ) : (
                <SubmitBtn type="submit">
                  <BsCheckLg />
                </SubmitBtn>
              )}
            </InputWrapper>
            <InputErrorBox>{errors?.phone?.message}</InputErrorBox>

            <InputWrapper>
              <Label>City:</Label>
              <Controller
                name="city"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    disabled={selectedInputName !== 'city'}
                  />
                )}
              />
              {selectedInputName !== 'city' ? (
                <EditBtn type="button" name="city" onClick={handleCurrentInput}>
                  <MdEdit />
                </EditBtn>
              ) : (
                <SubmitBtn type="submit">
                  <BsCheckLg />
                </SubmitBtn>
              )}
            </InputWrapper>
            <InputErrorBox>{errors?.city?.message}</InputErrorBox>
          </MainWrap>
        </Form>
        <Logout />
      </Wrap>
      {isEditLoading && <SpinnerFixed />}
    </>
  );
};
