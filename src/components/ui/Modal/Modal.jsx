import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');
const body = document.getElementsByTagName('body')[0];

export const Modal = ({ children, toggleModal }) => {
  const isMounted = useRef(false);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };

    isMounted.current = true;
    window.addEventListener('keydown', handleKeyDown);
    disableBodyScroll(body);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      enableBodyScroll(body);
    };
  }, [toggleModal]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick} mounted={isMounted.current}>
      {children}
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  toggleModal: PropTypes.func,
};
