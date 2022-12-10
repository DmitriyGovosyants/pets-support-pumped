import { format } from 'date-fns';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useCreatePetMutation, useEditPetMutation } from 'redux/usersApi';
import { ModalPetPageOne } from './ModalPetPageOne';
import { ModalPetPageTwo } from './ModalPetPageTwo';
import { ModalBtnClose, SpinnerFixed } from 'components';
import { Wrapper, Title } from './ModalPet.styled';

export const ModalPet = ({
  id,
  image,
  name,
  birthdate,
  breed,
  comments,
  method = 'create',
  closeModal,
}) => {
  const [addPet, addPetResult] = useCreatePetMutation();
  const [editPet, editPetResult] = useEditPetMutation();
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
      if (method === 'create') {
        await addPet(formData).unwrap();
        toast.success('Your pet is added');
        return;
      }
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
      <Title>{method === 'create' ? 'Add pet' : 'Edit pet'}</Title>
      {step === 1 && (
        <ModalPetPageOne
          closeModal={closeModal}
          formState={formState}
          handlePageOne={handlePageOne}
          name={name}
          birthdate={birthdate}
          breed={breed}
        />
      )}
      {step === 2 && (
        <ModalPetPageTwo
          formState={formState}
          handleBackToPageOne={handleBackToPageOne}
          onSubmit={onSubmit}
          isLoading={addPetResult.isLoading || editPetResult.isLoading}
          avatar={avatar}
          setAvatar={setAvatar}
          setAvatarData={setAvatarData}
          comments={comments}
        />
      )}
      <ModalBtnClose closeModal={closeModal} />
      {(addPetResult.isLoading || editPetResult.isLoading) && <SpinnerFixed />}
    </Wrapper>
  );
};

ModalPet.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  birthdate: PropTypes.string,
  breed: PropTypes.string,
  comments: PropTypes.string,
  method: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
};
