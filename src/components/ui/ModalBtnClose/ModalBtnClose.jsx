import PropTypes from 'prop-types';
import { ReactComponent as CloseIcon } from 'data/img/close-icon.svg';
import { BtnClose } from './ModalBtnClose.styled';

export const ModalBtnClose = ({ closeModal }) => {
  return (
    <BtnClose type="button" onClick={() => closeModal()}>
      <CloseIcon />
    </BtnClose>
  );
};

ModalBtnClose.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
