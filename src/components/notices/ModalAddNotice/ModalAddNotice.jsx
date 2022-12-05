import PropTypes from 'prop-types';
import { format } from 'date-fns';
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
    console.log(values);
    // console.log(format(new Date(values.birthdate), 'dd.MM.yyyy'));
    // setFormState(p => ({ ...p, ...values }));
    // setStep(2);
  };

  const handleBackToPageOne = values => {
    // setFormState(p => ({ ...p, ...values }));
    // setStep(1);
  };

  const onSubmit = async ({ name, city, phone }) => {
    // const { email, password } = formState;
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
      {/* {step === 2 && (
        <ModalAddNoticePageTwo
        formState={formState}
        handleBackToPageOne={handleBackToPageOne}
        onSubmit={onSubmit}
        isLoading={isLoading}
        />
      )} */}
      <ModalBtnClose closeModal={closeModal} />
      {isLoading && <SpinnerFixed />}
    </Wrapper>
  );
};

ModalAddNotice.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
