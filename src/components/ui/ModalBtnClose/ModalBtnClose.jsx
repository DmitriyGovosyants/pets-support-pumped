import PropTypes from 'prop-types';
import { ReactComponent as CloseIcon } from 'data/img/close-icon.svg';
import { BtnClose } from './ModalBtnClose.styled';

export const ModalBtnClose = ({ toggleModal }) => {
  return (
    <BtnClose type="button" onClick={() => toggleModal()}>
      <CloseIcon />
    </BtnClose>
  );
};

ModalBtnClose.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
