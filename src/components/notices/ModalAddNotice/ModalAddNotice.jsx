import { format } from 'date-fns';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useAddNoticeMutation } from 'redux/noticesApi';
import { ModalAddNoticePageOne } from './ModalAddNoticePageOne';
import { ModalAddNoticePageTwo } from './ModalAddNoticePageTwo';
import { requestErrorPopUp } from 'helpers';
import { ModalBtnClose, SpinnerFixed } from 'components';
import { Wrapper, Title } from './ModalAddNotice.styled';

export const ModalAddNotice = ({ closeModal }) => {
  const [addNotice, { isLoading }] = useAddNoticeMutation();
  const [step, setStep] = useState(1);
  const [formState, setFormState] = useState({});
  const [avatarData, setAvatarData] = useState();
  const [avatar, setAvatar] = useState();

  const handlePageOne = values => {
    if (formState?.price && values.category !== 'sell') {
      setFormState(p => ({ ...p, ...values, price: '' }));
    } else {
      setFormState(p => ({ ...p, ...values }));
    }

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
      if (key === 'price' && dataToSend[key] === '') {
        continue;
      }
      if (key === 'birthdate' && !dataToSend[key]) {
        continue;
      }
      if (key === 'birthdate' && dataToSend[key]) {
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
      await addNotice(formData).unwrap();
      toast.success('Notice is added');
    } catch (error) {
      requestErrorPopUp(error);
    } finally {
      closeModal();
    }
  };

  return (
    <Wrapper>
      <Title>Add notice</Title>
      {step === 1 && (
        <ModalAddNoticePageOne
          closeModal={closeModal}
          formState={formState}
          handlePageOne={handlePageOne}
        />
      )}
      {step === 2 && (
        <ModalAddNoticePageTwo
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

ModalAddNotice.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
