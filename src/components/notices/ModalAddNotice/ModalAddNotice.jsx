import PropTypes from 'prop-types';
import { format } from 'date-fns';
import isDate from 'date-fns/isDate';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAddNoticeMutation } from 'redux/noticesApi';
import { ModalAddNoticePageOne } from './ModalAddNoticePageOne';
import { ModalAddNoticePageTwo } from './ModalAddNoticePageTwo';
import { ModalBtnClose, SpinnerFixed } from 'components';
import { Wrapper, Title } from './ModalAddNotice.styled';

export const ModalAddNotice = ({ closeModal }) => {
  const [addNotice, { isLoading }] = useAddNoticeMutation();
  const [step, setStep] = useState(1);
  const [formState, setFormState] = useState({});

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

  const onSubmit = async ({ sex, location, price }) => {
    console.log(formState, sex, location, price);
    // const { email, password } = formState;
    // console.log(format(new Date(birthdate), 'dd.MM.yyyy'));
    // const phoneWithoutMask = phone.split(/[-()]+/).join('');
    // try {
    //   await signUp({
    //     email,
    //     password,
    //     name,
    //     city,
    //     phone: phoneWithoutMask,
    //   }).unwrap();
    //   toast.info(`${email} is registered`);
    // } catch (error) {
    //   if (error.status === 400) {
    //     toast.error(error.data.message);
    //   }
    //   if (error.status === 404) {
    //     toast.error('Resourses not found');
    //   }
    //   if (error.status === 500) {
    //     toast.error('Server not response');
    //   }
    // }
  };

  console.log(formState);

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
