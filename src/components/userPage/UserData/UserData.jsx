import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
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
  SpinnerFixed,
  UserDataItem,
  InputBirthdate,
  InputErrorBox,
} from 'components';
import { handleUploadFile } from 'helpers';
import {
  UserDataTitle,
  Form,
  Label,
  InfoEditBtn,
  AvatarWrapper,
  UserAvatar,
  AvatarForm,
  UserDataList,
  UploadLabel,
  UploadInput,
  Btn,
  BtnBox,
} from './UserData.styled';

export const UserData = () => {
  const [avatarData, setAvatarData] = useState();
  const [avatar, setAvatar] = useState();
  const [formState, setFormState] = useState({});
  const [isDisabledInput, setIsDisabledInput] = useState('');
  const [isEditBtnDisabled, setIsEditBtnDisabled] = useState(false);
  const {
    data: {
      data: { user: userData },
    },
    refetch,
  } = useGetUserQuery();
  const [editContact, { isLoading: isEditLoading }] = useUpdateUserMutation();
  const birthdateArray = userData.birthdate.split('.');
  const birthdateString =
    birthdateArray[1] + '.' + birthdateArray[0] + '.' + birthdateArray[2];
  const birthdateParse = parseInt(Date.parse(birthdateString), 10);

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
      birthdate: userData.birthdate || birthdateParse || null,
      phone: userData.phone || '',
      city: userData.city || '',
    },
  });

  const onSubmit = async values => {
    const dataToSend = { ...userData, ...values };
    const formData = new FormData();
  };

  // const handleShowForm = e => {
  //   const id = e.currentTarget.id;
  //   setIsShowForm(id);
  //   setIsEditBtnDisabled(true);
  // };

  const handleFile = e => {
    const file = e.target.files[0];
    handleUploadFile(file, setAvatar, setAvatarData);
  };

  const onCancelSubmit = e => {
    console.log(e.target);
    // setAvatar();
    // setAvatarData();
  };

  const onFileSubmit = async e => {
    console.log(e.target);
    // e.preventDefault();

    // try {
    //   const formdata = new FormData();
    //   formdata.append('avatar', avatarData);
    //   await editContact(formdata);
    // } catch (error) {
    //   onCancelSubmit();
    //   console.log(error);
    // } finally {
    //   setAvatarData();
    //   setAvatar();
    //   refetch();
    // }
  };

  return (
    <>
      <UserDataTitle>My information:</UserDataTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <AvatarWrapper>
          <UserAvatar
            src={avatar || userData?.avatarURL || imageNotFound}
            alt="user avatar"
            onError={e => {
              e.target.src = imageNotFound;
            }}
          />
          <AvatarForm action="" onSubmit={onFileSubmit}>
            {!avatarData && (
              <UploadLabel>
                <UploadInput
                  type="file"
                  name="photo"
                  disabled={isEditBtnDisabled}
                  accept=".png, .jpeg, .jpg, .webp"
                  onChange={handleFile}
                />
                <HiCamera size={20} color={theme.colors.accent} />
                Edit photo
              </UploadLabel>
            )}
            {avatarData && (
              <BtnBox>
                <Btn
                  type="button"
                  // disabled={isEditLoading}
                  onClick={() => onCancelSubmit()}
                >
                  <CloseIcon style={{ fill: 'black' }} />
                </Btn>
                <Btn type="submit">
                  <BsCheckLg />
                </Btn>
              </BtnBox>
            )}
          </AvatarForm>
        </AvatarWrapper>
        <Label>
          Name:
          <Controller
            name="name"
            control={control}
            render={({ field }) => <input {...field} type="text" />}
          />
          <InputErrorBox>{errors?.name?.message}</InputErrorBox>
          <InfoEditBtn
            id={'name'}
            // onClick={onShowForm}
            disabled={isEditBtnDisabled}
          >
            <MdEdit />
          </InfoEditBtn>
        </Label>
        <Label>
          Email:
          <Controller
            name="email"
            control={control}
            render={({ field }) => <input {...field} type="email" />}
          />
          <InputErrorBox>{errors?.email?.message}</InputErrorBox>
        </Label>
        <Label>
          Birthday:
          <InputBirthdate control={control} birthdate={userData?.birthdate} />
          <InputErrorBox>{errors?.email?.message}</InputErrorBox>
        </Label>
        <Label>
          Phone:
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <InputMask
                {...field}
                mask={'+38(099)999-99-99'}
                type="text"
                alwaysShowMask={true}
              />
            )}
          />
          <InputErrorBox>{errors?.phone?.message}</InputErrorBox>
        </Label>
        <Label>
          Email:
          <Controller
            name="city"
            control={control}
            render={({ field }) => <input {...field} type="text" />}
          />
          <InputErrorBox>{errors?.city?.message}</InputErrorBox>
        </Label>
      </Form>

      {isEditLoading && <SpinnerFixed />}
    </>
  );
};
