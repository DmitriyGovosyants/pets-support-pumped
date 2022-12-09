import { format } from 'date-fns';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useCreatePetMutation } from 'redux/usersApi';
import { ModalAddPetPageOne } from './ModalAddPetPageOne';
import { ModalAddPetPageTwo } from './ModalAddPetPageTwo';
import { ModalBtnClose, SpinnerFixed } from 'components';
import { Wrapper, Title } from './ModalAddPet.styled';

export const ModalAddPet = ({ closeModal }) => {
  const [addPet, { isLoading }] = useCreatePetMutation();
  const [step, setStep] = useState(1);
  const [formState, setFormState] = useState({});
  const [avatarData, setAvatarData] = useState();
  const [avatar, setAvatar] = useState();

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
      await addPet(formData).unwrap();
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
      <Title>Add pet</Title>
      {step === 1 && (
        <ModalAddPetPageOne
          closeModal={closeModal}
          formState={formState}
          handlePageOne={handlePageOne}
        />
      )}
      {step === 2 && (
        <ModalAddPetPageTwo
          formState={formState}
          handleBackToPageOne={handleBackToPageOne}
          onSubmit={onSubmit}
          isLoading={isLoading}
          avatar={avatar}
          setAvatar={setAvatar}
          setAvatarData={setAvatarData}
        />
      )}
      <ModalBtnClose closeModal={closeModal} />
      {isLoading && <SpinnerFixed />}
    </Wrapper>
  );
};

ModalAddPet.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
