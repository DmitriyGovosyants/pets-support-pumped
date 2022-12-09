import { format } from 'date-fns';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEditPetMutation } from 'redux/usersApi';
import { ModalEditPetPageOne } from './ModalEditPetPageOne';
import { ModalEditPetPageTwo } from './ModalEditPetPageTwo';
import { ModalBtnClose, SpinnerFixed } from 'components';
import { Wrapper, Title } from './ModalEditPet.styled';

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
  const [step, setStep] = useState(1);
  const [formState, setFormState] = useState({});
  const [avatarData, setAvatarData] = useState();
  const [avatar, setAvatar] = useState(image);

  const handlePageOne = values => {
    setFormState(p => ({ ...p, ...values }));

    setStep(2);
  };

  const handleBackToPageOne = values => {
    setFormState(p => ({ ...p, ...values }));
    setStep(1);
  };

  const onSubmit = async values => {
    const dataToSend = { ...formState, ...values };
    const formData = new FormData();

    for (let key in dataToSend) {
      if (key === 'birthdate') {
        const birthdate = format(new Date(formState.birthdate), 'dd.MM.yyyy');
        formData.append(key, birthdate);
        continue;
      }
      formData.append(key, dataToSend[key]);
    }

    if (avatarData) {
      formData.append('avatar', avatarData);
    }

    try {
      await editPet({ id, formData }).unwrap();
      toast.success('Your pet is added');
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
    } finally {
      closeModal();
    }
  };

  return (
    <Wrapper>
      <Title>Edit pet</Title>
      {step === 1 && (
        <ModalEditPetPageOne
          closeModal={closeModal}
          formState={formState}
          handlePageOne={handlePageOne}
          name={name}
          birthdate={birthdate}
          breed={breed}
        />
      )}
      {step === 2 && (
        <ModalEditPetPageTwo
          formState={formState}
          handleBackToPageOne={handleBackToPageOne}
          onSubmit={onSubmit}
          isLoading={isLoading}
          avatar={avatar}
          setAvatar={setAvatar}
          setAvatarData={setAvatarData}
          comments={comments}
        />
      )}
      <ModalBtnClose closeModal={closeModal} />
      {isLoading && <SpinnerFixed />}
    </Wrapper>
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
