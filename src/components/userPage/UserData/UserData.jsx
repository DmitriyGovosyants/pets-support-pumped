import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState, useEffect } from 'react';
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
import { editUserSchema, requestErrorPopUp } from '../../../helpers';
import { Logout, SpinnerFixed, InputBirthdate } from 'components';
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
  UploadLabel,
  UploadInput,
  Btn,
  BtnBox,
} from './UserData.styled';

export const UserData = () => {
  const [avatarData, setAvatarData] = useState();
  const [avatar, setAvatar] = useState();
  const [isConfirmFileBox, seIsConfirmFileBox] = useState(false);
  const [selectedInputName, setSelectedInputName] = useState('');
  const [selectedButtonName, setSelectedButtonName] = useState('');
  const {
    data: {
      data: { user: userData },
    },
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

  useEffect(() => {
    if (!errors[selectedInputName]) {
      setSelectedButtonName('');
      return;
    }
    toast.error(errors[selectedInputName].message);
    setSelectedButtonName(selectedInputName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedInputName, errors[selectedInputName]]);

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
      console.log(editContact);
      toast.success('Your info is edited');
      seIsConfirmFileBox(false);
      return;
    } catch (error) {
      requestErrorPopUp(error);
    }
  };

  const handleFile = e => {
    const file = e.target.files[0];
    handleUploadFile(file, setAvatar, setAvatarData);
    seIsConfirmFileBox(true);
  };

  const handleDisable = e => {
    const id = e.currentTarget.getAttribute('id');
    let inputValue = e.currentTarget.parentNode.firstChild.value;
    if (id === 'birthday') {
      inputValue = document.querySelector('#birthdate-add-notice').value;
    }
    if (id === selectedInputName) {
      setSelectedInputName('');
      if (inputValue === userData[id]) {
        return;
      }
      e.currentTarget.setAttribute('type', 'submit');
      return;
    }
    setSelectedInputName(id);
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
                  disabled={selectedInputName}
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
            <Label disabled={!(selectedInputName === 'name')}>
              Name:
              <InputWrapper>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      disabled={!(selectedInputName === 'name')}
                    />
                  )}
                />
                <InfoEditBtn
                  type="button"
                  id="name"
                  onClick={handleDisable}
                  disabled={selectedButtonName === 'name'}
                  focused={selectedInputName === 'name'}
                >
                  {selectedInputName === 'name' ? <BsCheckLg /> : <MdEdit />}
                </InfoEditBtn>
              </InputWrapper>
            </Label>
            <Label disabled={!(selectedInputName === 'email')}>
              Email:
              <InputWrapper>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="email"
                      disabled={!(selectedInputName === 'email')}
                    />
                  )}
                />
                <InfoEditBtn
                  type="button"
                  id="email"
                  onClick={handleDisable}
                  disabled={selectedButtonName === 'email'}
                  focused={selectedInputName === 'email'}
                >
                  {selectedInputName === 'email' ? <BsCheckLg /> : <MdEdit />}
                </InfoEditBtn>
              </InputWrapper>
            </Label>
            <Label disabled={!(selectedInputName === 'birthday')}>
              Birthday:
              <InputWrapper>
                <InputBirthdate
                  control={control}
                  birthdate={birthdateParse}
                  disabled={!(selectedInputName === 'birthday')}
                />
                <InfoEditBtn
                  type="button"
                  id="birthday"
                  onClick={handleDisable}
                  disabled={selectedButtonName === 'birthday'}
                  focused={selectedInputName === 'birthday'}
                >
                  {selectedInputName === 'birthday' ? (
                    <BsCheckLg />
                  ) : (
                    <MdEdit />
                  )}
                </InfoEditBtn>
              </InputWrapper>
            </Label>
            <Label disabled={!(selectedInputName === 'phone')}>
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
                      disabled={!(selectedInputName === 'phone')}
                    />
                  )}
                />
                <InfoEditBtn
                  type="button"
                  id="phone"
                  onClick={handleDisable}
                  disabled={selectedButtonName === 'phone'}
                  focused={selectedInputName === 'phone'}
                >
                  {selectedInputName === 'phone' ? <BsCheckLg /> : <MdEdit />}
                </InfoEditBtn>
              </InputWrapper>
            </Label>
            <Label disabled={!(selectedInputName === 'city')}>
              City:
              <InputWrapper>
                <Controller
                  name="city"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      disabled={!(selectedInputName === 'city')}
                    />
                  )}
                />
                <InfoEditBtn
                  type="button"
                  id="city"
                  disabled={selectedButtonName === 'city'}
                  onClick={handleDisable}
                  focused={selectedInputName === 'city'}
                >
                  {selectedInputName === 'city' ? <BsCheckLg /> : <MdEdit />}
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
