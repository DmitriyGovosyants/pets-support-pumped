import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from 'redux/useAuth';
import { Modal, ModalAddsPet } from 'components';
import { Button, Wrapper, Text, StyledPlusIcon } from './AddUsersPet.styled';

export const AddUsersPet = () => {
  const [showModal, setShowModal] = useState(false);
  const { user } = useAuth();

  const handleAddPet = () => {
    user ? setShowModal(true) : toast.error('Please login');
  };

  return (
    <>
      <Wrapper>
        <Text>Add pet</Text>
        <Button type="button" onClick={() => handleAddPet()}>
          <StyledPlusIcon />
        </Button>
      </Wrapper>
      {showModal && (
        <Modal toggleModal={() => setShowModal(s => !s)}>
          <ModalAddsPet toggleModal={() => setShowModal(false)} />
        </Modal>
      )}
    </>
  );
};
