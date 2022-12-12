import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useDeletePetMutation } from 'redux/usersApi';
import { requestErrorPopUp } from 'helpers';
import { MainButton, ModalBtnClose, SpinnerFixed } from 'components';
import { ModalContainer, TittleModal, BtnBox } from './ModalDelete.styled';

export const ModalDelete = ({ id, closeModal }) => {
  const [deletePet, { isLoading }] = useDeletePetMutation();

  const handleDelete = async () => {
    try {
      await deletePet(id).unwrap();
      toast.success('Successfully removed');
    } catch (error) {
      requestErrorPopUp(error);
    } finally {
      closeModal();
    }
  };

  return (
    <ModalContainer>
      <TittleModal>Are you sure you want to delete it?</TittleModal>
      <BtnBox>
        <MainButton disabled={isLoading} onClick={() => handleDelete()}>
          DELETE
        </MainButton>
        <MainButton option={'black'} onClick={() => closeModal()}>
          CANCEL
        </MainButton>
      </BtnBox>
      <ModalBtnClose closeModal={closeModal} />
      {isLoading && <SpinnerFixed />}
    </ModalContainer>
  );
};

ModalDelete.propTypes = {
  id: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
